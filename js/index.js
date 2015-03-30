/**
 *
 * Created by jjallen on 2/21/15.
 */

$(document).ready(function(){

    $('#gig-btn').click(function(e){
        setIsGig(true);
        e.preventDefault();
    });

    $('#bop-btn').click(function(e){
        setIsGig(false);
        e.preventDefault();
    });

    var isGig = true;
    // Screw it
    function setIsGig(isGigNow){
        if (isGig == isGigNow){return};
        isGig = isGigNow;
        var info_row =  $('#info-row');
        info_row.empty();
        var col1 = $('<div/>',{ class:  'col-md-4' });
        var col2 = $('<div/>',{ class:  'col-md-4' });
        var col3 = $('<div/>',{ class:  'col-md-4' });
        if (isGig){
            col1.append('<h2>1. Create a Gig</h2>');
            col1.append('<p>Get in touch with a Bop</h2>');
            col2.append('<h2>2. Host your Gig</h2>');
            col2.append('<p>Accept services from Bop</p>');
            col3.append('<h2>3. Pay for your Gig</h2>');
            col3.append('<p>Pay for services from Bop</h2>');
        }else{
            col1.append('<h2>1. Create a Bop</h2>');
            col1.append('<p>Get in touch with a Gig</h2>');
            col2.append('<h2>2. Host your Bop</h2>');
            col2.append('<p>Accept services from Gig</p>');
            col3.append('<h2>3. Pay for your Bop</h2>');
            col3.append('<p>Pay for services from Gig</h2>');
        }
        info_row.append(col1);
        info_row.append(col2);
        info_row.append(col3);
    }
    //1. Create a Gig
    //Get in touch with Services
    //
    //    2. Host your Gig
    //Receive your services from a Bopper.
    //
    //3. Pay for your Services
    //Use GigBop to pay the users who Bopped your gig (really?).
});
