document.addEventListener("DOMContentLoaded", () => {

    
    //var bod = document.getElementsByTagName("body");

    //var moment = moment().format();

    console.log(moment().format());

    var x = moment().format();

    p = document.createElement("p");
    p.innerText = x;

   document.body.appendChild(p);
    


})