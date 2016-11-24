import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

import { Events } from '../api/events.js';
import Event from './Event.jsx';
import ListEvent from './ListEvent.jsx';

import AccountsUIWrapper from './AccountsUIWrapper.jsx';

import { Profiles } from '../api/profiles.js';
import Profile from './Profile.jsx';
import GuideProfile from './GuideProfile.jsx';

import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

import ActivityList from './ActivityList.jsx';

let activities = [{ id: 1, name: 'hiking'}, { id: 2, name: 'surfing'}];
// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideCompleted: false,
    };
  }


  handleSubmit(event) {
    console.log(this);
    event.preventDefault();
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





  render() {

    return (
      <div className="container">
        <header>
         <h1>Guide List </h1>

           <label className="hide-completed">
            <input
              type="checkbox"
              readOnly
              checked={this.state.hideCompleted}
              onClick={this.toggleHideCompleted.bind(this)}
            />
            Hide Completed Events
          </label>

          <AccountsUIWrapper />
          </header>

           { this.props.currentUser ?
            <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
              <input
                type="text"
                ref="textInput"
                placeholder="Type to add new Events"
              />
            </form> : ''
          }
        <Profile/>
        <GuideProfile/>
        <br/>
        <div>
        <ListEvent/>
        <h3>By Activity</h3>
        <ActivityList activities={activities}/>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  currentUser: PropTypes.object,
  events: PropTypes.array.isRequired

};

export default createContainer(() => {


   Meteor.subscribe('users');
   Meteor.subscribe('events');

  return {
   events: Events.find({}, { sort: { createdAt: -1 } }).fetch(),
   currentUser:  Meteor.user(),
   activities: activities.name,
  };
}, App);