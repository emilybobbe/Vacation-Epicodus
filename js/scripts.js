$(document).ready(function(){
  console.log("did load");
  $("#content").submit(function(){
    var nameInput = $("input#name").val();
    console.log(nameInput);
    var service = $("#service").val();
    console.log(service);
    var date = $("#date").val();
    var time = $("#time").val();

    $(".name").text(nameInput);
    $(".service").text(service);
    $(".date").text(date);
    $(".time").text(time);

    $("#appointment").show();

    event.preventDefault();
  })

});
