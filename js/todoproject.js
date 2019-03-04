$(document).ready(function(){

	// for making new todo list with a heading and a input box
	function todoList() {
		var value = $("#main").val()
		if (value.length == 0 || value == " ") {
				$(".todoInput input[type='text']").css("border", "1px solid red");
				$(".todoInput input[type='text']").attr("placeholder","enter something");

			} else {
				$("section").prepend("<div><h2><span class='f'>H</span>" + value + "<span class='s'>D</span></h2><input type='text' class='add'><span class='todoi'><i class='fas fa-plus fa-lg'></span><ul></ul></div>");
					$(".todoInput input[type='text']").val("");
					$(".todoInput input[type='text']").css("border", "1px solid transparent");
			}
	}


	$("#main").on("keypress",function(key){
		if (key.which == 13) {
			todoList();
		}
	})

	$(".todoInput span").click(todoList);



// for adding new todos in the new todo list by input

	$("section").on("keypress",".add",function(key){
		var value = $(this).val();
		if (key.which == 13) {
			if (value.length == 0 || value == " ") {
				$(this).css("border", "1px solid red");
				$(this).attr("placeholder","enter something");

			} else {
				$(this).siblings("ul").prepend("<li><span class='far fa-trash-alt'></span>" + value + "</li>");
				$(this).val("");
				$(this).css("border", "1px solid transparent");
			}
		}
	});

	$("section").on("click",".todoi",function(){
		var value = $(this).siblings("input").val();	
			if (value == "" || value == " ") {
				$(this).siblings("input").css("border", "1px solid red");
				$(this).siblings("input").attr("placeholder","enter something");

			} else {
				$(this).siblings("ul").prepend("<li><span class='far fa-trash-alt'></span>" + value + "</li>");
				$(this).siblings("input").val("");
				$(this).siblings("input").css("border", "1px solid transparent");
			}
	});

	// todo input slider


	// delete whole todo list
	$("section").on("click",".s",function(){

		$(this).parents("div").slideUp(500, function(){
			$(this).remove();
		})

	})

	// check marker for done todos
	$("section").on("click","li",function(){
		$(this).toggleClass("done");

	})



	$("section").on("click", "li span", function(event){
		$(this).parent().fadeOut(500, function(){
			$(this).remove();
		})
		event.stopPropagation();
	})



})
















