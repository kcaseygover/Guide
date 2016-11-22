import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';


export default class ActivityList extends Component {
  constructor() {
    super();
      this.state = {
        search: ''
      };
  }



updateSearch(event) {
  this.setState({search: event.target.value.substr(0, 20)});
}

render() {
  let filteredActivities = this.props.activities.filter(
    (activity) => {
      return activity.name.indexOf(this.state.search) !== -1;
    }
  );

  return (
    <div>
      <input type="text"
        value={this.state.search}
        onChange={this.updateSearch.bind(this)}/>
      <ul>
        {filteredActivities.map((activity) => {
          return <Activity activity={activity}
            key={activity.id}/>
        })}
      </ul>
    </div>
    );
  }
}

ActivityList.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  activity_list: PropTypes.object.isRequired,
};
