
import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'meteor/practicalmeteor:chai';

import { participants } from './participants.js';

if (Meteor.isServer) {
  describe('participants', () => {
    describe('methods', () => {
      const userId = Random.id();
      let participantId;

      beforeEach(() => {
        Participants.remove({});
        participantId = Participants.insert({
          text: 'test task',
          createdAt: new Date(),
          owner: userId,
          username: 'tmeasday',
        });
      });

      it('can delete owned task', () => {
         // Find the internal implementation of the task method so we can
        // test it in isolation
        const deleteTask = Meteor.server.method_handlers['participants.remove'];

        // Set up a fake method invocation that looks like what the method expects
        const invocation = { userId };

        // Run the method with `this` set to the fake invocation
        deleteTask.apply(invocation, [participantId]);

        // Verify that the method does what we expected
        assert.equal(participants.find().count(), 0);
      });


    });
  });
}