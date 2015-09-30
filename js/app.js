//TODO: add text entry box

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
	$(document).on('click', 'li.addedItem'.each, function () {
		$(this).click(function (e) {
			//TOGGLES SELECT
			if ($(e.target).hasClass("checked")) {
				$(e.target).removeClass("checked");
			} else {
				//else add it
				$(e.target).addClass("checked");
			}
		});
	});

	$( document ).on('click', 'div.delete-one', function( event ) {
		// DELETE ONE - remove parent of div...
		$(this).closest('.added-item').remove();
	});

	$( '#addItem').click(function() {
		addOne();
	});

	$( 'header.delete-all').click(function(){
		console.log('clear all');
		clearAll();
	});

});

//ADD ONE
function addOne () {
	var liTitle = "added Item";
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




