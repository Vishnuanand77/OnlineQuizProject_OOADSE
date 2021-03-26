
function login()
	{
		var SRN = document.getElementById("SRN").value;
		var pwd = document.getElementById("pwd1").value;
		var filter = /([a-zA-Z0-9_\.\-])$/;
		if(SRN=='')
		{
			alert("please enter user name.");
		}
		else if(pwd=='')
		{
        	alert("enter the password");
		}
		else if(!filter.test(SRN))
		{
			alert("Enter valid email id.");
		}
		else if(pwd.length < 3 || pwd.length > 10)
		{
			alert("Password min and max length is 6.");
		}
		else
		{
            //Redirecting to other page or webste code or you can set your own html page.
            window.location = "Blank.html";
        }
	}
	//Reset Inputfield code.
	function clearFunc()
	{
		document.getElementById("SRN").value="";
		document.getElementById("pwd1").value="";
	}	