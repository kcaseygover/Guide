import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

import { createContainer } from 'meteor/react-meteor-data';


class ShowProfile extends Component {
  componentDidMount() {
  }

  UserSetup() {

  }

  render() {
    let currentUser = this.props.currentUser;
     console.log("user", currentUser);

     function showProfile() {
      if(currentUser){
        return <span className="text">
        <div>Name: {currentUser.info.firstName} </div> <div> {currentUser.info.lastName} </div><br/>
        <div>Date of Birth: {currentUser.info.dob} </div><br/>
        <div>Bio: {currentUser.info.bio} </div><br/>
        <div>Interests: {currentUser.info.interests} </div><br/>
        </span>
      }
     };


    return (


      <div className='col-xs-12 container'>
      <a>{showProfile()}</a>

      </div>

    );
  }
}

ShowProfile.propTypes = {
  currentUser: PropTypes.object,
  // user: PropTypes.object,
  userId: PropTypes.string,
};

export default createContainer(() => {


Meteor.subscribe("userData");

  return {
   currentUser:  Meteor.user(),

   //userData:
   //user: Users.find().fetch(),
  };
}, ShowProfile);
