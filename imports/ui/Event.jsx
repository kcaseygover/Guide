import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

export default class Event extends Component {

  toggleChecked() {
    // Set the checked property to the opposite of its current value
    Meteor.call('events.setChecked', this.props.event._id, !this.props.event.checked);
  }

  togglePrivate() {
    Meteor.call('event.setPrivate', this.props.event._id, ! this.props.event.private);
  }

  deleteThisEvent() {
    Meteor.call('events.remove', this.props.event._id);
  }


  render() {

      const eventClassName = classnames({
      checked: this.props.event.checked,
      private: this.props.event.private,
    });

    return (
      <li className={eventClassName}>
        <button className="delete" onClick={this.deleteThisEvent.bind(this)}>
          &times;
        </button>

        <input
          type="checkbox"
          readOnly
          checked={this.props.event.checked}
          onClick={this.toggleChecked.bind(this)}
        />

        { this.props.showPrivateButton ? (
          <button className="toggle-private" onClick={this.togglePrivate.bind(this)}>
            { this.props.event.private ? 'Private' : 'Public' }
          </button>
        ) : ''}

        <span className="text">
        <strong>{this.props.event.text}</strong>
        </span>

      </li>
    );
  }
}

Event.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  event: PropTypes.object.isRequired,
  showPrivateButton: React.PropTypes.bool.isRequired,
};