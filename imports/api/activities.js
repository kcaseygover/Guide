import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Class } from 'meteor/jagi:astronomy';

const Activity = new Mongo.Collection('activities');

 Activity.schema = new SimpleSchema({
  name: {type: String},
  type: {type: String}
})

 if (Meteor.isServer) {
  // This code only runs on the server
  // Only publish events that are public or belong to the current user
  Meteor.publish('activities', function eventsPublication() {
    return Activitiess.find({

    });
  });
}


Meteor.methods({

  'activities.insert'(text) {
    check(text, String);

    Activities.insert({
      text
    });
  }
});