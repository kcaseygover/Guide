import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Class } from 'meteor/jagi:astronomy';

const Events = new Mongo.Collection('events');

 Events.schema = new SimpleSchema({
  id: {type:Number},
  name: {type: String},
  activity_id: {type: Number},
  guide_id: {type: Number},
  userId: {type: String},
  location_id: {type: String},
  start_time: {type: Date},
  end_time: {type: Date},
  instruction: {type: String},
  gear_provided: {type: String},
  gear_required: {type: String},
  price: {type: Number},
  min_partic: {type: Number},
  max_partic: {type: Number},
  partic: {type:Array}
})

