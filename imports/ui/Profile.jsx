import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';
import Dropzone from 'react-dropzone';

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
    interests:"",
    files:""
    }
  }

  onDrop(acceptedFiles, rejectedFiles) {
      console.log('Accepted files: ', acceptedFiles);
      console.log('Rejected files: ', rejectedFiles);
    }

  handleProfileSubmit() {
    Meteor.call('profiles.editUserProfile', this.state);

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
        <form className= "profile row " onSubmit={this.handleProfileSubmit.bind(this)}>

            <div className="col-xs-12">
            <Dropzone onDrop={this.onDrop}>
              <div>Try dropping some files here, or click to select files to upload.</div>
            </Dropzone>
            </div>

            <div className="col-xs-12">
            First Name:
            <input  className="first col-xs-12" type="text"  name='first_name' value={this.state.firstName}  onChange={this.updateFirstName} />
            </div>
            <div className="col-xs-12">
            Last Name:
            <input className="last col-xs-12" type="text" value={this.state.lastName}  onChange={this.updateLastName} />
            </div>
            <div className="col-xs-12">
            DOB:
            <input className="dob col-xs-12" type="date" value={this.state.dob} onChange={this.updateDob}/>
            </div>
            <div className="col-xs-12">
            Bio:
            <input  className="bio col-xs-12" type="text" value={this.state.bio} onChange={this.updateBio}/>
            </div>
            <div className="col-xs-12">
            Interests:
            <input className="interests col-xs-12" type="text" value={this.state.interests}  onChange={this.updateInterests}/>
            </div>

            <div className="col-xs-12">
            <input className="btn btn-default" type="submit"/>
            </div>

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