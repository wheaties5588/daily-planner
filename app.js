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
        }
    ]

    //Create Header
    var head = $("<header>");
    head.attr("id", "header");
    head.addClass("header");
    for (i = 0; i < moments.length; i++) {
        head.append("<p>" + moments[i].text + moments[i].code + "</p>");
    }
    $(body).append(head);

    
    //var bod = document.getElementsByTagName("body");

    //var moment = moment().format();


    


    //Set interval to update the time by the second
    var par = $("<p>")
    par.html(moment().format("ddd") + "</br>" + moment().format("LL") + "</br>" + moment().format("LTS"));
    setInterval(function() {
        par.html(moment().format("ddd") + "</br>" + moment().format("LL") + "</br>" + moment().format("LTS"));
    }, 1000)
    $(body).append(par);



//     var x = moment().format();

//     p = document.createElement("p");
//     p.innerText = x;

//    document.body.appendChild(p);
    


})