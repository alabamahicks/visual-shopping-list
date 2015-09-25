$( document ).ready(function() {

	$( document ).on('click', 'li.addedItem', function( event ) {
		console.log(event);
		// SELECT ONE
		console.log('list item clicked'); //WORKS
		//CHANGE COLOR CLASS
	});

	$( '#addItem').click(function( event ) {
		addOne();
	});

	$( 'header.delete-all').click(function(){
		// CLEAR ALL
		console.log('clear all');
	});

});

function addOne () {
	var liTitle = "added Item";
	$('<li class="addedItem">' + '<p>' + liTitle + '</p>' + '</li>').insertBefore("#addItem");
}