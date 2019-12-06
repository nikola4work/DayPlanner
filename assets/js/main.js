function getLocalStorage(key) {
    var value = localStorage.getItem(key);
    if (value) {
        $("#text${key).text(value");
    }

}

// DOCUMENT READY

$(document).ready(function() {
        //Moment js
        $("#currentDay").text(moment().format("dddd, MMMM Do"));

        // FOR LOOP 
        for (var i = 9; i < 18; i++) {


            //create a row
            var row = $(`<div data-time=${i} id='${i}' class="row">`);

            //create a column for time
            var coltime = $('<div class="col-sm-2"> <p class="hour">' + formatAMPM(i) + '</p>');

            // create column for user input
            var coluser = $('<div class="col-sm-6 past"><textarea id=text${i} class = "description"</textarea>');

            // create column for button-font awesome icon
            var fontawesome = $('<div class="col-sm-3"><button class="saveBtn" id={i}>< <i class="far fa-save"></i></button');

            // append column to row
            row.append(coltime);
            row.append(coluser);
            row.append(fontawesome);

            // adding rows to html container
            $(".container").append(row);

            getLocalStorage(i);

        }
        //FOR LOOP ENDS

        function formatAMPM(hours) {
            var ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12;
            return hours + ampm;
        }
        formatAMPM();

        function updateColors() {
            var currentTime = new Date().getHours();
            for (var i = 9; i < 18; i++) {
                console.log(currentTime, $(`#${i}`).data("time"));
                if ($(`#${i}`).data("time") == currentTime) {
                    $(`#text${i}`).addClass("present");
                } else if (currentTime < $(`#${i}`).data("time")) {
                    $(`#text${i}`).addClass("future");
                }
            }

        }






    })
    // END OF DOCUMENT READY