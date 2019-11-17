$(document).ready(function () {

    let i = 0;
    for (i; i<8; i++) {
        let timeBlockEl = $("#timeBlock").clone().prop("id","timeBlock"+i);
        $(timeBlockEl).insertAfter($("#timeBlock"));
        };

    let headerDay = moment().format("dddd, MMMM Do");
    $("#currentDay").text(headerDay);
    let test = moment().format("H");
    console.log(test);

//setting the correct time for each hour
$("#timeBlock7 .time-block").text("10 AM");
$("#timeBlock6 .time-block").text("11 AM");
$("#timeBlock5 .time-block").text("12 PM");
$("#timeBlock4 .time-block").text("1 PM");
$("#timeBlock3 .time-block").text("2 PM");
$("#timeBlock2 .time-block").text("3 PM");
$("#timeBlock1 .time-block").text("4 PM");
$("#timeBlock0 .time-block").text("5 PM");


});