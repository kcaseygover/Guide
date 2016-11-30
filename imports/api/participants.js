import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Class } from 'meteor/jagi:astronomy';

import Events from './events.js'

const Participants = new Mongo.Collection('participants');

if (Meteor.isServer) {
  // This code only runs on the server
  // Only publish participants that are public or belong to the current user
  Meteor.publish('participants', function participantsPublication() {
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
    console.log(text);
    console.log(this.userId);

    Participants.insert({
      text,
      createdAt: new Date(),
      owner: this.userId,
    })

    let info = {
      'text':text,
      'id':this.userId,
    };

    Meteor.call('addParticipants', info);

  }
});