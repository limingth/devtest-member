import './users.html';

Template.registerHelper('formatDate', function(date) {
  return moment(date).format('MM-DD-YYYY');
});

Template.userIndex.helpers({
  isAdmin: function() {
    if (Meteor.users.findOne(this).roles[0] == "admin" || Meteor.users.findOne(this).roles[1] == "admin")
      return true;
    return false;
  }
});

Template.userIndex.events ({
  'click .delete-user': function(e) {
    e.preventDefault();
    var userId = this._id;
    Meteor.call("delUser", userId, function(e, r) {

    });
  },
  'click .set-admin': function(e) {
    e.preventDefault();
    e.stopPropagation();
    var userId = this._id;
    Meteor.call("setAsAdmin", userId, function(e, r) {

    });
  },
  'click #remove_admin': function(e) {
    console.log("remove admin");
    e.stopPropagation();
    Meteor.call("unsetAdmin", this._id);
  },
  'click .user-table': function(e) {
    e.preventDefault();
    Router.go('/users/'+this._id);
  }
});
