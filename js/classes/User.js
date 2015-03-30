/**
 * This file represents the User class, the data model representing
 * a GigBop user account and data associated with it
 *
 * Created by jjallen on 2/20/15.
 */

var User = function(user_json){
    this.id = user_json.id; //
    this.email = user_json.email; // User email for login
    this.user_name = user_json.user_name; // Name to be searched and displayed
    //this.calendar
    //this.gigs
    //this.bops
};



/*
 ¡   Static Methods for generating test objects
 */

User.makeHesNot = function(id){
    return new User({id         :   id,
                email       :   'NotHere@HesNot.com',
                user_name :   "He's Not Here"});
};

