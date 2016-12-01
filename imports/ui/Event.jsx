import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

import Participants from './Participants.jsx'
import Interest from './InterestInParticipating.jsx'
import ShowProfile from './ShowProfile.jsx'


export default class Event extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {

  }

  deleteThisEvent() {
    Meteor.call('events.remove', this.props.event._id);
  }


  render() {

    console.log("in events", this.props.event);

    function anyParticipants(participant){
        debugger;
        console.log("participant",participant)
        if(participant && participant.length > 0 ){
        return <Participants users={participant}/>
      }
    }

    return (

      <div className='col-xs-12 container'>


        <button className="delete" onClick={this.deleteThisEvent.bind(this)}>
          &times;
        </button>

        <span className="text">
        <div>Activity: {this.props.event.text.activity} </div><br/>
        <div>Where: {this.props.event.text.location}<button type="button" className="btn btn-default">Map</button> </div><br/>
        <div>Address: {this.props.event.text.address} </div><br/>
        <div>When: {this.props.event.text.startTime.toString()} </div><br/>
        <div>Till: {this.props.event.text.endTime.toString()} </div><br/>
        <div>Participants Min: {this.props.event.text.min} Max: {this.props.event.text.max}  </div><br/>
        <div>Participants Registered: {this.props.event.participants ? this.props.event.participants.length : "Be the first to register!" }</div>
        <div type="float">Price: ${this.props.event.text.price} </div><br/>
        <button type="button" className="btn btn-default">Interested?</button>
        </span>
        {anyParticipants(this.props.event.participants)}
        <Interest eventId={this.props.event._id} />

      </div>

    );
  }
}

Event.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  event: PropTypes.object.isRequired,
};