/* Author:

*/

function shareCode(name, url) {
	if( url != '') {
		if( !(url.lastIndexOf('http://', 0) === 0) ) {
			url = 'http://' + url;
		}
	} else {
		url = '/';
	}

	var code = "<a href='http://sharism.org/agreement' name='Sharing Agreement' rel='license'>✳</a> <a href='" + url + "'>" + name + "</a>";
	
	$('textarea#code').val(code);
}

$(document).ready(function() {

    $('input:text[name=name]').change(function() {
        
        $name = $(this).val();
        $url = $('input:text[name=url]').val();
        
        shareCode($name, $url);
        
    });

    $('input:text[name=url]').change(function() {
        
        $url = $(this).val();
        $name = $('input:text[name=name]').val();
        
        shareCode($name, $url);
        
    });

});



