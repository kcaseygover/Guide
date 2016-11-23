import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';



export default class NewEvent extends Component {
  constructor(props){
    super(props);
    this.updateActivity = this.updateActivity.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
    this.updateStartTime = this.updateStartTime.bind(this);
    this.updateEndTime = this.updateEndTime.bind(this);
    this.updatePrice = this.updatePrice.bind(this);

    this.state = {
    activity:"",
    location:"",
    startTime:"",
    endTime:"",
    price:""
    }
  }

  // addNewEvent(event) {
  //   event.preventDefault();
  //   console.log("this in addNewEvent::::   ", this)

  // }


  handleNewEventSubmit() {
    Meteor.call('events.insert', this.state);
  }

  updateActivity(e) {this.setState({activity: e.target.value});}
  updateLocation(e) {this.setState({location: e.target.value});}
  updateStartTime(e) {this.setState({startTime: e.target.value});}
  updateEndTime(e) {this.setState({endTime: e.target.value});}
  updatePrice(e) {this.setState({price: e.target.value});}

  render() {
    // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS

    return (
      <div>
        <form className= "new_event" onSubmit={this.handleNewEventSubmit.bind(this)}>
            Activity:
            <input  className="activity" type="text"  value={this.state.activity}  onChange={this.updateActivity} />
          <br/>
            Location:
            <input className="location" type="text" value={this.state.location}  onChange={this.updateLocation} />
          <br/>
            Start Date & Time:
            <input className="start_time" type="datetime-local" value={this.state.startTime} onChange={this.updateStartTime}/>
          <br/>
            End Date & Time:
            <input className="end_time" type="datetime-local" value={this.state.endTime} onChange={this.updateEndTime}/>
          <br/>
            Price:
            <input className="price" type="text" value={this.state.price}  onChange={this.updatePrice}/>
          <br/>
            <input className="btn btn-default" type="submit"/>

        </form>
      </div>

    );
  }
}

NewEvent.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required

  // showPrivateButton: React.PropTypes.bool.isRequired,
};