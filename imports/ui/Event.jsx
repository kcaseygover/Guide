import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

export default class Event extends Component {

  toggleChecked() {
    // Set the checked property to the opposite of its current value
    Meteor.call('events.setChecked', this.props.event._id, !this.props.event.checked);
  }

  togglePrivate() {
    Meteor.call('event.setPrivate', this.props.event._id, ! this.props.event.private);
  }

  deleteThisEvent() {
    Meteor.call('events.remove', this.props.event._id);
  }


  render() {


    return (
      <ul>
      <li className='party'>
        <button className="delete" onClick={this.deleteThisEvent.bind(this)}>
          &times;
        </button>

        <span className="text">
        <div>Activity: {this.props.event.text.activity} </div><br/>
        <div>Where: {this.props.event.text.location}<button type="button" className="btn btn-primary">Map</button> </div><br/>
        <div>Address: {this.props.event.text.address} </div><br/>
        <div>When: {this.props.event.text.start} </div><br/>
        <div>Till: {this.props.event.text.end} </div><br/>
        <div>Participants Min: {this.props.event.text.min} Max: {this.props.event.text.max} </div><br/>
        <div type="float">Price: ${this.props.event.text.price} </div><br/>
        <button type="button" className="btn btn-primary">Interested?</button>
        </span>
        </li>
      </ul>
    );
  }
}

Event.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  event: PropTypes.object.isRequired,
};