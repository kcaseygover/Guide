import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';
import { createContainer } from 'meteor/react-meteor-data';

import { Activities } from '../api/activities.js';

import Activity from './Activity.jsx';


class ActivityList extends Component {
  constructor(props) {
    super(props);
      this.state = { search: '' };

  }


// to limit ie: 20 characters,
//can change to: event.target.value.substr(0, 20)
updateSearch(event) {
  this.setState({search: event.target.value});
}

render() {

  let filteredActivities = this.props.activities.filter(
    (activity) => {
      return activity.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    }
  );

  return (

<div>

      <input type="text"
        value={this.state.search}
        onChange={this.updateSearch.bind(this)}/>

      <ul>


         <li>{filteredActivities.map((activity) => {
          return <Activity activity={activity}
            key={activity.id}/>
        })}

        </li>

      </ul>
</div>
    );
  }
}

// ActivityList.propTypes = {
//   activities: proptype.object,
// };


export default createContainer(() => {

   Meteor.subscribe('activities');

  return {
   activities: Activities.find({}, { sort: { createdAt: -1 } }).fetch(),
   currentUser:  Meteor.user()
  };
}, ActivityList);
