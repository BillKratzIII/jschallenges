/* William Kratz
 * 9/13/16
*/


 

 $(function(){
 	//variables used to track resets, team shots and goals.
 	var shootButtonOne = $('#teamone-shoot');
	var shootButtonTwo = $('#teamtwo-shoot');
	var resetButton = $('#reset')
	var counter1 = 0;
	var counter2 = 0;
	var resetCounter = 0;
	var teamOneHits = 0;
	var teamTwoHits = 0;
 	
 	//when clicked, the counter goes up by one. If the result of the random number is 1 then the goal goes up by one and the back
 	//ground color changes to the team's color.
	shootButtonOne.click(function(){ 		
 		counter1++;
 		$('#teamone-numshots').html(counter1);
 		var result = getRandomIntInclusive();
 		if(result==1){
 			$('body').css("background-color","red");
 			alert("GOAAAALLLLL!!!!");
 			teamOneHits++;
 			$('#teamone-numhits').html(teamOneHits);
 		}else{
 			$('body').css("background-color","white");
 		}
 	});

	//same functionality as team one's shoot button
 	shootButtonTwo.click(function(){ 		
 		counter2++;
 		$('#teamtwo-numshots').html(counter2);
 		var result = getRandomIntInclusive();
 		if(result==1){
 			$('body').css("background-color","blue");
 			alert("GOAAAALLLLL!!!!");
 			teamTwoHits++;
 			$('#teamtwo-numhits').html(teamTwoHits);
 		}else{
 			$('body').css("background-color","white");
 		}
 	});

 	//when clicked, resets the counters for team scoring and add's one to the reset counter.
 	resetButton.click(function(){
 		$('body').css("background-color","white");
 		counter1 = 0;
 		counter2 = 0;
 		teamOneHits = 0;
 		teamTwoHits = 0;
 		resetCounter++;
 		$('#num-resets').html(resetCounter);
 		$('#teamone-numshots').html(counter1);
 		$('#teamone-numhits').html(teamOneHits);
 		$('#teamtwo-numshots').html(counter2);
 		$('#teamtwo-numhits').html(teamTwoHits);
 	});

 	//function returns a random number either 0 or 1.
	function getRandomIntInclusive() {
 		min = Math.ceil(0);
 		max = Math.floor(1);
  		return Math.floor(Math.random() * (max - min + 1)) + min;
	}


 })
