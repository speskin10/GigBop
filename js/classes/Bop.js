/**
 * This file represents the Bop class, the data model representing
 * GigBop users acting as venues and organizations desiring entertainment.
 *
 * Created by jjallen on 2/20/15.
 */

var Bop = function(gig_json){
    this.bid = gig_json.bid; //
    this.email = gig_json.email; // User email for login
    this.public_name = gig_json.public_name; // Name to be searched and displayed
};



/*
 ¡   Static Methods for generating test objects
 */

Bop.makeHesNot = function(id){
    return new Bop({bid         :   id,
                email       :   'NotHere@HesNot.com',
                public_name :   "He's Not Here"});
};

