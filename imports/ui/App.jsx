import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

import { Events } from '../api/events.js';
import Event from './Event.jsx';
import ListEvent from './ListEvent.jsx';
import NewEvent from './NewEvent';

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
    };
  }

  render() {


    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <header>
                <h1>Guide List </h1>
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
      </div>
    )
  }
}

App.propTypes = {
  currentUser: PropTypes.object,
  activities: PropTypes.string
};

export default createContainer(() => {

   Meteor.subscribe('users');

  return {
   currentUser:  Meteor.user(),
   activities: activities.name,
  };
}, App);





