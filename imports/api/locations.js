import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Class } from 'meteor/jagi:astronomy';

export const Locations = new Mongo.Collection('locations');

 Locations.schema = new SimpleSchema({

  name: {type: String},
  address: {type: String},
  gps: {type: String},
})
