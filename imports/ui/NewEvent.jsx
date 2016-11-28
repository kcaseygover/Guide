import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

import NavBar from './NavBar.jsx';


export default class NewEvent extends Component {
  constructor(props){
    super(props);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateActivity = this.updateActivity.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
    this.updateLatitude = this.updateLatitude.bind(this);
    this.updateLongtitude = this.updateLongtitude.bind(this);
    this.updateStartTime = this.updateStartTime.bind(this);
    this.updateEndTime = this.updateEndTime.bind(this);
    this.updateMin = this.updateMin.bind(this);
    this.updateMax = this.updateMax.bind(this);
    this.updatePrice = this.updatePrice.bind(this);

    this.state = {
    title:"",
    activity:"",
    location:"",
    latitude:"",
    longtitude:"",
    startTime:"",
    endTime:"",
    min:"",
    max:"",
    price:""
    }
  }

  handleNewEventSubmit() {
    Meteor.call('events.insert', this.state);
  }

  updateTitle(e) {this.setState({title: e.target.value});}
  updateActivity(e) {this.setState({activity: e.target.value});}
  updateLocation(e) {this.setState({location: e.target.value});}
  updateLatitude(e) {this.setState({latitude: e.target.value});}
  updateLongtitude(e) {this.setState({longitude: e.target.value});}
  updateStartTime(e) {this.setState({startTime: e.target.value});}
  updateEndTime(e) {this.setState({endTime: e.target.value});}
  updateMin(e) {this.setState({min: e.target.value});}
  updateMax(e) {this.setState({max: e.target.value});}
  updatePrice(e) {this.setState({price: e.target.value});}

  render() {
    // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS

    return (
      <div>
      <NavBar/>
      <a href='/'>Back Home</a>
      <h3>Complete To Add Your Event</h3>
        <form className= "new_event" onSubmit={this.handleNewEventSubmit.bind(this)}>
            Title:
            <input className="form-control" type="text"  value={this.state.title}  onChange={this.updateTitle} />
          <br/>
            Activity:
            <input className="form-control" type="text"  value={this.state.activity}  onChange={this.updateActivity} />
          <br/>
            Location Name:
            <input className="form-control" type="text" value={this.state.location}  onChange={this.updateLocation} />
            <br/>
            Latitude:
            <input className="lat form-control" type="float" value={this.state.latitude}  onChange={this.updateLatitude} />
            <br/>
            Longtitude:
            <input className="lat form-control" type="float" value={this.state.longitude}  onChange={this.updateLongtitude} />
            <br/>
            Start Date & Time:
            <input className="start_time form-control" type="datetime-local" value={this.state.startTime} onChange={this.updateStartTime}/>
            <br/>
            End Date & Time:
            <input className="end_time form-control"   type="datetime-local" value={this.state.endTime} onChange={this.updateEndTime}/>
          <br/>
            Min Participants:
            <input className="form-control" type="number"  value={this.state.max}  onChange={this.updateMin} />
            <br/>
            Max Participants:
            <input className="form-control" type="number"  value={this.state.min}  onChange={this.updateMax} />
            <br/>
            Price:


            <input className="price form-control" type="number" value={this.state.price}  onChange={this.updatePrice} />

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