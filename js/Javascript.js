

$( "#test1Button" ).click(function() {

	$( "#test1Results" ).html("");
	
	var test1value1 = 0;
	var test1value2 = 0;
	var test1TimeTaken = 0;
			
	test1value1 = $.now();
	
	test1value2 = $.now();
	
	test1TimeTaken = test1value2-test1value1;
	
	$( "#test1Results" ).append ("Time at start of test1: " + test1value1 + "</br>");
	$( "#test1Results" ).append ("Time at end of test1: " + test1value2 + "</br>");
	$( "#test1Results" ).append ("Test 1 took: " + test1TimeTaken + " Millisecounds</br>");
	
});
 
 
$( "#test2Button" ).click(function() {

	$( "#test2Results" ).html("");
	var	test2TestNumber = 0;
	var test2value1 = 0;
	var test2value2 = 0;
	var test2TimeTaken = 0;
			
	test2value1 = $.now();
	  
	test2TestNumber = 1234567;
	
		for (var i=1; i<10000000; i++){
	
			test2TestNumber = test2TestNumber / i;
			test2TestNumber = test2TestNumber * 50;
			test2TestNumber = test2TestNumber - 6543;
			test2TestNumber = test2TestNumber / i;
		
		};
	
	test2value2 = $.now();
		
	test2TimeTaken = test2value2-test2value1;
	
	$( "#test2Results" ).append ("Time at start of test2: " + test2value1 + "</br>");
	$( "#test2Results" ).append ("Time at end of test2: " + test2value2 + "</br>");
	$( "#test2Results" ).append ("Test 2 took: " + test2TimeTaken + " Millisecounds</br>");
	
 });
 
 
$( "#test3Button" ).click(function() {

	
	var test3value1 = 0;
	var test3value2 = 0;
	var test3TimeTaken = 0;
			
	test3value1 = $.now();
	
		for (var i=1; i<10000; i++){
	
			$( "#test3Results" ).append(i);
		
		};
	
	test3value2 = $.now();
	
	test3TimeTaken = test3value2-test3value1;
	
	$( "#test3Results" ).html("");
	$( "#test3Results" ).append ("Time at start of test3: " + test3value1 + "</br>");
	$( "#test3Results" ).append ("Time at end of test3: " + test3value2 + "</br>");
	$( "#test3Results" ).append ("Test 3 took: " + test3TimeTaken + " Millisecounds</br>");
	
 });
 
 
 