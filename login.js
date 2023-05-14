function addtext()
        {
           var name = document.main-form.name.value;
           var email = document.main-form.email.value;
           var time = document.main-form.time.value;
           var date = document.main-form.date.value;
           var phone = document.main-form.phone.value;

           document.writeln("Thank you! You have just entered the following:");
           document.writeln("<pre>");
           document.writeln(" Full Name    : " + name);
           document.writeln("Email Address : " + email);
           document.writeln("Time : " + time);
           document.writeln("Date : " + date);
           document.writeln("Phone Number : " + phone);
        }

        function submitClick( ) //function shows message after submitting information

        {
      
        alert("Thank you for your time! Your Table has been Booked!");
      
        }
