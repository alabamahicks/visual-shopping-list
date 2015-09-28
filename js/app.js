$( document ).ready(function() {

	//$( document ).on('click', 'li.addedItem', function( event ) {
	//	console.log(event);
	//	// SELECT ONE
	//	selectOne();
    //
	//});

	$("li.addedItem").each(function () {
		// SELECT ONE
		$(this).click(function (e) {
			//if classlist contains checked, remove it
			if($(e.target).hasClass("checked")){
				$(e.target).removeClass("checked");
			} else {
				//else add it
				$(e.target).addClass("checked");
			}
		});
	});

	$( '#addItem').click(function() {
		addOne();
	});

	$( 'header.delete-all').click(function(){
		console.log('clear all');
		clearAll();
	});

});

function addOne () {
	var liTitle = "added Item";
	$('<li class="addedItem">' + '<p>' + liTitle + '</p>' + '</li>').insertBefore("#addItem");
}

function clearAll() {
	$('#list li:not(:last)').remove();
}






	//CHECK COLOR
	// CHANGE COLOR CLASS

