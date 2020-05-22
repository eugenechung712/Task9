jQuery(document).ready(testing($));

function validateForm() {
    var x = document.forms["loveform"]["reqtext"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }


function testing($){
    $(".button" ).on('click', preps);
}

function preps() {
    $("#tasks").empty();
    $("#tasks").prepend("<p>",document.getElementById('myinput').value,"</p>");
}

$(".loveform").submit(function(e) {
    e.preventDefault();
});