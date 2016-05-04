
// Meteor.publish("users", function() {
//   return Meteor.users.find({});
//   });

//   Meteor.publish("user", function(_id) {
//     return Meteor.users.find({"_id": _id});
//     });

//     Meteor.publish('userprofile', function(_id) {
//       return UserProfiles.find({"userId": _id});
//       });

//       Meteor.publish('logos', function() {
//         return Logos.find();
// 	});

// 	Meteor.publish('logoNewest', function() {
// 	  return Logos.find({}, {limit: 1, sort: {uploadedAt: -1}});
// 	  });

// 	  Meteor.publish('logoByUserId', function(uid) {
// 	    console.log('user Id: ', uid);
// 	      var record = UserProfiles.findOne({"userId":uid});

// 	        var logoId;

// 		  if (record!=undefined)
// 		    {
// 		        logoId = record.logo;
// 			  }

// 			    if (logoId)
// 			        return Logos.find({'_id':logoId});
// 				  // return Logos.find({'_id':userId:}, {limit: 1});
// 				  });


// 				  // Meteor.publishComposite("profile_show", function(id) {
// 				  //   return {
// 				  //     find: function() {
// 				  //       return UserProfile.find({_id: id});
// 				  //     },
// 				  //     children: [
// 				  //       {
// 				  //         find: function(pic) {
// 				  //           // Find activity picture
// 				  //           return Logos.find({_id: pic.logo});
// 				  //         }
// 				  //       }
// 				  //     ]
// 				  //   }
// 				  // });

// 				  Logos.allow({
// 				    insert: function(userId, doc) {
// 				        return true;
// 					  },
// 					    update: function (userId, doc, fields, modifier) {
// 					        return true;
// 						  },
// 						    download: function(userId) {
// 						        return true;
// 							  }
// 							  });

