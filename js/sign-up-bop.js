/**
 *
 * Created by jjallen on 2/20/15.
 */

$(document).ready(function(){
    console.log('sign up bop');

    $('#band1').click(function(e){
        setShownGig(Gig.makeTrapHouseBand('2'));
        e.preventDefault();
    });
    $('#band2').click(function(e){
        var liquidPleasure = Gig.makeLiquidPleasure('1');
        setShownGig(liquidPleasure);
        e.preventDefault();
    });
    $('#band3').click(function(e){
        setShownGig(Gig.makeICP('3'
        ));
        e.preventDefault();
    });

    function setShownGig(gig){
        $('#name_label').text(gig.public_name);
        var genres = gig.genres.join(',');
        $('#genre_label').text(genres);
    }
});
