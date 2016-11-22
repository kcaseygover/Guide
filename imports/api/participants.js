import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Class } from 'meteor/jagi:astronomy';

const Locations = new Mongo.Collection('locations');

 Locations.schema = new SimpleSchema({
  id: {type: Number},
  user_id: {type: String},
  event_id: {type: String}
  gps: {type: String},
})
