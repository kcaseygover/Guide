
import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

//import { Events } from '../../lib/collections/events.js';
import { Events } from '../api/events.js';
import Event from './Event.jsx';
import { createContainer } from 'meteor/react-meteor-data';

import NavBar from './NavBar.jsx';

class ListEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchLocation: '',
      searchActivity: '',
      searchDate: '',
    };

  }
  componentDidMount() {
    console.log("did mount",this.props.events)

  }

  renderEvents() {
    console.log("uselessshit", this.props.events)
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

  updateActivitySearch(event) {
    this.setState({searchActivity: event.target.value});
    console.log("event.target.value:   ", event.target.value);
  }
  updateLocationSearch(event) {
    this.setState({searchLocation: event.target.value});
    console.log("in location  event.target.value:   ", event.target.value)
  }
  updateDateSearch(event) {

    this.setState({searchDate: event.target.value});
    console.log("in date")
  }

render(){

      let filteredListEvent = [];
      let filtered = [];
      let filteredDate = [];
      console.log('events object', this.props.events);
      if(this.props.events.length > 0){
      filteredListEvent = this.props.events.filter(
        (ev) => {
          return ev.text.activity.toLowerCase().indexOf(this.state.searchActivity.toLowerCase()) !== -1
        }
      );
      filtered = filteredListEvent.filter(
        (ev)=>{
          return ev.text.location.toLowerCase().indexOf(this.state.searchLocation.toLowerCase()) !== -1 ;
        })

      filteredDate = filtered.filter(
        (ev)=>{
          return ev.text.startTime.toString().indexOf(this.state.searchDate) !== -1;
        })
      };

    return (
      <div>
        <form className="form-inline">
        <h2>Browse Events By:</h2>
          <div className="form-group">
            <label htmlFor="filterByActivity">Activity: </label>
            <input type="text" id="filterByActivity" className="form-control"
                value={this.state.searchActivity}
                onChange={this.updateActivitySearch.bind(this)}/>
          </div>
          <div className="form-group">
            <label htmlFor="filterLocation">Location: </label>
            <input type="text" className="form-control" id="filterLocation" placeholder=""
                value={this.state.searchLocation}
                onChange={this.updateLocationSearch.bind(this)}/>
          </div>
          <div className="form-group">
            <label htmlFor="datepicker">Date: </label>
            <input type="date" id="datepicker" className="form-control" name="start"
              value={this.state.searchDate}
              onChange={this.updateDateSearch.bind(this)}/>
          </div>
        </form>
        <ul>
          <li>{filteredDate.map((event) => {

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

ListEvent.PropTypes = {
  events: PropTypes.array.isRequired,
}

export default createContainer(() => {

   Meteor.subscribe('events');

  return {
   events: Events.find({}).fetch(),
   currentUser:  Meteor.user()
  };
}, ListEvent);

