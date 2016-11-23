import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

export default class Profile extends Component {
  constructor(props){
    super(props);
    this.updateCerts = this.updateCerts.bind(this);
    this.updateExperience = this.updateExperience.bind(this);
    this.updateWhy = this.updateWhy.bind(this);
    this.updatePlan = this.updatePlan.bind(this);

    this.state = {
    certifications:"",
    experience:"",
    why:"",
    plan:""
    }
  }

  handleProfileSubmit() {
    Meteor.call('profiles.addGuideProfile', this.state);
  }

  updateCerts(e) {this.setState({certifications: e.target.value});}
  updateExperience(e) {this.setState({experience: e.target.value});}
  updateWhy(e) {this.setState({why: e.target.value});}
  updatePlan(e) {this.setState({plan: e.target.value});}


  render() {
    // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS

    return (
      <div>
        <form className= "profile" onSubmit={this.handleProfileSubmit.bind(this)}>
            Please outline your plan for event:
            <input  className="plan" type="text"  name='plan' value={this.state.plan}  onChange={this.updatePlan} />
            Cetifications:
            <input  className="certs" type="text"  name='certs' value={this.state.certifications}  onChange={this.updateCerts} />
            Experience:
            <input className="exp" type="text" value={this.state.experience}  onChange={this.updateExperience} />
          <br/>
            What drives you?
            <input className="why" type="text" value={this.state.why} onChange={this.updateWhy}/>
            <input type="submit"/>
        </form>
      </div>

    );
  }
}

Profile.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required

  // showPrivateButton: React.PropTypes.bool.isRequired,
};