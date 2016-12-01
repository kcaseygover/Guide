import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';
import ShowProfile from './ShowProfile.jsx'
import { createContainer } from 'meteor/react-meteor-data';


export default class Participants extends Component {
  constructor(props){
    super(props);
  }

  render(){
       let participants = this.props.users;
       if(participants && participants.length > 0){


    return (
      <div>
        {participants.map((eachId)=>{
        return <ShowProfile userId={eachId}  />
       })}
      </div>
      );
    }
  }
}
Participants.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  users: PropTypes.array.isRequired,

};