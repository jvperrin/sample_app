$(document).ready(function(){

  $("#micropost_content").keyup (function () {
    var current = $("#micropost_content").val().length;
    if (current < 141) {
      $("#micropost_content_counter").text(140 - current + " characters remaining");
    }
  });

});