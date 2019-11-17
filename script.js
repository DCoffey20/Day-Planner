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


   



});