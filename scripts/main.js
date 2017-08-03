/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to 
   write your logic.
*/


function handValue (hand) {
	let val = 0;
for(i=0;i<hand.length;i++){
	if(hand[i]=="K"||hand[i]=="Q"||hand[i]=="J"){

		val = val + 10;
	}
	else if(hand[i]=="A"){
		val = val + 1;
	}
	else{
		val = val + parseInt(hand[i]);
	}
}
for(j=0;j<hand.length;j++){
	if(hand[j]=="A"&& val <= 11){
		val = val + 10;
	}
	else{
		val = val;
	}
}


  return val;
  console.log(val);
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/