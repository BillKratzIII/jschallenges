/**
 * William Kratz
 *9/13/16
 */

var saveButton = $('#save-button');
var loadButton = $('#load-button');
localStorage.testText = "test";

/**
 * Gets the text from the element for you
 * @return {String}
 */
function getText() {
  return $('#save-me').val();
}

/**
 * Puts different text
 * @param {String} text the stuff you want to put in the box
 */
function setText(text) {
  return $('#save-me').val(text);
  
}

/*
* When user clicks the save button, saves text from text area save-me in memory, localStorage.testText. 
*/
saveButton.click(function(){
	localStorage.setItem('testText', getText());
	alert("data saved: " + localStorage.getItem('testText'));
});

/*
* When user clicks the load button, the value stored in memory, localStorage.testText is diplayed in the text area save-me.
*/
loadButton.click(function(){
	setText(localStorage.getItem('testText'));
})
