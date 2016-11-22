import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

export default class Profile extends Component {

  handleProfileSubmit() {

    console.log("anything");
    Meteor.call('profiles.addUserProfile');
  }

  toggleChecked() {
    // Set the checked property to the opposite of its current value
    Meteor.call('tasks.setChecked', this.props.task._id, !this.props.task.checked);
  }
  togglePrivate() {
    Meteor.call('tasks.setPrivate', this.props.task._id, ! this.props.task.private);
  }
  deleteThisTask() {
    Meteor.call('tasks.remove', this.props.task._id);
  }
  render() {
    // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS

    return (
      <div>
      <form className= "profile" onSubmit={this.handleProfileSubmit.bind(this)}>
        <label>
          First Name:
          <input  className="first" type="text"/>
        </label>
        <label>
          Last Name:
          <input className="last" type="text"/>
        </label>
        <br/>
        <label>
          DOB:
          <input className="dob" type="date"/>
        </label>
        <label>
          Bio:
          <input  className="bio" type="text"/>
        </label>
        <label>
          Interests:
          <input className="interests" type="text"/>
        </label>
        <br/>
        <label>
          <input type="submit"/>
        </label>
        <label>
          Do you want to be a guide?
          <input className="guide?" type="checkbox"/>
        </label>
        </form>
      <li className="guideInfo">
        <label>
          Certifications:
          <input  className="certs" type="text"/>
        </label>
        <label>
          Expeirience:
          <input  className="certs" type="text"/>
        </label>
      </li>
      </div>

    );
  }
}

Profile.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required

  // showPrivateButton: React.PropTypes.bool.isRequired,
};