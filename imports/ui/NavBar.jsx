import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
      // this.state = { search: '' };

  }


// to limit ie: 20 characters,
//can change to: event.target.value.substr(0, 20)
// updateSearch(event) {
//   this.setState({search: event.target.value});
// }

  render() {

    return(
      <header>
        <h1><a href='/'>Guide Me</a></h1>
        <nav className="nav">
          <AccountsUIWrapper />
          <a href='/editprofile' className="editProfileLink">Edit Profile</a>
          <a href='/events/new' className="addNewEvent">New Event</a>
        </nav>
      </header>
    );
  }
}