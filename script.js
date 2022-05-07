//    displays current time at the top
   $("#time-display").text(moment().format('MMM DD, YYYY [at] hh:mm:ss a')); 

    var input_textarea = document.querySelector('.row');
    var output_div = document.querySelector('.textBox');
    var save_button = document.querySelector('.saveBtn');
    // For Loop recreates text areas for the page
    var textBox = $(".textBox")

    for (var i = 0; i < textBox.length; i++) {
        var textArea = $(textBox[i]);
        let textBoxHour = textArea.attr("id");
        let currentHour = moment().format('H');
        // If Statement applies styling depending on hour: future, present, past
        if (currentHour < textBoxHour) {
            textArea.addClass("future")
        }
        if (currentHour === textBoxHour) {
            textArea.addClass("present")
        }
        else textArea.addClass("past")
    }
 
// Buttons to save the text that is entered in local storage
$("#button-addon1").click(function() {
    nineAMInput = $("#09").val();
    localStorage.setItem("09", JSON.stringify(nineAMInput));
});
$("#button-addon2").click(function() {
    nineAMInput = $("#10").val();
    localStorage.setItem("10", JSON.stringify(nineAMInput));
});
$("#button-addon3").click(function() {
    nineAMInput = $("#11").val();
    localStorage.setItem("11", JSON.stringify(nineAMInput));
});
$("#button-addon4").click(function() {
    nineAMInput = $("#12").val();
    localStorage.setItem("12", JSON.stringify(nineAMInput));
});
$("#button-addon5").click(function() {
    nineAMInput = $("#13").val();
    localStorage.setItem("13", JSON.stringify(nineAMInput));
});
$("#button-addon6").click(function() {
    nineAMInput = $("#14").val();
    localStorage.setItem("14", JSON.stringify(nineAMInput));
});
$("#button-addon7").click(function() {
    nineAMInput = $("#15").val();
    localStorage.setItem("15", JSON.stringify(nineAMInput));
});
$("#button-addon8").click(function() {
    nineAMInput = $("#16").val();
    localStorage.setItem("16", JSON.stringify(nineAMInput));
});
$("#button-addon9").click(function() {
    nineAMInput = $("#17").val();
    localStorage.setItem("17", JSON.stringify(nineAMInput));
});

// Retreiving the saved text entered in the local storage
stored9AM = JSON.parse(localStorage.getItem("09"));
$("#09").val(stored9AM);

stored9AM = JSON.parse(localStorage.getItem("10"));
$("#10").val(stored9AM);

stored9AM = JSON.parse(localStorage.getItem("11"));
$("#11").val(stored9AM);

stored9AM = JSON.parse(localStorage.getItem("12"));
$("#12").val(stored9AM);

stored9AM = JSON.parse(localStorage.getItem("13"));
$("#13").val(stored9AM);

stored9AM = JSON.parse(localStorage.getItem("14"));
$("#14").val(stored9AM);

stored9AM = JSON.parse(localStorage.getItem("15"));
$("#15").val(stored9AM);

stored9AM = JSON.parse(localStorage.getItem("16"));
$("#16").val(stored9AM);

stored9AM = JSON.parse(localStorage.getItem("17"));
$("#17").val(stored9AM);

