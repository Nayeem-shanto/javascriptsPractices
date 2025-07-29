/* practice-1 */
/* Free Drinks Offer */
/* var offerPrice= 500;
var burgerPrice = 530;
if(burgerPrice>offerPrice){
    console.log("You will get a free coke.");
}
else{
    console.log("You need to pay 30 tk for coke.");
}
 */
/* BMI Calculator */
/* var weight = 123;
var height = 1.778;

var BMI= (weight/(height*height));
console.log("Your Bmi is =", BMI.toFixed(2));
if(BMI < 18.5){
    console.log("you are underweight");
}
else if(BMI >= 18.5 && BMI <=24.9){
    console.log("Your weight are normal.");
}
else if(BMI >= 25 && BMI <=29.9){
console.log("You are OverWeight.");
}
else{
    console.log("You ar Obese.");
    if(BMI> 30){
        var normalWeight = 24.9;
        var overWeight = BMI - normalWeight;
        console.log("tomar bmi beshi ase =", overWeight.toFixed(2)); 

        var normalWeight = (24.90*(1.778*1.778));
        console.log("Tmr BMI Onujai tomar weight howa drkr",normalWeight.toFixed(2), "kg");
        var weightKomateHobe = (weight - normalWeight);
        console.log("tomar weight komate hobe =", weightKomateHobe.toFixed(2), "kg");
    }
} */

/* Grade Calculator */

/* var examNumber = 72;

if (examNumber >= 90) {
  console.log("Your grade is A");
} else if (examNumber >= 80) {
  console.log("Your grade is B");
} else if (examNumber >= 70) {
  console.log("Your grade is C");
} else if (examNumber >= 60) {
  console.log("Your grade is D");
} else {
  console.log("Your grade is F");
} */

  /* Nested Friend  */
  /* var marks = 98;
  var friendsMark= 85;

  if(marks > 80){
    if( friendsMark > 80){
        console.log("Go for a lunch");
    }
    else if( friendsMark < 80 && friendsMark>= 60){
        console.log("Good Luck Next Time.")
    }
    else if( friendsMark < 60 && friendsMark>= 40){
        console.log("Keep your friend's message unseen.")
    }
    else if( friendsMark <40){
        console.log("Block Your Friend");
    }
    
  }
  else{
    console.log("Go Home and Sleep")
  }
 */
/* practice task-5 */

// var num1 = 5;
// var num2 = 10;

/* if(num1 > num2){
  var result = (num1*num1);
  console.log(result);
}
else{
  var result = (num1 + num2);
  console.log(result);
} */

  // var result = (num1 > num2) ? (num1*num1) : (num1 + num2);
  // console.log(result);

  /* Bus fare Calculator */
  let busFare = 800;
  var childrenAge = 14;
  var passenger = 'students';
  var citizen = 65;

  if(childrenAge < 10){
    console.log("The bus fare is free");
  }
  else if(passenger == 'students'){
    var studentFare = (busFare/2);
    console.log(studentFare);
  }
  else if(citizen >= 60){


    var citizenFare = (busFare * .85);
    console.log(citizenFare);

  }

  else {
    console.log("Otherwise the ticket fare 800 tk.");
  }