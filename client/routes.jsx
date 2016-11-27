import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

import App from '../imports/ui/App.jsx';

import ListEvent from '../imports/ui/ListEvent.jsx';
import Event from '../imports/ui/Event.jsx';

import NewEvent from '../imports/ui/NewEvent.jsx';


FlowRouter.route('/', {
    name: 'root',
    action: function (){
        //console.log("This is my root:", params);
        ReactLayout.render(App, {content: <ListEvent />});
    }
});

FlowRouter.route('/events', {
    name: 'events',
    action: function (){
        //console.log("This is my root:", params);
        ReactLayout.render(ListEvent, {content: <ListEvent />});
    }
});


FlowRouter.route('/events/new', {
    name: 'events_new',
    action: function (){
        //console.log("This is my root:", params);
        ReactLayout.render(NewEvent, {content: <NewEvent />});
    }
});

FlowRouter.route('/events/:id', {
    name: 'event_id',
    action: function (params){

        ReactLayout.render(Event, {content: <Event {...params} />});
    }
});
