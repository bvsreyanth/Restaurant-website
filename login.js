function addtext()
        {
           var fname = document.main-form.first_name.value;
           var lname = document.main-form.last_name.value;
            var email = document.main-form.email.value;

           document.writeln("Thank you! You have just entered the following:");
           document.writeln("<pre>");
           document.writeln("First Name    : " + fname);
           document.writeln("Last Name     : " + lname);
           document.writeln("Email Address : " + email);
        }

        function submitClick( ) //function shows message after submitting information

        {
      
        alert("Thank you for your time! Your Table has been Booked!");
      
        }
