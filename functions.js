
		function add(num1, num2)
		{
			var res= num1+num2;
			document.write(num1 + " + " + num2 + " = " + res );
		}
	
		function sub(num1, num2)
		{
			var res= num1-num2;
			document.write(num1 + " - " + num2 + " = " + res );
		}
	
		function mul(num1, num2)
		{
			var res= num1*num2;
			document.write(num1 + " * " + num2 + " = " + res );
		}
	
		function div(num1, num2)
		{
			if(num1==0 || num2==0){
				document.write("Number cannot be 0");
			}
			else{
			var res= num1/num2;
			document.write(num1 + " / " + num2 + " = " + res );
			}
		}
	
		var x= parseInt(prompt("Enter first num: "));
		var y= parseInt(prompt("Enter second num: "));
		var op= prompt("Enter operation: ");
		
		if(op=='+')
			{
				add(x,y);
			}
		else if(op=='-'){
			sub(x,y);
		}
		else if(op=='*'){
			mul(x,y);
		}
		else if(op=='/'){
			div(x,y);
		}
		else{
			document.write("Invalid input");
		}
		