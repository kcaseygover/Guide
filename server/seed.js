

import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Class } from 'meteor/jagi:astronomy';

class Seeder {
  constructor( collection, options ) {
    if ( !collection || !options ) {
      throw new Error( 'Please supply a collection to seed and options for seeding. Usage: Seed( collectionName, options ).' );
    } else {
      this.collection = this.getCollection( collection );
      this.options    = options;
      console.log("nothing here", typeof this.collection);

      if ( typeof this.collection !== 'undefined' ) {
        this.seed();
      } else {
        throw new Error( `Sorry, couldn't find the collection "${ collection }" to seed!` );
      }
    }
  }

  getCollection( collection ) {
    let collectionName = this.sanitizeCollectionName( collection );
    console.log(collection)
    return collectionName === 'Users' ? Meteor.users : global[ collectionName ];
  }

  sanitizeCollectionName( collection ) {
    return collection[ 0 ].toUpperCase() + collection.slice( 1 );
  }

  seed() {
    let options = this.options,
        data    = options.data,
        model   = options.model;

    if ( data && !model ) { this.sow( data );  }
    if ( model && !data ) { this.sow( model ); }

    if ( options.data && options.model ) {
      throw new Error( `Please choose to seed from either a data collection or a model. Cannot do both!` );
    }
  }

  sow( data ) {
    let isDataArray        = data instanceof Array,
        loopLength         = isDataArray ? data.length : this.options.min,
        hasData            = this.checkForExistingData(),
        collectionName     = this.collection._name,
        isUsers            = collectionName === 'users',
        environmentAllowed = this.environmentAllowed();

    if ( !hasData && environmentAllowed ) {
      for ( let i = 0; i < loopLength; i++ ) {
        let value = isDataArray ? data[ i ] : data( i );

        if ( isUsers ) {
          this.createUser( value );
        } else {
          console.log("about to insert",value);
          this.collection.insert( value );
        }
      }
    }
  }

  checkForExistingData() {
    let existingCount = this.collection.find().count();
    return this.options.min ? existingCount >= this.options.min : existingCount > 0;
  }

  environmentAllowed() {
    let environments = this.options.environments;

    if ( environments ) {
      return environments.indexOf( process.env.NODE_ENV ) > -1;
    } else {
      return true;
    }
  }

  createUser( user ) {
    let isExistingUser = Meteor.users.findOne( { 'emails.address': user.email } );
    if ( !isExistingUser ) {
      let userId = Accounts.createUser({
        email: user.email,
        password: user.password,
        profile: user.profile || {}
      });

      if ( user.roles && Roles !== 'undefined' ) {
        Roles.addUsersToRoles( userId, user.roles );
      }
    }
  }
}


function Seed( collection, options ){
  console.log("something");
  return new Seeder( collection, options );
  };

Meteor.methods({

  seedCollection( collection ) {

    console.log('comeonnnnn');
    check( collection, String );
    let isUsers = collection === 'Users';

    if ( isUsers ) {
      Seed( 'Users', {
        data: [
          {
            email: 'Andreas@Guide.me',
            password: 'password',
            profile: {
              firstName:'Andreas',
              lastName:'Hart',
              dob:faker.date.past(),
              bio: faker.lorem.sentence(),
              interests:'surf,skate,ski',
              files:'',
            },
            roles: [ 'user' ]
          },
          {
            email: 'Karen@Guide.me',
            password: 'password',
            profile: {
              firstName:'Karen',
              lastName:'CG',
              dob:faker.date.past(),
              bio:  faker.lorem.sentence(),
              interests:'lipchap and jeeps',
              files:'',
            },
            roles: [ 'guide' ],
          }
        ]
      });
    } else {
      console.log(collection);
      Seed( collection , {
        min: 15,
        environments: [ 'development', 'staging', 'production' ],
        model( index ) {
          return {
            owner:'BZNiXENvstvafX2J4',
            text:{
              title:faker.hacker.noun(),
              activity:faker.hacker.verb(),
              address:faker.address.streetAddress(),
              location:faker.address.state(),
              latitude:faker.address.latitude(),
              longitude:faker.address.longitude(),
              startTime:faker.date.future(),
              endTime:faker.date.future(),
              min:faker.random.number(1,5),
              max:faker.random.number(6,25),
              price: faker.commerce.price(),
          },
        };
      }
      });
    }
  },

  'clearCollection'( collection ) {
    console.log('collection', collection);
    check( collection, String );
    let isUsers = collection === 'Users';

    if ( isUsers ) {
      Meteor.users.remove({});
    } else {
      global[ collection ].remove({});
    }
  }
});
