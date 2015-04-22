// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/

$(document).ready(function() {
	function display_search_results() {
		// readyState === 4 means that the asynchronous request completed successfully
		if (this.readyState === 4) {
			console.log(this);
			document.getElementById('products').innerHTML = this.responseText;
		}
	}

	var form = document.getElementById('search_form');
	form.addEventListener('submit', function(event) {
		event.preventDefault();
		var searchValue = document.getElementById('search').value;

		var xhr = new XMLHttpRequest();
		xhr.onload = display_search_results;
		xhr.open('GET', '/products?search=' + searchValue, true);
		xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"); // X-Requested-With, XMLHttpRequest
		// is a special header that makes the method .xhr? available
		xhr.send();
	});
});

$(document).on('ready page:load', function() {
	$('#search_form').submit(function(event){
		event.preventDefault();
		var searchValue = $('#search').val();

		$.ajax({
			url: '/products?search=' + searchValue,
			type: 'GET',
			dataType: 'html'
		}).done(function(data){
			$('#products').html(data);
		});
	});
});

