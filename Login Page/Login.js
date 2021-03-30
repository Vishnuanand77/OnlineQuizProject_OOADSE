
function login()
	{
		var SRN = document.getElementById("SRN").value;
		var pwd = document.getElementById("pwd1").value;
		var filter = /([a-zA-Z0-9_\.\-])$/;
		if(SRN=='') //Checking blank form
		{
			alert("Enter valid Student Number or Faculty Number");
		}
		else if(pwd=='') //Checking blank form
		{
        	alert("Enter the password");
		}
		else if(!filter.test(SRN))
		{
			alert("Enter valid email id");
		}
		else if(SRN.length != 13) 
		{
			alert("Enter valid Student Number or Faculty Number")
		}
		else if(pwd.length < 3 || pwd.length > 10)
		{
			alert("Password min and max length is 6");
		}
		else
		{
            //Checking username
            CheckUsername();
        }
	}
	//Reset Inputfield code.
	function clearFunc()
	{
		document.getElementById("SRN").value="";
		document.getElementById("pwd1").value="";
	}	

	//Username Checker
	function CheckUsername()
	{
		var uname = document.getElementById("SRN");
		if(uname.value[0] == 'F' && uname.value[1] == 'R' && uname.value[2] == 'N'){
			//Also run verification with database
			window.location = "Faculty.html";
		}
		else if (uname.value[0] == 'P' && uname.value[1] == 'E' && uname.value[2] == 'S'){
			//Also run verification with database
			window.location = "Student.html";
		}
		else{
			//If database check fails
			alert("Please enter valid details");
		}
	}