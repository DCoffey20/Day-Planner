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
    let time = moment().format("H");
    time = parseInt(time);
    // console.log(time);

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
   
    if( time > $("#timeBlock").val()){
        $("#timeBlock .col-10").addClass("past");
    } else if ( time === $("#timeBlock").val()){
        $("#timeBlock .col-10").addClass("present");
    } else if ( time < $("#timeBlock").val()){
        $("#timeBlock .col-10").addClass("future");
    };

    if( time > $("#timeBlock0").val()){
        $("#timeBlock0 .col-10").addClass("past");
    } else if ( time == $("#timeBlock0").val()){
        $("#timeBlock0 .col-10").addClass("present");
    } else if ( time < $("#timeBlock0").val()){
        $("#timeBlock0 .col-10").addClass("future");
    };

    if( time > $("#timeBlock1").val()){
        $("#timeBlock1 .col-10").addClass("past");
    } else if ( time == $("#timeBlock1").val()){
        $("#timeBlock1 .col-10").addClass("present");
    } else if ( time < $("#timeBlock1").val()){
        $("#timeBlock1 .col-10").addClass("future");
    };

    if( time > $("#timeBlock2").val()){
        $("#timeBlock2 .col-10").addClass("past");
    } else if ( time == $("#timeBlock2").val()){
        $("#timeBlock2 .col-10").addClass("present");
    } else if ( time < $("#timeBlock2").val()){
        $("#timeBlock2 .col-10").addClass("future");
    };

    if( time > $("#timeBlock3").val()){
        $("#timeBlock3 .col-10").addClass("past");
    } else if ( time == $("#timeBlock3").val()){
        $("#timeBlock3 .col-10").addClass("present");
    } else if ( time < $("#timeBlock3").val()){
        $("#timeBlock3 .col-10").addClass("future");
    };

    if( time > $("#timeBlock4").val()){
        $("#timeBlock4 .col-10").addClass("past");
    } else if ( time == $("#timeBlock4").val()){
        $("#timeBlock4 .col-10").addClass("present");
    } else if ( time < $("#timeBlock4").val()){
        $("#timeBlock4 .col-10").addClass("future");
    };

    if( time > $("#timeBlock5").val()){
        $("#timeBlock5 .col-10").addClass("past");
    } else if ( time == $("#timeBlock5").val()){
        $("#timeBlock5 .col-10").addClass("present");
    } else if ( time < $("#timeBlock5").val()){
        $("#timeBlock5 .col-10").addClass("future");
    };

    if( time > $("#timeBlock6").val()){
        $("#timeBlock6 .col-10").addClass("past");
    } else if ( time == $("#timeBlock6").val()){
        $("#timeBlock6 .col-10").addClass("present");
    } else if ( time < $("#timeBlock6").val()){
        $("#timeBlock6 .col-10").addClass("future");
    };

    if( time > $("#timeBlock7").val()){
        $("#timeBlock7 .col-10").addClass("past");
    } else if ( time == $("#timeBlock7").val()){
        $("#timeBlock7 .col-10").addClass("present");
    } else if ( time < $("#timeBlock7").val()){
        $("#timeBlock7 .col-10").addClass("future");
    };
    // console.log( time < $("#timeBlock").val());

    // save text in textarea locally on click of save button
    $("#timeBlock .saveBtn").click(function () { 
        let text = $("#timeBlock .col-10").val();
        // console.log(text);
        localStorage.setItem("text", text);
    });
    $("#timeBlock0 .saveBtn").click(function () { 
        let text0 = $("#timeBlock0 .col-10").val();
        // console.log(text0);
        localStorage.setItem("text0", text0);
    });
    $("#timeBlock1 .saveBtn").click(function () { 
        let text1 = $("#timeBlock1 .col-10").val();
        // console.log(text1);
        localStorage.setItem("text1", text1);
    });
    $("#timeBlock2 .saveBtn").click(function () { 
        let text2 = $("#timeBlock2 .col-10").val();
        // console.log(text2);
        localStorage.setItem("text2", text2);
    });
    $("#timeBlock3 .saveBtn").click(function () { 
        let text3 = $("#timeBlock3 .col-10").val();
        // console.log(text3);
        localStorage.setItem("text3", text3);
    });
    $("#timeBlock4 .saveBtn").click(function () { 
        let text4 = $("#timeBlock4 .col-10").val();
        // console.log(text4);
        localStorage.setItem("text4", text4);
    });
    $("#timeBlock5 .saveBtn").click(function () { 
        let text5 = $("#timeBlock5 .col-10").val();
        // console.log(text5);
        localStorage.setItem("text5", text5);
    });
    $("#timeBlock6 .saveBtn").click(function () { 
        let text6 = $("#timeBlock6 .col-10").val();
        // console.log(text6);
        localStorage.setItem("text6", text6);
    });
    $("#timeBlock7 .saveBtn").click(function () { 
        let text7 = $("#timeBlock7 .col-10").val();
        // console.log(text7);
        localStorage.setItem("text7", text7);
    });

// get text stored locally to apprear at page load
    $("#timeBlock .col-10").val(localStorage.getItem("text"));
    // localStorage.getItem("text");
    $("#timeBlock0 .col-10").val(localStorage.getItem("text0"));
    $("#timeBlock1 .col-10").val(localStorage.getItem("text1"));
    $("#timeBlock2 .col-10").val(localStorage.getItem("text2"));
    $("#timeBlock3 .col-10").val(localStorage.getItem("text3"));
    $("#timeBlock4 .col-10").val(localStorage.getItem("text4"));
    $("#timeBlock5 .col-10").val(localStorage.getItem("text5"));
    $("#timeBlock6 .col-10").val(localStorage.getItem("text6"));
    $("#timeBlock7 .col-10").val(localStorage.getItem("text7"));
});