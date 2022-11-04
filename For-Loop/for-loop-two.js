var text = "";
var total = 0;
for(var i = 0; i < 6; i++) {//0+0 = 0
    if(i == 3) {
        text = "finished";
        break;
    } else if(i == 5) {
        i++;
    } else {
        //
    }
    total += i; //0+1 then goes back to top (loops) then on the next cycle there is 2 added onto the previous number
}
//*code does not sense*

console.log(text + " at the number " + i + " with a total of " + total);

//break stops everything
//continue keeps going

//node for-loop-two.js (to run this code)