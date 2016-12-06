import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

export default class NavBar extends Component {
  constructor(props) {
    super(props);


  }


  render() {
    function areTheyAGuide(){
      let show;
      let user = Meteor.user();

      (user && user.guideInfo && user.info ) ? show = true : show = false;
      return show
    }

    return(
      <header>
        <h1><a href='/'>Guide Me</a></h1>
        <nav className="nav">
          <AccountsUIWrapper />
          {Meteor.user() ? (<a href='/editprofile'>Edit Profile</a>):''}
          {areTheyAGuide() ? <a href='/events/new'>New Event</a>:''}
          {Meteor.user() ? (<a href='/guideapplication'>Become A Guide</a>):''}
      </nav>
    </header>

    );
  }
}