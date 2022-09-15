$(document).ready(function(){
  $('#loader').fadeOut(1500);
  setTimeout(function(){
   $("#content").css("display","flex");
   $("#next").css("display","flex");
   $("#prev").css("display","flex");
   }, 1500);
  $("#btn_next").click(function(){
    document.getElementById("btn_prev").style.visibility = "visible";
	$("#item1").css("display","none");
	$("#item2").css("display","flex");
  });
  $("#btn_prev").click(function(){
    $("#item1").css("display","flex");
	$("#item2").css("display","none");
  });
});
