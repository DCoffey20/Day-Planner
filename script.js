$(document).ready(function () {
    //cloning container for each hour
    let i = 0;
    for (i; i < 8; i++) {
        let timeBlockEl = $("#timeBlock").clone().prop("id", "timeBlock" + i);
        $(timeBlockEl).insertAfter($("#timeBlock"));
    };

    //bringing current day in to page
    let headerDay = moment().format("dddd, MMMM Do");
    $("#currentDay").text(headerDay);
    let test = moment().format("H");
    test = parseInt(test);
    // console.log(test);

    //setting the correct time for each hour
    $("#timeBlock7 .time-block").text("10 AM");
    $("#timeBlock6 .time-block").text("11 AM");
    $("#timeBlock5 .time-block").text("12 PM");
    $("#timeBlock4 .time-block").text("1 PM");
    $("#timeBlock3 .time-block").text("2 PM");
    $("#timeBlock2 .time-block").text("3 PM");
    $("#timeBlock1 .time-block").text("4 PM");
    $("#timeBlock0 .time-block").text("5 PM");

    // console.log($("#timeBlock7").val());

    // setting value to each time block to compare current time to
    $("#timeBlock").val("9");
    $("#timeBlock7").val("10");
    $("#timeBlock6").val("11");
    $("#timeBlock5").val("12");
    $("#timeBlock4").val("13");
    $("#timeBlock3").val("14");
    $("#timeBlock2").val("15");
    $("#timeBlock1").val("16");
    $("#timeBlock0").val("17");

    // console.log($("#timeBlock").val());

    // comparing current time vs the hour blocks and added class to change color of text area
   
    if( test > $("#timeBlock").val()){
        $("#timeBlock .col-10").addClass("past");
    } else if ( test === $("#timeBlock").val()){
        $("#timeBlock .col-10").addClass("present");
    } else if ( test < $("#timeBlock").val()){
        $("#timeBlock .col-10").addClass("future");
    };

    if( test > $("#timeBlock0").val()){
        $("#timeBlock0 .col-10").addClass("past");
    } else if ( test == $("#timeBlock0").val()){
        $("#timeBlock0 .col-10").addClass("present");
    } else if ( test < $("#timeBlock0").val()){
        $("#timeBlock0 .col-10").addClass("future");
    };

    if( test > $("#timeBlock1").val()){
        $("#timeBlock1 .col-10").addClass("past");
    } else if ( test == $("#timeBlock1").val()){
        $("#timeBlock1 .col-10").addClass("present");
    } else if ( test < $("#timeBlock0").val()){
        $("#timeBlock0 .col-10").addClass("future");
    };

    if( test > $("#timeBlock2").val()){
        $("#timeBlock2 .col-10").addClass("past");
    } else if ( test == $("#timeBlock2").val()){
        $("#timeBlock2 .col-10").addClass("present");
    } else if ( test < $("#timeBlock2").val()){
        $("#timeBlock2 .col-10").addClass("future");
    };

    if( test > $("#timeBlock3").val()){
        $("#timeBlock3 .col-10").addClass("past");
    } else if ( test == $("#timeBlock3").val()){
        $("#timeBlock3 .col-10").addClass("present");
    } else if ( test < $("#timeBlock3").val()){
        $("#timeBlock3 .col-10").addClass("future");
    };

    if( test > $("#timeBlock4").val()){
        $("#timeBlock4 .col-10").addClass("past");
    } else if ( test == $("#timeBlock4").val()){
        $("#timeBlock4 .col-10").addClass("present");
    } else if ( test < $("#timeBlock4").val()){
        $("#timeBlock4 .col-10").addClass("future");
    };

    if( test > $("#timeBlock5").val()){
        $("#timeBlock5 .col-10").addClass("past");
    } else if ( test == $("#timeBlock5").val()){
        $("#timeBlock5 .col-10").addClass("present");
    } else if ( test < $("#timeBlock5").val()){
        $("#timeBlock5 .col-10").addClass("future");
    };

    if( test > $("#timeBlock6").val()){
        $("#timeBlock6 .col-10").addClass("past");
    } else if ( test == $("#timeBlock6").val()){
        $("#timeBlock6 .col-10").addClass("present");
    } else if ( test < $("#timeBlock6").val()){
        $("#timeBlock6 .col-10").addClass("future");
    };

    if( test > $("#timeBlock7").val()){
        $("#timeBlock7 .col-10").addClass("past");
    } else if ( test == $("#timeBlock7").val()){
        $("#timeBlock7 .col-10").addClass("present");
    } else if ( test < $("#timeBlock7").val()){
        $("#timeBlock7 .col-10").addClass("future");
    };
    // console.log( test < $("#timeBlock").val());

});