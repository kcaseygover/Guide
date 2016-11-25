import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

import { Events } from '../api/events.js';
import Event from './Event.jsx';
import ListEvent from './ListEvent.jsx';
import NewEvent from './NewEvent';

import InterestInParticipating from './InterestInParticipating';

import { Profiles } from '../api/profiles.js';
import Profile from './Profile.jsx';
import GuideProfile from './GuideProfile.jsx';

import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

import ActivityList from './ActivityList.jsx';
import NewActivityTag from './NewActivityTag.jsx';
import NavBar from './NavBar.jsx';

let activities = [{ id: 1, name: 'hiking'}, { id: 2, name: 'surfing'}];
// App component - represents the whole app
 class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let newEvent
      if (this.props.currentUser) {
        newEvent = <NewEvent/>
      }

    return (
      <div>
        <NavBar/>
        <div className="row">
          <div className="col-sm-4 container">
            <div id="profile_page">
              <Profile/>
              <GuideProfile/>
              <NewEvent/>
            </div>
          </div>

          <div className="col-sm-8 container">
            <div id="event_page">
            <h2>Browse Events</h2>
              <ListEvent/>
              <InterestInParticipating/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  currentUser: PropTypes.object,

};

export default createContainer(() => {

   Meteor.subscribe('users');

  return {
   currentUser:  Meteor.user(),

  };
}, App);





