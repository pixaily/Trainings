
//On load get the stats
window.onload = function () {
    getStats();
    //When the window resizes get the stats
    window.addEventListener('resize', function () {
        //Call the get stats function
       getStats();
       
       //This gets the height of the entire warning section *added an id to our document to ensure there are no class conflicts.
       var warningSection = document.getElementById('full-warning-section').offsetHeight;
       setHeights(warningSection);
    });
}

function getStats() {
    //Get the height of the window and then assign it to the 'window-h' element
    var windowHeight = window.innerHeight;
    document.getElementById('window-h').innerHTML = windowHeight;

    //Get the height of the warning container and assign it to the 'warning-h' element
    var warningHeight = document.getElementById('page-warning').offsetHeight;
    document.getElementById('warning-h').innerHTML = warningHeight;

    //Get the percentage and assign it to the 'warning-percentage' element
    var warningPercentage = (warningHeight / windowHeight) * 100;
    document.getElementById('warning-percentage').innerHTML = warningPercentage.toFixed(2);
}

function setHeights(warningHeight) {
    //Set the height of the warning section to the padding-top of the body
    document.getElementsByTagName('body')[0].setAttribute('style', 'padding-top:'+warningHeight+'px !important;');
}

//To enable the fail safe we check the length of the warning element that holds the text.
//If it is meets the condition (currently greater than 10 characters) reload and if not make the ajax call

//require(['jquery'], function($){ 
var warningTextLength = $('.warning-text')[0].innerText.length;
if(warningTextLength < 15) {
    console.log('Error: Failed to load warning text.');
    // $.ajax({
    //     url: "<?php echo $block->getUrlDetection() ?>",
    //     type: 'GET',
    //     complete: function() {
    //         location.reload();
    //     }
    // });
} else {
    console.log('Success');
}
//});
