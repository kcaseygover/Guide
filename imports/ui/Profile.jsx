import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

export default class Profile extends Component {
  constructor(props){
    super(props);
    this.updateNewFirstName = this.updateNewFirstName.bind(this);
    this.updateNewLastName = this.updateNewLastName.bind(this);
    this.updateNewDob = this.updateNewDob.bind(this);
    this.updateNewBio = this.updateNewBio.bind(this);
    this.updateNewInterests = this.updateNewInterests.bind(this);

    this._handleChange = this._handleChange.bind(this)

    this.state = {
    first_name:"",
    last_name:"",
    dob:"",
    bio:"",
    interests:""
    }
  }

  handleProfileSubmit() {
    let profile = this.state;
    Meteor.call('profiles.addUserProfile', {profile});
  }

  _handleChange(name, value) {
        this.setState({...this.state, [name]: value})
    }
  // _handleChange(name, e) {
  //       this.setState({name: e.target.value})
  //   }
  updateNewFirstName(e) {
    this.setState({first_name: e.target.value});
  }
  updateNewLastName(e) {
    this.setState({last_name: e.target.value});
  }
  updateNewDob(e) {
    this.setState({dob: e.target.value});
  }
  updateNewBio(e) {
    this.setState({bio: e.target.value});
  }
  updateNewInterests(e) {
    this.setState({interests: e.target.value});
  }

  render() {
    // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS

    return (
      <div>
      <form className= "profile" onSubmit={this.handleProfileSubmit.bind(this)}>
          First Name:
          <input  className="first" type="text" value={this.state.first_name} onChange={this._handleChange('first_name', event)} />
          Last Name:
          <input className="last" type="text"  onChange={this._handleChange('last_name', event)} />
        <br/>
          DOB:
          <input className="dob" type="date" onChange={this._handleChange('dob', event)}/>
          Bio:
          <input  className="bio" type="text" onChange={this._handleChange('bio', event)}/>
          Interests:
          <input className="interests" type="text"  onChange={this._handleChange('interests', event)}/>
        <br/>
          <input type="submit"/>
          Do you want to be a guide?
          <input className="guide?" type="checkbox"/>
        </form>
      <li className="guideInfo">
          Certifications:
          <input  className="certs" type="text"/>
          Expeirience:
          <input  className="certs" type="text"/>
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