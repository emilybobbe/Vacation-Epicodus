

var add = function(eat, sweet, song, transit, fun) {
  return eat + sweet + song + transit + fun;
};



$(document).ready(function() {
  console.log("Hello!")
  $("form#favoriteColor").submit(function(event) {
    event.preventDefault();
    var eat = parseInt($("input:radio[name=eat]:checked").val());
    //console.log(color)
    var sweet = parseInt($("input:radio[name=sweet]:checked").val());
    var sing = parseInt($("input:radio[name=sing]:checked").val());
    var transit = parseInt($("input:radio[name=transit]:checked").val());
    var fun = parseInt($("input:radio[name=fun]:checked").val());
    var result = add(eat, sweet, sing, transit, fun);
    console.log(result)
    if (result <= 8) {
      $("#finalTrip").text("England! Tell the Queen I say hello!");
    } else if (result <= 15) {

      $("#finalTrip").text("Italy! Eat some pasta for me!");
    } else if (result <= 25) {

      $("#finalTrip").text("Mexico! Don't forget the sunblock!");
    }

  });
  // $("form#calculator").submit(function() {
  //   event.preventDefault();
  //   var number1 = parseInt($("#input1").val());
  //   var number2 = parseInt($("#input2").val());
  //   var operator = $("input:radio[name=operator]:checked").val();
  //   var result;
  //   if (operator === "add") {
  //     result = add(number1, number2);
  //   } else if (operator === "subtract") {
  //     result = subtract(number1, number2);
  //   } else if (operator === "multiply") {
  //     result = multiply(number1, number2);
  //   } else if (operator === "divide") {
  //     result = divide(number1, number2);
  //   }
  // });
  //
});
