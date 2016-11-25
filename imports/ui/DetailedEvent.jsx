import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';


export default class DetailedEvent extends Component {



  render() {


    return (
      <li className='party'>



        <span className="activity">
        <strong>{this.props.event.text.activity}</strong>
        </span>

      </li>
    );
  }
}



DetailedEvent.propTypes = {
  event: PropTypes.object.isRequired,
};
