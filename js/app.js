var height = document.getElementById('height');
var weight = document.getElementById('weight');
var button = document.getElementById('click');
var results = document.getElementById('answer');
var reset = document.getElementById('reset');


button.addEventListener('click', function (){
  var h = height.value;
  var w = weight.value;
  var x = h*h;
  var y = (w/x);
  var bmi = (y * 703).toFixed(2);
  var indication = "";
  if (bmi>0 && bmi < 18) {
    indication = "You are under weight.";
  }
  else if (bmi >= 18 && bmi <=18.5) {
    indication = "You are thin for your height.";
  }
  else if (bmi>18.5 && bmi<=24.9) {
    indication ="You are at a healthy weight.";
  }
  else if (bmi>=25 && bmi <=29.9) {
    indication="You are overweight for your height";
  }
  else if (bmi>29.9) {
    indication="You are obese, consider consulting a doctor.";
  }

  results.innerHTML = "You have a BMI of " + bmi + ". " + indication;

})

reset.addEventListener('click', function() {
  results.innerHTML =" Please enter your information."
  weight.value = 0;
  height.value = 0;
})
