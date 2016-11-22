import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';




FlowRouter.route('/', {
    name: 'root',
    action: function(params) {
        console.log("This is my root:", params);
    }
});

