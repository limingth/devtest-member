Router.map(function() {
	// USERS SHOW
	// -------------------------------------------------------
	this.route('userShow', {
		template: 'userShow',
		path: '/users/:_id',
		waitOn: function () {
			return Meteor.subscribe('user', this.params._id, function() {
			console.log("subscribe over...");
			});
		},
		data: function () {
			return Meteor.users.findOne(this.params._id);
		}
	});
	// USERS INDEX
	// -------------------------------------------------------
	this.route('userIndex', {
		template: 'userIndex',
		path: '/users',
		onBeforeAction: function() {
			var user = Meteor.user();
			console.log(user);
			if (user.roles.indexOf("admin")==-1) {
				return Router.go('/');
			}
		this.next();
		},
		waitOn: function () {
			return Meteor.subscribe('users');
		},
		data: {
			users: function(){
				return  Meteor.users.find({}, {sort: {createdAt: -1}});
			}
		}
	});

	// USERS EDIT
	// -------------------------------------------------------
	this.route('userProfileEdit', {
		template: 'userProfileEdit',
		path: '/users/:_id/edit',
		waitOn: function () {
			// Meteor.subscribe('profile_show');
			Meteor.subscribe('logoNewest');
			Meteor.subscribe('userprofile', this.params._id);
			return Meteor.subscribe('user', this.params._id);
		},
		data: function () {
			// return Documents.findOne(this.params._id);
			//return UserProfiles.findOne();
			return {
				profile: UserProfiles.findOne(),
				file: Logos.findOne(),
			};
		}
	});

	// USERS Info SHOW
	// -------------------------------------------------------
	this.route('userProfileShow', {
		template: 'userProfileShow',
		path: '/users/:_id/show',
		waitOn: function () {
			// Meteor.subscribe('profile_show');
			Meteor.subscribe('logoByUserId', this.params._id);
			Meteor.subscribe('userprofile', this.params._id);
			return Meteor.subscribe('user', this.params._id);
		},
		data: function () {
			// return Documents.findOne(this.params._id);
			// return UserProfiles.findOne();
			return   {
				profile: UserProfiles.findOne(),
				file: Logos.findOne(),
		};
		}
	});
});

