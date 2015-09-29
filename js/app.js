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
		// SELECT ONE
		$(this).click(function (e) {
			//if classlist contains checked, remove it
			//if any item on this document hasClass("checked")
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

function addOne () {
	var liTitle = "added Item";
	$('<li class="addedItem">' + '<p>' + liTitle + '</p>' + '</li>').insertBefore("#addItem");
}

function clearAll() {
	$('#list li:not(:last)').remove();
}

function deleteOne() {
	//if there's an #list li.addedItem anywhere with "selected", remove it
}






