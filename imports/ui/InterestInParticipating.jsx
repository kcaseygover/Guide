import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';




export default class InterestInParticipating extends Component {

  constructor(props) {
    super(props)
    this.updateConcern = this.updateConcern.bind(this);
    this.state = {
      concern: "",

    }
  }

  updateConcern(e) {this.setState({concern: e.target.value});}

  handleNewEventSubmit() {
    Meteor.call('participant.insert', this.state);
  }
  // deleteThisParticipant() {
  //   Meteor.call('participant.remove', this.props.participant._id);
  // }
render(){
return (
      <li className='interest' >
        <form className= "interestInParticipating" onSubmit={this.handleNewEventSubmit.bind(this)}>

            Skill Level:
            <select>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option selected value="Expert">Expert</option>
            </select>
            <br/>

             Concerns:
            <input className="concern form-control" type="text"  value={this.state.concern}  onChange={this.updateConcern} />
            <input className="btn btn-default" type="submit"/>

        </form>

      </li>
    );
  }
}

InterestInParticipating.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
}