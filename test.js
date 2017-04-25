(function($){
	$(function(){
		$(document).ready(function(){
			addTask();
		});
		function addTask(){
			$(".add-task").click(function(){
				var task=$(".input-task").val();
				if (!task) {
					alert("Введите текст!");
					return false;
				}
				var todo="<div class='todo-container'> <span>"+task+"</span><button class='edit-task'>Edit</button><button class='delete-task'>Del</button></div>";
				$("#todos-container").append(todo);
				$(".input-task").val("");
				delTask();
				editTask();
				toggleClass();
			});
		}
		function delTask(){
			$(".delete-task").click(function(){
				$(this).parents(".todo-container").remove();
			});
		}
		function editTask(){
			$(".edit-task").click(function(){
				var valEdit=$(this).siblings("span");
				$("#myModal").modal("show");
				var inputTaskEdit=$(".input-task-edit");
				inputTaskEdit.val(valEdit.text());
				$(".save-changes").unbind("click");
				$(".save-changes").click(function(){
					if (!inputTaskEdit.val()) {
						alert("Введите текст!");
						return false;
					}
					valEdit.text(inputTaskEdit.val());
				});
				
			});
		}

		function toggleClass(){
			$( ".todo-container" ).click(function( event ) {
		 	  $(this).toggleClass("checked");
			});
		}
		

	});
})(jQuery)
