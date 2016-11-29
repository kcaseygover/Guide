// import React, { Component, PropTypes } from 'react';
// import { Meteor } from 'meteor/meteor';
// import classnames from 'classnames';

// import { createContainer } from 'meteor/react-meteor-data';


// class ShowProfile extends Component {

//   constructor(props){
//     super(props);

//     this.state = {
//       userId:"",
//     }
//   }

//   componentDidMount() {
//    this.setState({userId:this.props.content.props.userId})

//   }



//   render() {

//     function findUser(id){
//       Meteor.subscribe("allUsers");
//       Meteor.subscribe("users");
//       return Meteor.users.find({ "_id" : id }).fetch();
//     }
// console.log("this.props::   ", this.props)
//     let currentUser = this.props.currentUser;
//     let user = findUser(this.state.userId);
//     console.log("user", user);

//      function showProfile() {

//         //const user = findUser(this.props.content.props.userId);

//         if(currentUser){
//           return <span className="text">
//           <div>Name: {currentUser.info.firstName} </div> <div> {currentUser.info.lastName} </div><br/>
//           <div>Date of Birth: {currentUser.info.dob} </div><br/>
//           <div>Bio: {currentUser.info.bio} </div><br/>
//           <div>Interests: {currentUser.info.interests} </div><br/>
//           </span>
//       }
//      };
//      function showGuideProfile() {
//       if(currentUser){
//         return <span className="text">
//         <div>Name: {currentUser.info.firstName} </div> <div> {currentUser.info.lastName} </div><br/>
//         <div>Date of Birth: {currentUser.info.dob} </div><br/>
//         <div>Bio: {currentUser.info.bio} </div><br/>
//         <div>Interests: {currentUser.info.interests} </div><br/>
//         </span>
//       }
//      };


//     return (


//       <div className='col-xs-12 container'>
//       <a>{showProfile()}</a>
//       <a>{showGuideProfile()}</a>
//       </div>

//     );
//   }
// }

// ShowProfile.propTypes = {
//   currentUser: PropTypes.object,
//   // user: PropTypes.object,
//   //info: Proptypes.object,
//   _id: PropTypes.object,
// };

// export default createContainer(() => {

// //console.log(this.props.content.props.userId);
// Meteor.subscribe("userData");
// Meteor.subscribe("users");
// Meteor.subscribe("allUsers");

//   return {
//    currentUser:  Meteor.user(),
//    //info: Meteor.users.find({"_id" : this.props.content.props.userId }),
//   };
// }, ShowProfile);

