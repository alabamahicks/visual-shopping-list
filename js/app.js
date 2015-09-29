$( document ).ready(function() {

	//$( document ).on('click', 'li.addedItem', function( event ) {
	//	console.log(event);
	//	// SELECT ONE
	//	selectOne();
    //
	//});

	//only original items
	//$("li.addedItem").each(function () {

	$( document).on('click', 'li.addedItem'.each, function(){
		// SELECT ONE - TODO: Bug - requires two clicks, and clicking twice on .addItem selects it
		$(this).click(function (e) {
			//TOGGLES SELECT - TODO: limit to one in document
			if($(e.target).hasClass("selected")){
				$(e.target).removeClass("selected");
			} else {
				//else add it
				$(e.target).addClass("selected");
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

//DELETE ONE
$( document ).keydown(function( event ){
	if (event.which == 46 || event.which == 8){
		//find a selected li, pass to deleteOne( selectedItem )
		$('#list li.selected').remove();
	}
});

function addOne () {
	var liTitle = "added Item";
	$('<li class="addedItem">' + '<p>' + liTitle + '</p>' + '</li>').insertBefore("#addItem");
}

function clearAll() {
	$('#list li:not(:last)').remove();
}







