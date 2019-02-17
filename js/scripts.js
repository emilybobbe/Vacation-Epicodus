$(document).ready(function(){
  console.log("did load");
  $("#content").submit(function(){
    var food = $("input:radio[name=food]:checked").val();
    // console.log(foodInput);
    var dessert = $("input:radio[name=dessert]:checked").val();
    // console.log(dessert);
    var song = $("input:radio[name=song]:checked").val();
    // console.log(song);
    var travel = $("input:radio[name=travel]:checked").val();
    // console.log(dessert);
    var activity = $("input:radio[name=activity]:checked").val();
    // console.log(dessert);

    // $(".name").text(nameInput);
    // $(".service").text(service);
    // $(".date").text(date);
    // $(".time").text(time);

    $("#answer").show();

    event.preventDefault();
  })

});
