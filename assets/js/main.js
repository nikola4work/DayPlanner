function getLocalStorage(key) {
    var value = localStorage.getItem(key);
    if (value) {
        $("#text${key).text(value");
    }

}

// document ready

$(document).ready(function() {
        //moment js
        $("#currentDay").text(moment().format("dddd, MMMM Do"));

        for (var i = 9; i < 18; i++) {


            //create a row
            var row = $(`<div data-time=${i} id='${i}' class="row">`);

            //create a column for time
            var coltime = $('<div class="col-sm-2"> <p class="hour">' + formatAMPM(i) + '</p>');

        }
    })
    // End of document ready brackets