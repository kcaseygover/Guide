import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

import Participants from './Participants'
import Interest from './InterestInParticipating.jsx'
import ShowProfile from './ShowProfile.jsx'
import ShowGuideProfile from './ShowGuideProfile.jsx'


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
        console.log("participant",participant)
        if(participant && participant.length > 0 ){
        return <Participants users={participant}/>
      }
    }

    function interestedUser(){
    debugger;
    if(Meteor.user){
      let info = {
        'userId': Meteor.userId,
        'eventId':this.props.event._id,
      }

    Meteor.call('addParticipants', info);
  }}


    return (

      <div >
        <div>
          <div className="col-sm-4">
            <div className="card card-block">
              <button className="delete" onClick={this.deleteThisEvent.bind(this)}>
                &times;
              </button>
              <h3 className="card-title">{this.props.event.text.activity}</h3>
              <p className="card-text">Where: {this.props.event.text.location}<button type="button" className="btn btn-default">Map</button>
                <br/>When: {this.props.event.text.startTime.toString()}
                <br/>Till: {this.props.event.text.endTime.toString()}
                 <p>
                <button className="btn btn-primary col-md-4" type="button" data-toggle="collapse" data-target={"#" + this.props.event._id} aria-expanded="false" aria-controls="collapseExample">
                  Detailed Event Info
                </button>
                <button type="button" className="btn btn-default col-md-4" data-toggle="collapse" data-target={"#" + "guide" + this.props.event._id} aria-expanded="false" aria-controls="collapseExample">
                  Guide Info
                </button>
                 <button type="button" className="btn btn-default col-md-4" onClick={interestedUser.bind(this)}  aria-expanded="false" aria-controls="collapseExample">
                  Interested!
                </button>

              </p>
                <img src="http://image.flaticon.com/icons/svg/64/64096.svg"  class="img-circle"/>
              </p>

              <div className="collapse" id={this.props.event._id}>
                <div className="card card-block">
                  Address: {this.props.event.text.address}<br/>
                  Participants: Min: {this.props.event.text.min} Max: {this.props.event.text.max} <br/>
                  Price: ${this.props.event.text.price} <br/>

                  Participants Registered: {this.props.event.participants ? this.props.event.participants.length : "Be the first to register!" }
                </div>
              </div>
              <div className="collapse" id={"guide" + this.props.event._id}>
                <div className="card card-block">

                  <ShowGuideProfile userId={this.props.event.owner}/>
                }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Event.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  event: PropTypes.object.isRequired,
};
                  // {anyParticipants(this.props.event.participants)}

                  //<Interest eventId={this.props.event._id} />


        //<button className="delete" onClick={this.deleteThisEvent.bind(this)}>
        //   &times;
        // </button>

        // <span className="text">
        // <div>Activity: {this.props.event.text.activity} </div><br/>
        // <div>Where: {this.props.event.text.location}<button type="button" className="btn btn-default">Map</button> </div><br/>
        // <div>Address: {this.props.event.text.address} </div><br/>
        // <div>When: {this.props.event.text.startTime.toString()} </div><br/>
        // <div>Till: {this.props.event.text.endTime.toString()} </div><br/>
        // <div>Participants Min: {this.props.event.text.min} Max: {this.props.event.text.max} </div><br/>
        // <div type="float">Price: ${this.props.event.text.price} </div><br/>
        // <button type="button" className="btn btn-default">Interested?</button>
        // </span>

        // <Interest eventId={this.props.event._id} />
        // <ShowProfile userId='D3MePQtPMruFtBq88'/>