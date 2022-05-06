
    $("#time-display").text(moment().format('MMM DD, YYYY [at] hh:mm:ss a')); 

    // create function that defines past hours as grey
    var textBox = $(".textBox")

    for (var i = 0; i < textBox.length; i++) {
        var textArea = $(textBox[i]);
        let textBoxHour = textArea.attr("id");
        let currentHour = moment().format('H');
        if (currentHour > textBoxHour) {
            textArea.addClass("past")
        }
    }
 
