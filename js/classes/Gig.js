/**
 * This file represents the Gig class, the data model representing
 * GigBop users acting as entertainment entites.
 *
 * Created by jjallen on 2/20/15.
 */

var Gig = function(gig_json){
    this.gid = gig_json.gid; //
    this.email = gig_json.email; // User email for login
    this.password = ''; // TODO: Probably not keep this
    this.public_name = gig_json.public_name; // Name to be searched and displayed
    this.genres = gig_json.genres; // Array of Strings representing genres
};

Gig.prototype.myNameWow = function(){
    console.log('wow '+this.public_name+' wow');
};

/*
    Static Methods for generating test objects
 */

Gig.makeTrapHouseBand = function(id){
    return new Gig({gid         :   id,
                email       :   'chis@traphouseband.com',
                public_name :   'Trap House Band',
                genres      :   ['Funk', 'Rock', 'Cover']});
};

Gig.makeLiquidPleasure = function(id){
    return new Gig({gid         :   id,
                email       :   'soul@liquidpleasure.com',
                public_name :   'Liquid Pleasure',
                genres      :   ['Funk', 'Soul']});
};

Gig.makeICP = function(id){
    return Gig({gid         :   id,
                email       :   'magnets@snopes.com',
                public_name :   'Insane Clown Posse',
                genres      :   ['Trash']});
};
