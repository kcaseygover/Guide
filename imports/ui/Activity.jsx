import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';


export default class Activity extends Component {


render() {

  return (
    <div>
      {this.props.activity.name}
    </div>
    )
  }
}
Activity.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required

};