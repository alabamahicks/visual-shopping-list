$( document ).ready(function() {

	$( 'li' ).click(function( event ) {
		console.log(event);
		// ADD ONE
		if (event.target.id === 'addItem'){
			console.log('addItem clicked');
			addOne();
		} else {
		// SELECT ONE
			console.log('list item clicked');
		}
	});


	$( 'header.delete-all').click(function(){
		// CLEAR ALL
		console.log('clear all');
	})

});

function addOne () {
	var liTitle = "added Item";
	//$('section.wrapper.ul.li:nth-last-child(2)').append('<li> + liTitle + </li>');
	$("<li>" + liTitle + "</li>").insertBefore("#addItem");
}