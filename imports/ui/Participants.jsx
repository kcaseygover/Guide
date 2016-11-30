import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

import { createContainer } from 'meteor/react-meteor-data';


export default class Participants extends Component {
  constructor(props){
    super(props);
  }

  render(){
    if(participants.length > 0){
      console.log(participants);
    }
  }
  return
}
Participants.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  participants: PropTypes.array,
};