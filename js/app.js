//TODO: add text entry box
//TODO: add delete-one box

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
	$( document).on('click', 'li.addedItem'.each, function(){
		$(this).click(function (e) {
			//TOGGLES SELECT
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

//DELETE ONE
$( document ).keydown(function( event ){
	if (event.which == 46 || event.which == 8){
		//find a selected li, pass to deleteOne( selectedItem )
		$('#list li.selected').remove();
	}
});

//ADD ONE
function addOne () {
	var liTitle = "added Item";
	$('<li class="added-item">' + '<p>' + liTitle + '</p>' + '</li>').insertBefore("#addItem");
}

//CLEAR ALL
function clearAll() {
	$('#list li:not(:last)').remove();
}







