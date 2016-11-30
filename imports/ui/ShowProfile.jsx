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
        debugger;
         Meteor.users.find({ _id: id }, function(error,result){
          debugger;
          if(error){console.log(error)}
          console.log(res);
         })

      }
    //findUser(this.state.userId);
    let currentUser = this.props.currentUser;
    console.log(this.props.users);

     function showProfile() {

        //const user = findUser(this.props.content.props.userId);
        if(currentUser){
          console.log("thinks theres a user", this.props.user);
          return <span className="text">
          <div>Name: {currentUser.info.firstName} </div> <div> {currentUser.info.lastName} </div><br/>
          <div>Date of Birth: {currentUser.info.dob} </div><br/>
          <div>Bio: {currentUser.info.bio} </div><br/>
          <div>Interests: {currentUser.info.interests} </div><br/>
          </span>
      }
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


    return (


      <div className='col-xs-12 container'>
      <a>{showProfile()}</a>
      <a>{showGuideProfile()}</a>
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

// {sort: { _id : -1 } }