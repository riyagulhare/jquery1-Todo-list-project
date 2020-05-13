//check off specific todo by clicking
// $("li").click(function(){
	$("ul").on("click", "li", function(){
		// //if li is gray
	// if($(this).css("color")==="rgb(128, 128, 128)"){
	// 	//turn it black
	// 	$(this).css({
	// 		color: "black",
	// 		textDecoration: "none"
	// 	});
	// }
	
	// //else
	// else{
	// $(this).css({
	// 	color: "gray",
	// 	textDecoration: "line-through"
	// });	
	// }
	$(this).toggleClass("completed");
});
//click on x to delete todos
// $("span").click(function(event){
	$("ul").on("click", "span", function(event){
$(this).parent().fadeOut(500, function(){
	$(this).remove();//here(this) is for parent element i.e, for li

});
event.stopPropagation();
});
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabing new todo text
	 var todotext = $(this).val();
	 $(this).val("");
	 //create a new li and add to ul
	 $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todotext + "</li>");
	}
});
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})