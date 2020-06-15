$(document).ready(function(){

    //Create body object
    var body = $("body");

    //Array of different moments for the page
    var moments = [
        {
            text: "Format: ",
            code: moment().format()
        },
        {
            text: "Day of year: ",
            code: moment().dayOfYear()
        },
        {
            text: "Format 'MMMM DD, YYYY': ",
            code: moment().format("MMMM DD, YYYY")
        },
        {
            text: "Time of day: ",
            code: moment().format("LTS")
        }

    ]

    //Create all html assets
    function createHtmlAsset(elTag, elId) {
        var el = $(elTag);
        el.attr("id", elId);
        el.addClass(elId);
        return el;
    }

    //Create Header
    var head = createHtmlAsset("<header>", "header");
    for (i = 0; i < moments.length; i++) {
        head.append("<p>" + moments[i].text + moments[i].code + "</p>");
    }
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

        activitiesBlock.addClass("activitiesBlock");
        activitiesBlock.attr("id", "activitiesBlock" + i);

        saveBlock.addClass("saveBlock");
        saveBlock.attr("id", "saveBlock" + i);
        saveBlock.attr("type", "submit");
        saveBlock.html('<img src="./assets/floppy.png" />');




        $(calBlock).append(timeBlock);
        $(calBlock).append(activitiesBlock);
        $(calBlock).append(saveBlock);
        $(main).append(calBlock);

    }




    
    


})