import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

export default class Profile extends Component {
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
      <form className= "profile">
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
         <br/>
        <label>
          Interests:
          <input className="last" type="text"/>
        </label>
        <label>
          Do you want to be a guide?
          <input className="guide?" type="checkbox"/>
        </label>


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
      </form>

    );
  }
}

Profile.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required

  // showPrivateButton: React.PropTypes.bool.isRequired,
};