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
import ShowProfile from './ShowProfile.jsx';

import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

import ActivityList from './ActivityList.jsx';
import NewActivityTag from './NewActivityTag.jsx';
import NavBar from './NavBar.jsx';

import Seed from './Seed.jsx'


// App component - represents the whole app
 class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {

  }

  render() {


    let newEvent
      if (this.props.currentUser) {
        newEvent = <NewEvent/>
      }

    return (
      <div>
        <NavBar/>


          <div className="col-sm-12 container">
            <div id="profile_page">
              <a href='/user/:id'>My Profile</a>

              <ShowProfile/>

              <br/>
              <a href='/events/new'>Click here to create an Event</a>
              <GuideProfile/>
              <br/>

            </div>
          </div>

          <div className="col-sm-12 container">
            <div id="event_page">

              <ListEvent/>

            <h2>Browse Events</h2>
              {this.props.content}
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





