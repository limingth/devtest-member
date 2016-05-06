
AutoForm.addHooks(['userForm'], {
  after: {
    insert: function(error, result) {
      if (error) {
        console.log("Insert Error:", error);
      } else {
        console.log("Document inserted:", result);
        console.log(this);
        // Router.go('userInfoShow');
        var info = UserProfiles.findOne(this.docId);
        Router.go('/users/' + info.userId + '/show');

      }
    },
    update: function(error) {
      if (error) {
        console.log("Update Error:", error);
      } else {
        console.log("Document updated");
        console.log(this);
        var info = UserProfiles.findOne(this.docId);
        console.log('info ', info);
        Router.go('/users/' + info.userId + '/show');
      }
    }
  }
});

Template.userProfileShow.helpers({
  // logo: function() {
  //   console.log(Logos.findOne());
  //  return Logos.findOne();
  // }
});
