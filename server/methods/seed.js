import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Class } from 'meteor/jagi:astronomy';

import  {Seeder} from '../seed.js'


// Meteor.methods({

//   seedCollection( collection ) {

//     console.log('comeonnnnn');
//     check( collection, String );
//     let isUsers = collection === 'Users';

//     if ( isUsers ) {
//       Seed( 'Users', {
//         data: [
//           {
//             email: 'Andreas@Guide.me',
//             password: 'password',
//             profile: {
//               firstName:'Andreas',
//               lastName:'Hart',
//               dob:'',
//               bio: faker.lorem.sentence(),
//               interests:'surf,skate,ski',
//               files:'',
//             },
//             roles: [ 'user' ]
//           },
//           {
//             email: 'Karen@Guide.me',
//             password: 'password',
//             profile: {
//               firstName:'Karen',
//               lastName:'CG',
//               dob:'',
//               bio:  faker.lorem.sentence(),
//               interests:'lipchap and jepes',
//               files:'',
//             },
//             roles: [ 'guide' ],
//           }
//         ]
//       });
//     } else {
//       Seed( 'events', {
//         min: 5,
//         environments: [ 'development', 'staging', 'production' ],
//         model( index ) {
//           return {
//             title:faker.lorem.words(),
//             activity:faker.lorem.sentence(),
//             location:faker.address.streetAdress(),
//             latitude:faker.address.latitude(),
//             longitude:faker.address.longitude(),
//             startTime:faker.date.future(),
//             endTime:faker.date.future(),
//             min:faker.random.number(),
//             max:faker.random.number(),
//             price: faker.commerce.price(),
//           };
//         }
//       });
//     }
//   },

//   'clearCollection'( collection ) {
//     console.log('comonnnn');
//     check( collection, String );
//     let isUsers = collection === 'Users';

//     if ( isUsers ) {
//       Meteor.users.remove({});
//     } else {
//       global[ collection ].remove({});
//     }
//   }
// });