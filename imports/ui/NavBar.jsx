import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

export default class ActivityList extends Component {
  constructor(props) {
    super(props);
      this.state = { search: '' };

  }


// to limit ie: 20 characters,
//can change to: event.target.value.substr(0, 20)
updateSearch(event) {
  this.setState({search: event.target.value});
}

  render() {

    return(

      <nav className="nav">
        <a href='/editprofile'>Edit Profile</a>
        <a href='/events/new'>New Event</a>
        <a href='/'><h1>Guide Me</h1></a>
        <AccountsUIWrapper />
        <span className="glyphicon glyphicon-user" aria-hidden="true"></span>

      </nav>

    );
  }
}