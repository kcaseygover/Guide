import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Class } from 'meteor/jagi:astronomy';

const Locations = new Mongo.Collection('locations');

 Locations.schema = new SimpleSchema({
  id: {type: Number},
  name: {type: String},
  address: {type: String},
  gps: {type: String},
})
