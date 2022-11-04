// var text = new Date().getDay();

// switch (text) {
//     case 4:
//     case 5:
//      text = "Soon it is the Weekend";
//      break;
//      case 0:
//     case 6;
//     text = "It is Weekend";
//     break;
//     default:
//      text = "I can't wait to sleep on the weekend"
// }

// ^ above is an example from the week9 powerpoint slides

var car = 0;
var text = "";

switch(car) {
    case 0: //something turned off
        text = "off";
        break; // skips switch, and moves to console.log
    case 1: //something turned on
        text = "on";
        break;
    default:
        text = "no value found";

}

console.log("The car is " + text)


// 0's and 1's represent things that have been turned on and off
//document.designMode="on"