// // RUN EMAIL VALIDATION WHEN THE USER CLICKS OUT OF THE BOX
$("#email").focusout(function() {
	var email = $("#email").val();
   	if (/(.+)@(.+)\.(com|edu|org|co|net)$/.test(email)) {
   		$("#errormsg").html("");
   	} else {
   		$("#errormsg").html("<img src='https://skillcrush.com/wp-content/themes/skillcrush3.0-child/img/global/alert.png'> Please enter a valid email address");
   	}
});


// // RUN EMAIL VALIDATION ON BUTTON CLICK
$(".btn").on("click", function() {
	var email = $("#email").val();
   	if (/(.+)@(.+)\.(com|edu|org|co|net)$/.test(email)) {
   		$("#errormsg").html("");
   		// redirect to a new page if the email is valid
   		window.location.href="http://www.google.com";
   		return false;
   	} else {
   		$("#errormsg").html("<img src='https://skillcrush.com/wp-content/themes/skillcrush3.0-child/img/global/alert.png'> Please enter a valid email address");
   	}
});