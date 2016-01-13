$(function(){
  $("#blanks form").submit(function(event){
    $(".youngMale").hide();
    $(".oldMale").hide();
    $(".oldFemale").hide();
    $(".youngFemale").hide();
    var gender = $("input[name=optionsRadios]:checked").val();
    var age = $("#age").val();
    console.log(gender);
    if(age){
      if (age <= 28 && gender === "male"){
        $(".youngMale").show();
      }else if (age > 28 && gender === "male"){
        $(".oldMale").show();
      }else if (age <= 28 && gender === "female") {
        $(".youngFemale").show();
      } else {
        $(".oldFemale").show();
      }
    } else {
      alert("Please enter your age to get your celebrity dating match.")
    }

    event.preventDefault();
  })
});
