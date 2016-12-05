import { Meteor } from 'meteor/meteor';
import '../imports/api/events.js';
import '../imports/api/profiles.js';
import '../imports/api/participants.js';
Meteor.startup(() => {
  // code to run on server at startup

  });

Meteor.publish(null, function (){
  return Meteor.roles.find({})
})


Meteor.publish("allUsers", function () {
  return Meteor.users.find({},{fields: {'info': 1, 'guideInfo': 1}});
});

Meteor.publish("userData", function () {
  if (this.userId) {
    return Meteor.users.find({_id: this.userId},
                             {fields: {'info': 1, 'guideInfo': 1}});
  } else {
    this.ready();
  }
});
