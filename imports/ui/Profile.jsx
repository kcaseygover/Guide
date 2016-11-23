import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

export default class Profile extends Component {
  constructor(props){
    super(props);
    this.updateFirstName = this.updateFirstName.bind(this);
    this.updateLastName = this.updateLastName.bind(this);
    this.updateDob = this.updateDob.bind(this);
    this.updateBio = this.updateBio.bind(this);
    this.updateInterests = this.updateInterests.bind(this);

    this.state = {
    firstName:"",
    lastName:"",
    dob:"",
    bio:"",
    interests:""
    }
  }

  handleProfileSubmit() {
    let profile = this.state;
    Meteor.call('profiles.addUserProfile', {profile});
  }

  updateFirstName(e) {this.setState({firstName: e.target.value});}
  updateLastName(e) {this.setState({lastName: e.target.value});}
  updateDob(e) {this.setState({dob: e.target.value});}
  updateBio(e) {this.setState({bio: e.target.value});}
  updateInterests(e) {this.setState({interests: e.target.value});}

  render() {
    // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS

    return (
      <div>
        <form className= "profile" onSubmit={this.handleProfileSubmit.bind(this)}>
            First Name:
            <input  className="first" type="text"  name='first_name'  onChange={this.updateFirstName} />
            Last Name:
            <input className="last" type="text"  onChange={this.updateNewLastName} />
          <br/>
            DOB:
            <input className="dob" type="date" onChange={this.updateNewDob}/>
            Bio:
            <input  className="bio" type="text" onChange={this.updateNewBio}/>
            Interests:
            <input className="interests" type="text"  onChange={this.updateNewInterests}/>
          <br/>
            <input type="submit"/>
        </form>
      </div>

    );
  }
}

Profile.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required

  // showPrivateButton: React.PropTypes.bool.isRequired,
};