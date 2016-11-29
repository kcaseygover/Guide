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
    this.state = {search: "",};

  }

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
  updateSearch(event) {
    this.setState({search: event.target.value});
    console.log("event.target.value:   ", event.target.value)
  }
  locationSearch(event) {
    this.setState({search: event.target.value});
    console.log("in location  event.target.value:   ", event.target.value)
  }


  render() {

    let filteredListEvent = this.props.events.filter(
      (ev) => {
        return ev.text.activity.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || ev.text.location.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );

//   <div className="form-group">
//     <label htmlFor=""></label>
//     <input type="text" className="form-control" id="" placeholder="">
//   </div>
    return (
      <div>
        <form className="form-inline">
        <h2>Browse Events By:</h2>
          <div className="form-group">
            <label htmlFor="filterByActivity">Activity: </label>
            <input type="text" id="filterByActivity" className="form-control"
                value={this.state.search}
                onChange={this.updateSearch.bind(this)}/>
          </div>
          <div className="form-group">
            <label htmlFor="filterLocation">Location: </label>
            <input type="text" className="form-control" id="filterLocation" placeholder=""
                value={this.state.search}
                onChange={this.locationSearch.bind(this)}/>
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