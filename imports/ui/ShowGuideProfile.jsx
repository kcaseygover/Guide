'use strict'

import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';


import { createContainer } from 'meteor/react-meteor-data';


class ShowGuideProfile extends Component {


  constructor(props){
    super(props);
    this.state = {
      userId:"",
    }
  }


  componentDidMount() {

  }

   render() {

      let user=[];

    function findUser(id){
      Meteor.subscribe("users");
      user = Meteor.users.find({ '_id': id }).fetch();

        if(user.length > 0 ){
          console.log('inside', user);
          return showProfile(user);

      };
    }


    function showProfile(user) {
        console.log('show porfile', user[0]);
        return ( <span className='text'>
                  <div>Name: {user[0].info.firstName}{user[0].info.lastName} </div><br/>
                  <div>Date of Birth: {user[0].info.dob.toDateString} </div><br/>
                  <div>Bio: {user[0].info.bio} </div><br/>
                  <div>Interests: {user[0].info.interests} </div><br/>
                  <div>Certifications: {user[0].guideInfo.certifications} </div><br/>
                  <div>Experience: {user[0].guideInfo.experience} </div><br/>
                </span>
                );
          };



    // function showMinProfile(user) {
    //     console.log('show porfile', user[0]);
    //     return ( <span className='text'>
    //               <div>{user[0].profile.name} </div>
    //             </span>
    //             );
    //       };



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
      <a>{console.log("this",this)}</a>
      <a>{findUser(this.props.content.props.userId)}</a>
      </div>

    );
  }
}


ShowGuideProfile.propTypes = {
  currentUser: PropTypes.object,
  _id: PropTypes.object,
};

export default createContainer(() => {

Meteor.subscribe("userData");
Meteor.subscribe("users");
Meteor.subscribe("allUsers");

  return {
   users: Meteor.users.find({},{sort:{_id:-1}}).fetch(),
  };
}, ShowGuideProfile);
