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
        }
    })
    // End of document ready brackets