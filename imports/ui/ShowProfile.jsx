'use strict'

import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';


import { createContainer } from 'meteor/react-meteor-data';


class ShowProfile extends Component {


  constructor(props){
    super(props);
    this.state = {
      userId:"",
    }
  }


  componentDidMount() {
    console.log(this.props.content.props.userId);
    this.setState({userId: this.props.content.props.userId });
    console.log("did mount", this.state.userId);

  }

   render() {


    function findUser(id){
      Meteor.subscribe("users");
      let user = Meteor.users.find({ '_id': id }).fetch();
        if(user.length > 0){
          console.log('inside', user);
          return showProfile(user);
        };
      };


    function showProfile(user) {
      if(user[0].roles.forEach((role)=>{
        role === "guide"
      })){
        return <span>Im a guide</span>
      };
        console.log('show porfile',user[0])
        return ( <span className='text'>
                  <div>Name: {user[0].profile.firstName} </div> <div> {user[0].profile.lastName} </div><br/>
                  <div>Date of Birth: {Date(user[0].profile.dob)} </div><br/>
                  <div>Bio: {user[0].profile.bio} </div><br/>
                  <div>Interests: {user[0].profile.interests} </div><br/>
                </span>
                );

   };


     function showGuideProfile() {
      if(currentUser){
        return <span className="text">
        <div>Name: {currentUser.info.firstName} </div> <div> {currentUser.info.lastName} </div><br/>
        <div>Date of Birth: {currentUser.info.dob} </div><br/>
        <div>Bio: {currentUser.info.bio} </div><br/>
        <div>Interests: {currentUser.info.interests} </div><br/>
        </span>
      }
     };


     return(

      <div className='col-xs-12 container'>
      <a>{findUser(this.props.content.props.userId)}</a>
      </div>

    );
  }
}


ShowProfile.propTypes = {
  currentUser: PropTypes.object,
   user: PropTypes.object,
  //info: Proptypes.object,
  _id: PropTypes.object,
};

export default createContainer(() => {

Meteor.subscribe("userData");
Meteor.subscribe("users");
Meteor.subscribe("allUsers");

  return {
//console.log(this.props.content.props.userId);
   users: Meteor.users.find({},{sort:{_id:-1}}).fetch(),
  };
}, ShowProfile);
