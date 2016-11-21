mport { Class } from 'meteor/jagi:astronomy';

const Events = new Mongo.Collection('events');

const Event = Class.create({
  name: 'Event',
  collection: Events,
  fields: {
    name: {
      type: String,
      validators: [{
        type: 'minLength',

  }
});