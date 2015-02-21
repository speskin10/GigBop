/**
 *
 * Created by jjallen on 2/20/15.
 */

$(document).ready(function(){
    console.log('sign up bop');

    $('#band1').click(function(e){
        setShownGig(Gig.makeTrapHouseBand());
        e.preventDefault();
    });
    $('#band2').click(function(e){
        var liquidPleasure = Gig.makeLiquidPleasure('1');
        liquidPleasure.myNameWow();
        setShownGig();
        e.preventDefault();
    });
    $('#band3').click(function(e){
        setShownGig(Gig.makeICP());
        e.preventDefault();
    });

    function setShownGig(gig){
        $('#name_label').text(gig.public_name);
        var genres = gig.genres.join(',');
        $('#genre_label').text(genres);
    }
});
