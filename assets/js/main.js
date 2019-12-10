function getLocalStorage(key) {
    var value = localStorage.getItem(key);
    if (value) {
        $(`#text${key}`).text(value);
    }
}

var q = ['“The Way Get Started Is To Quit Talking And Begin Doing.” – Walt Disney', '“The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.” – Winston Churchill', '“Don’t Let Yesterday Take Up Too Much Of Today.” – Will Rogers', '“It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.” – Inspirational Quote By Vince Lombardi', '“We May Encounter Many Defeats But We Must Not Be Defeated.” – Maya Angelou', ' “Creativity Is Intelligence Having Fun.” – Albert Einstein', '“Do What You Can With All You Have, Wherever You Are.” – Theodore Roosevelt', ' “You Are Never Too Old To Set Another Goal Or To Dream A New Dream.” – C.S. Lewis']



// DOCUMENT READY
$(document).ready(function() {
    //MOMENT.JS
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    // HIDDEN CONTENT
    $(".img").click(function() {
        $(".container").show(1000);
        $(".lead").toggle("medium");
        $(".container-fluid").toggle("medium");
        $(".motivation").remove();
        $(".img").remove();
        $(".arrow").remove();
    });



    //FOR LOOP
    for (var i = 9; i < 18; i++) {
        // create a row
        var row = $(`<div data-time=${i} id='${i}' class="row">`);

        // create a column
        var col1 = $(
            '<div class="col-sm-3"> <p class="hour">' + formatAMPM(i) + "</p>"
        );

        //create column 2
        var col2 = $(
            `<div class="col-sm-6"><textarea id=text${i} class="description"></textarea>`
        );

        //create column 3
        var col3 = $(
            `<div class="col-sm-3"><button class="saveBtn" id=${i}><i class="fas fa-save fa-3x"></i></button>`
        );

        // append col to row
        row.append(col1);
        row.append(col2);
        row.append(col3);

        //  add rows to container
        $(".container").append(row);

        getLocalStorage(i);
    }
    // END OF FOR LOOP

    function formatAMPM(hours) {
        var ampm = hours >= 12 ? "pm" : "am";
        hours = hours % 12;
        hours = hours ? hours : 12;
        return hours + ampm;
    }
    formatAMPM();

    //color change base on the hour
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

    setInterval(function() {
        updateColors();
    }, 1000);

    var saveBtn = $(".saveBtn");
    saveBtn.on("click", function() {
        var eventId = $(this).attr("id");
        var eventText = $(this)
            .parent()
            .siblings()
            .children(".description")
            .val();
        localStorage.setItem(eventId, eventText);
        $("#qDisplay").show();

    });



    var save = $(".saveBtn");
    saveBtn.on("click", function() {
        var randomNumber = Math.floor(Math.random() * (q.length));
        document.getElementById("qDisplay").innerText = q[randomNumber];


    });

});
//END OF DOCUMENT READY