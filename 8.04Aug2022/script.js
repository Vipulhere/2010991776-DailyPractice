
//input a number and return even sum 

// function fnpro(){
//     let l=document.getElementById("l").value;
//     var sum=0;
//     for(var i=0;i<l;i+=2){
//         sum+=i;
//     }
//     document.getElementById("p1").innerHTML=sum;
// }


//Q2

// function fnpro() {
//     let l = document.getElementById("l").value;
//     let r = document.getElementById("r").value;
//     let k = document.getElementById("k").value;

//     // l = number(l);
//     // r = number(r);
//     // k = number(k);

//     if (r < l) {
//         alert("r should be greater than l");
//     }
//     else {
//         var count = 0;
//         for (var i = l; i<r; i++) {
//             if (i % k ==0){
//                 count++;
//             }
//     }
//     document.getElementById("p1").innerHTML="Total count of number is divisible by k are " +count;
//     }
// }


//Q3
console.log(new Date().getDay());
let dayName;

switch (new Date().getDay()) {
  case 0:
    dayName = 'Sunday';
    break;
  case 1:
    dayName = 'Monday';
    break;
  case 2:
    dayName = 'Tuesday';
    break;
  case 3:
    dayName = 'Wednesday';
    break;
  case 4:
    dayName = 'Thursday';
    break;
  case 5:
    dayName = 'Friday';
    break;
  case 6:
    dayName = 'Saturday';
    break;
  default:
    dayName = 'Invalid day';
}

console.log(dayName); // present day 
// document.getElementById("p1").innerHTML="Today is "+dayName;
