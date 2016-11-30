import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Class } from 'meteor/jagi:astronomy';

// export  Events

 //Events.schema = new SimpleSchema({

  //name: {type: String},
  // activity_id: {type: Number},
  // guide_id: {type: Number},
  // userId: {type: String},
  // location_id: {type: String},
  // start_time: {type: Date},
  // end_time: {type: Date},
  // instruction: {type: String},
  // gear_provided: {type: String},
  // gear_required: {type: String},
  // price: {type: Number},
  // min_partic: {type: Number},
  // max_partic: {type: Number},
  // partic: {type:Array}
//})

// if (Meteor.isServer) {
//   // This code only runs on the server
//   // Only publish events that are public or belong to the current user
//   Meteor.publish('events', function eventsPublication() {
//     return Events.find({

//     });
//   });
// }


Meteor.methods({

  'events.insert'(text) {
    check(text, Object);

    Events.insert({
      text,
      createdAt: new Date(),
      owner: this.userId,

    });
  },
  'events.remove'(eventId) {
    check(eventId, String);

    const event = Events.findOne(eventId);
    if (event.private && event.owner !== this.userId) {
      // If the event is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }

    Events.remove(eventId);
  },

  'events.setChecked'(eventId, setChecked) {
    check(eventId, String);
    check(setChecked, Boolean);

    const event = Events.findOne(eventId);
    if (event.private && event.owner !== this.userId) {
      // If the event is private, make sure only the owner can check it off
      throw new Meteor.Error('not-authorized');
    }

    Events.update(eventId, { $set: { checked: setChecked } });
  },
  'events.setPrivate'(eventId, setToPrivate) {
    check(eventId, String);
    check(setToPrivate, Boolean);

    const event = Events.findOne(eventId);

    // Make sure only the event owner can make a event private
    if (event.owner !== this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Events.update(eventId, { $set: { private: setToPrivate } });
  },
});