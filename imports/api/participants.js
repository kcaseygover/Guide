import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Class } from 'meteor/jagi:astronomy';

const Participants = new Mongo.Collection('participants');

if (Meteor.isServer) {
  // This code only runs on the server
  // Only publish participants that are public or belong to the current user
  Meteor.publish('participants', function eventsPublication() {
    return Participants.find({
    });
  });
}

//  Participants.schema = new SimpleSchema({
//   id: {type: Number},
//   userId: {type: String},
//   event_id: {type: String},
//   concerns: {type:String},
//   createdAt: {type:Date},
// })

Meteor.methods({

  'participants.insert'(text) {
    check(text, Object);
    console.log("we out chea");

    Participants.insert({
      text,
      eventId: 1,
      createdAt: new Date(),
      userId: this.userId,

    });
  },
});