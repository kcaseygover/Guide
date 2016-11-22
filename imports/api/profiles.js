import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Class } from 'meteor/jagi:astronomy';


//export const Users = new Mongo.Collection('users');

if (Meteor.isServer) {
  // This code only runs on the server
  // Only publish tasks that are public or belong to the current user
  Meteor.publish('users', function usersPublication() {
    return Users.find({});
  });
}

Meteor.methods({
  'profiles.addUserProfile'(text) {
    check(text, String);
    // Make sure the user is logged in before inserting his profile
    console.log("text");
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    user = Users.find(this.userId);
    console.log(this.userId);
  }
});