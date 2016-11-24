import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';



export default class NewActivityTag extends Component {
  constructor(props){
    super(props);
    this.updateActivity = this.updateActivity.bind(this);

    this.state = {
    activity:"",
    }
  }

  handleNewActivitySubmit() {
    Meteor.call('events.insert', this.state);
  }

  updateActivity(e) {this.setState({activity: e.target.value});}

  render() {
    // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS

    return (
      <div>
        <form className= "newActivity" onSubmit={this.handleNewActivitySubmit.bind(this)}>
            Activity:
            <input  className="activity" type="text"  value={this.state.activity}  onChange={this.updateActivity} />
            <input className="btn btn-default" type="submit"/>
        </form>
      </div>

    );
  }
}

NewActivityTag.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
};