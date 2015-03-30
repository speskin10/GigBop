/**
 * This file represents the Gig class, the data model representing a
 * GigBop user's reqest for service. The information in a Gig object
 * can be described as an event description or a contract between
 * Gig and Bop. A gig object is created by the Bar Owner who needs a
 * band, or a student who needs a tutor.
 *
 * Created by jjallen on 2/20/15.
 */

var Gig = function(gig_json){
    this.zip = gig_json.zip; // String of 5 digits
    this.radius = gig_json.radius; // In some unit of distance. 0 for specific location
    this.title = gig_json.title;
    this.gig_description = gig_json.gig_description;
    this.offer = gig_json.offer;
    this.date = gig_json.date;
    this.time = gig_json.time;
};


