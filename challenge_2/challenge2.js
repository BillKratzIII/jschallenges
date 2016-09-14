/*
* William Kratz
* 9/14/16
*/

$(function(){
	
	/*
	Any time someone clicks on the title at the top "feed template,"
     the color of the "feed template" text will change from black to red
     and then from red to black when clicked again.
	*/

	var count = 0;
	$('.panel').click(function(){
		if(count == 0){
			$('h1').css("color","red");
			count++;
		}else{
			$('h1').css("color","black");
			count--;
		}
	});

	/*
	Hides the links on the side of the page – "section 1," "section 2," etc. –
     hides every odd-numbered menu wihtout referencing them by id.
    */

    $('.title:even').hide();

    /*
    Changes every instance of the word "bacon" on the page to be "LASER VISION"
    */

	$('p').text(function(i, text) {
    return text.replace("Bacon", "LASER VISION");
	});

	/*
	Delete the last two posts in the middle section (they have a CSS class "post")
	*/
	
	$( ".post:nth-of-type(6)" ).remove();
	$( ".post:nth-of-type(5)" ).remove();
	
	/*
	Removes the images in the right column
	*/

	$('aside img').remove();
	

})