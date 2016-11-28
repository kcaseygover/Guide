import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

import { participants } from '../api/participants.js';


export default class InterestInParticipating extends Component {

  constructor(props) {
    super(props)
    this.updateConcern = this.updateConcern.bind(this);
    this.handleNewEventSubmit = this.handleNewEventSubmit.bind(this);
    this.state = {
      concern: "",
      eventId: "",
      stoke:"",

    }
  }

  componentDidMount() {this.setState({eventId: this.props.eventId});};

  updateConcern(e) {this.setState({concern: e.target.value});}
  updateStoke(e) {this.setState({stoke: e.target.value});}

  handleNewEventSubmit() {
    Meteor.call('participants.insert', this.state);
  }
  // deleteThisParticipant() {
  //   Meteor.call('participant.remove', this.props.participant._id);
  // }
render(){
return (
  <div className= "col-md-3 container">
      <div className='interest' >
        <form className= "interestInParticipating" onSubmit={this.handleNewEventSubmit}>

            Skill Level:
            <select>
              <option defaultValue="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Expert">Expert</option>
            </select>
            <br/>

             Concerns:

            <input  className="concern form-control" type="text"  value={this.state.concern}  onChange={this.updateConcern} />
            How stoked are you??
            <input  className="stoke" type="text"  value={this.state.stoke}  onChange={this.updateStoke} />
            <input className="btn btn-default" value="Interested!" type="submit"/>

        </form>

      </div>
  </div>
    );
  }
}

InterestInParticipating.propTypes = {
 eventId: PropTypes.string,
}

