import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

import { Tasks } from '../api/tasks.js';
import Task from './Task.jsx';

import { Events } from '../api/events.js';
import Event from './Event.jsx';

import AccountsUIWrapper from './AccountsUIWrapper.jsx';

import { Profiles } from '../api/profiles.js';
import Profile from './Profile.jsx';

import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideCompleted: false,
    };
  }


  handleSubmit(ev) {
    ev.preventDefault();
    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    Meteor.call('events.insert', text);
    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  toggleHideCompleted() {
    this.setState({
      hideCompleted: !this.state.hideCompleted,
    });
  }


  renderTasks() {
    let filteredTasks = this.props.tasks;
    if (this.state.hideCompleted) {
      filteredTasks = filteredTasks.filter(task => !task.checked);
    }

    return filteredTasks.map((task) => {
      const currentUserId = this.props.currentUser && this.props.currentUser._id;
      const showPrivateButton = task.owner === currentUserId;

      return (
        <Task
          key={task._id}
          task={task}
          showPrivateButton={showPrivateButton}
        />
      );
    });
  }

  renderEvents() {
    let filteredEvents = this.props.events;
    if (this.state.hideCompleted) {
      filteredEvents = filteredEvents.filter(event => !event.checked);
    }

    return filteredEvents.map((event) => {
      const currentUserId = this.props.currentUser && this.props.currentUser._id;
      const showPrivateButton = event.owner === currentUserId;

      return (
        <Event
          key={event._id}
          event={event}
          showPrivateButton={showPrivateButton}
        />
      );
    });
  }


  render() {
    return (
      <div className="container">
        <header>
         <h1>Guide List ({this.props.incompleteCount})</h1>

           <label className="hide-completed">
            <input
              type="checkbox"
              readOnly
              checked={this.state.hideCompleted}
              onClick={this.toggleHideCompleted.bind(this)}
            />
            Hide Completed Tasks
          </label>

          <AccountsUIWrapper />

           { this.props.currentUser ?
            <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
              <input
                type="text"
                ref="textInput"
                placeholder="Type to add new tasks"
              />
            </form> : ''
          }
        </header>



        <Profile/>
        <ul>
          {this.renderEvents()}
        </ul>
        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}

App.propTypes = {
  tasks: PropTypes.array.isRequired,
  incompleteCount: PropTypes.number.isRequired,
  currentUser: PropTypes.object,
  events: PropTypes.array.isRequired
};

export default createContainer(() => {

   Meteor.subscribe('tasks');
   Meteor.subscribe('users');
   Meteor.subscribe('events');

  return {
   events: Events.find({}, { sort: { createdAt: -1 } }).fetch(),
   tasks:  Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
   incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
   currentUser:  Meteor.user(),
  };
}, App);