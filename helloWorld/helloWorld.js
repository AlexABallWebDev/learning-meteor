if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click #increase-counter': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    },
		
		'click #decrease-counter': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') - 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
		//code that will be run on the server on startup.
  });
}
