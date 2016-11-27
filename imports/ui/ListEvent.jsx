import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

import { Events } from '../api/events.js';
import Event from './Event.jsx';
import { createContainer } from 'meteor/react-meteor-data';

class ListEvent extends Component {
constructor(props) {
    super(props);
    this.state = {search: "",};

  }

  renderEvents() {
    let filteredEvents = this.props.events;
    console.log("in here");

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
  }

  render() {
    let filteredListEvent = this.props.events.filter(
      (ev) => {
        console.log("in render event::   ", ev.text.activity)
        return ev.text.activity.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;

      }
    );

    return (
      <div className="col-xs-12 container">
      <input type="text"
        value={this.state.search}
        onChange={this.updateSearch.bind(this)}/>

        <ul col-xs-12 container>
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