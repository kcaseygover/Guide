import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

import Activity from './Activity.jsx';


export default class ActivityList extends Component {
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

ActivityList.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required

};
