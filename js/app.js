//TODO: bug: after clear all, can't add more items
//TODO: locate entry box in card
//TODO: add themeing
//TODO: R2add images
//TODO: R2add dragging
//TODO: R2add reorder
//TODO: R3add local offline storage

$( document ).ready(function() {

	//$( document ).on('click', 'li.addedItem', function( event ) {
	//	console.log(event);
	//	// SELECT ONE
	//	selectOne();
	//
	//});

	//only original items
	//$("li.addedItem").each(function () {

	// CHECK ONE - TODO: Bug - requires two clicks, and clicking twice on .addItem selects it
	$(document).on('click', 'li.addedItem'.each, function (e) {
		//$(this).click(function (e) {
			//TOGGLES CHECKED
			if ($(e.target).hasClass("checked")) {
				$(e.target).removeClass("checked");
			} else {
				//else add it
				$(e.target).addClass("checked");
			}
		//});
	});

	$( document ).on('click', 'div.delete-one', function( event ) {
		// DELETE ONE - remove parent of div...
		$(this).closest('.added-item').remove();
	});

	$( '#addItem').click(function() {
		//SHOW ENTRY
		$('.entry-box').show();


	});

	$( 'header.delete-all').click(function(){
		console.log('clear all');
		clearAll();
	});

});

//UPON ENTER (13)
$( document ).keydown(function( event ){
	if (event.which == 13 ){
		addOne($('input.entry-box').val());
	}
});

//ADD ONE
function addOne (enteredString) {
	var liTitle = enteredString;
	$('<li class="added-item">' + '<p>' + liTitle + '</p>' + '<div class="delete-one">-</div>'+ '</li>').insertBefore("#addItem");
}

//CLEAR ALL
function clearAll() {
	$('#list li:not(:last)').remove();
}



//STOPPED USING STOPPED USING STOPPED USING STOPPED USING
//DELETE ONE
$( document ).keydown(function( event ){
	if (event.which == 46 || event.which == 8){
		//find a selected li, pass to deleteOne( selectedItem )
		$('#list li.selected').remove();
	}
});




