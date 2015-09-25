$( document ).ready(function() {

	$( document ).on('click', 'li.addedItem', function( event ) {
		console.log(event);
		// SELECT ONE
		console.log('list item clicked'); //WORKS
		//CHECK COLOR
		// CHANGE COLOR CLASS
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
