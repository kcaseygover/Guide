import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

import { Tasks } from '../api/tasks.js';
import Task from './Task.jsx';

import { Events } from '../api/events.js';
import ListEvent from './ListEvent.jsx';

import AccountsUIWrapper from './AccountsUIWrapper.jsx';

import { Profiles } from '../api/profiles.js';
import Profile from './Profile.jsx';
import GuideProfile from './GuideProfile.jsx';

import NewEvent from './NewEvent.jsx';

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

  render() {
    let newEvent
    if (this.props.currentUser) {
      newEvent = <NewEvent/>
    }

    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <header>
                <h1>Guide List ({this.props.incompleteCount})</h1>

                <AccountsUIWrapper />
              </header>
            </div>
          </div>
        </nav>
        <div className="container">
          <Profile/>
          <GuideProfile/>
             { newEvent }
          <div>
            <ListEvent/>
          </div>
          <br/>
          <div>
            <h3>By Activity</h3>
            <ActivityList activities={activities}/>
          </div>
        </div>
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
   activities: activities.name,
  };
}, App);

