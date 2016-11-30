
import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

import { Events } from '../api/events.js';
import Event from './Event.jsx';
import { createContainer } from 'meteor/react-meteor-data';

import NavBar from './NavBar.jsx';

class ListEvent extends Component {
  constructor(props) {
    super(props);
    // search is now has an object for a value so it can hold sub attributes of searching.
    // such as location, activity, date {location:'', activity:'', date:'',},
    this.state = {search:''};

  }
  // componentDidMount(){
  //   console.log('i am component',this.props);
  // }
  renderEvents() {
    let filteredEvents = this.props.events;
    console.log("in here");
console.log("this.state.search::      ")
    return filteredEvents.map((event) => {
      const currentUserId = this.props.currentUser && this.props.currentUser._id;


      return (
        <Event
          key={event._id}
          event={event}

        />
      );
    });
  }

  updateActivity(event) {

    this.setState({search: event.target.value});
    console.log("in activity",this.state, "", event.target.value)
  }
  updateLocation(event) {
    this.setState({search: event.target.value});

    console.log("in location ", event.target.value)
  }
  updateDate(event) {

    this.setState({search: event.target.value});
    console.log("in date")
  }


  render() {

    let filteredListEvent = this.props.events.filter(
        (ev) => {

          return ev.text.activity.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
          || ev.text.location.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
          || ev.text.startTime.indexOf(this.state.search) !== -1;
        }
    );




    return (
      <div>
        <form className="form-inline">
        <h2>Browse Events By:</h2>
          <div className="form-group">
            <label htmlFor="filterByActivity">Activity: </label>
            <input type="text" id="filterByActivity" className="form-control"
                value={this.state.search}
                // make this function name match the new name
                onChange={this.updateActivity.bind(this)}/>
          </div>
          <div className="form-group">
            <label htmlFor="filterLocation">Location: </label>
            <input type="text" className="form-control" id="filterLocation" placeholder=""
                value={this.state.search}
                 // make this function name match the new name
                onChange={this.updateLocation.bind(this)}/>
          </div>
          <div className="form-group">
            <label htmlFor="datepicker">Date: </label>
            <input type="date" id="datepicker" className="form-control" name="start"
            value={this.state.search}
             // make this function name match the new name
            onChange={this.updateDate.bind(this)}/>
          </div>
        </form>
        <ul>
          <li>{filteredListEvent.map((event) => {
            return <Event
            event={event}
            key={event._id}/>
              })}
          </li>
        </ul>
      </div>
    );
  }
}
export default createContainer(() => {

   Meteor.subscribe('events');

  return {
   events: Events.find({}, { sort: { createdAt: -1 } }).fetch(),
   currentUser:  Meteor.user()
  };
}, ListEvent);

