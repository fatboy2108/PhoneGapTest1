

$( "#test0Button" ).click(function() {

	$( "#test0Results" ).html("");
	
	var value1 = 0;
	var value2 = 0;
	var TimeTaken = 0;
			
	value1 = $.now();
	$( "#test0Results" ).append ("Time at start of test0: " + value1 + "</br>");
  	
	value2 = $.now();
	$( "#test0Results" ).append ("Time at end of test0: " + value2 + "</br>");
	
	TimeTaken = value2-value1;
	$( "#test0Results" ).append ("The test took: : " + TimeTaken + " Millisecounds</br>");
	
	
 });
 
 
$( "#test1Button" ).click(function() {

	$( "#test1Results" ).html("");
	var	TestNumber = 0;
	var value1 = 0;
	var value2 = 0;
	var TimeTaken = 0;
			
	value1 = $.now();
	$( "#test1Results" ).append ("Time at start of test1: " + value1 + "</br>");
  
	TestNumber = 1234567;
	
	for (var i=1; i<10000000; i++){
	
		TestNumber = TestNumber / i;
		TestNumber = TestNumber * 50;
		TestNumber = TestNumber - 6543;
		TestNumber = TestNumber / i;
		
	};
	
	value2 = $.now();
	$( "#test1Results" ).append ("Time at end of test1: " + value2 + "</br>");
	
	TimeTaken = value2-value1;
	$( "#test1Results" ).append ("The test took: : " + TimeTaken + " Millisecounds</br>");
	
 });
 
 
 
 
 
$( "#test2Button" ).click(function() {

	
	var value1 = 0;
	var value2 = 0;
	var TimeTaken = 0;
			
	value1 = $.now();
	
  
	
	
	for (var i=1; i<10000; i++){
	
		$( "#test2Results" ).append(i);
		
	};
	
	value2 = $.now();
	TimeTaken = value2-value1;
	
	$( "#test2Results" ).html("");
	$( "#test2Results" ).append ("Time at start of test2: " + value1 + "</br>");
	$( "#test2Results" ).append ("Time at end of test2: " + value2 + "</br>");
	$( "#test2Results" ).append ("The test took: : " + TimeTaken + " Millisecounds</br>");
	
 });
 
 
 