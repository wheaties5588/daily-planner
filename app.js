$(document).ready(function(){

    //Create body object
    var body = $("body");

    //Create all html assets
    function createHtmlAsset(elTag, elId) {
        var el = $(elTag);
        el.attr("id", elId);
        el.addClass(elId);
        return el;
    }

    //Create Header
    var head = createHtmlAsset("<header>", "header");
    $(body).append(head);

    //Create H1
    var h1 = createHtmlAsset("<h1>", "plannerHead");
    h1.text("Daily Planner");
    $(header).append(h1);

    //Set interval to update the time by the second and add to header
    var par = createHtmlAsset("<p>", "timerPar");
    par.html(moment().format("ddd") + "</br>" + moment().format("LL") + "</br>" + moment().format("LTS"));
    setInterval(function() {
        par.html(moment().format("ddd") + "</br>" + moment().format("LL") + "</br>" + moment().format("LTS"));
    }, 1000)
    $(header).append(par);


    //Create main div
    var main = createHtmlAsset("<main>", "mainDiv");
    $(body).append(main);


    //Create time slots from 9am to 5pm
    var calendarStartHour = 9;
    var calendarEndHour = 17;
    var time;
    var amPM;

    for (i = calendarStartHour; i < calendarEndHour + 1; i++) {
        var calBlock = $("<div>");
        var timeBlock = $("<div>");
        var activityForm = $("<form>");
        var activitiesBlock = $("<textarea>");
        var saveBlock = $("<button>");

        calBlock.addClass("calendarBlock");
        calBlock.attr("id", "calendarBlock" + i);

        timeBlock.addClass("timeBlock");
        timeBlock.attr("id", "timeBlock" + i);

        if (i > 12) {
            time = i - 12;
            amPM = "pm";
        } else if (i < 12) {
            time = i;
            amPM = "am";
        } else {
            time = i;
            amPM = "pm";
        }

        timeBlock.text(time + " " + amPM);

        activityForm.addClass("activityForm");
        activityForm.attr("id", "activityForm" + i);
        activityForm.attr("type", "text" + i);

        activitiesBlock.addClass("activitiesBlock");
        activitiesBlock.attr("id", "activitiesBlock" + i);
        activitiesBlock.attr("time", i);
        activitiesBlock.attr("placeholder", "Add events");


        // On new page load pull the appropriate value from localstorage and set it to the value of the textarea
        activitiesBlock.val(localStorage.getItem("eventText" + i))


        saveBlock.addClass("saveBlock");
        saveBlock.attr("id", "saveBlock" + i);
        saveBlock.attr("type", "submit");
        saveBlock.html('<img src="./assets/floppy.png" />');

        $(calBlock).append(timeBlock);
        $(activityForm).append(activitiesBlock);
        $(activityForm).append(saveBlock);
        $(calBlock).append(activityForm);
        $(main).append(calBlock);

    }

    //Map over each activitiesBlock and set background color according to time
    // Set to interval so this will automatically happen without having to refresh the page
    setInterval (function() {
        $(".activitiesBlock").map(function(i) {
            var hour = moment().hour();
            
            if ($(this).attr("time") == hour) {
                $(this).addClass("now");
            } else if ($(this).attr("time") < hour) {
                $(this).addClass("past");
            } else {
                $(this).removeClass("now");
                $(this).removeClass("past");
            }
        })
    }, 1000)

    //Save Button on click event
    var saveBtn = $(".saveBlock");
    saveBtn.on("click", function (ev) {
        ev.preventDefault();
        var thisTime = $(this).parent().find("textarea").attr("time");
        console.log($(this).parent().find("textarea").attr("time"));
        console.log($(this).parent().find("textarea").val());
        var inputText = $(this).parent().find("textarea").val();

        var lsKeyName = "eventText" + thisTime;

        localStorage.setItem(lsKeyName, inputText);

    });
})