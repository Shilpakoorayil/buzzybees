  function validationForm() {
        const form =document.getElementById("userForm");


            //clear previous error
            document.getElementById("firstnameError").innerText = "";
            document.getElementById("lastnameError").innerText = "";
            //  .......................................................
            document.getElementById("emailError").innerText = "";
            document.getElementById("phonrError").innerText = "";

            document.getElementById("messageError").innerText = "";
            

            let isvalid = true;

            // validating first name and last name
            const firstName = document.getElementById("firstname").value.trim();
            const lastName = document.getElementById("lastname").value.trim();

         // Allow only alphabets and space
  const namePattern = /^[A-Za-z\s]+$/;

  if (firstName === "") {
   document.getElementById("firstnameError").innerText = "First name is required";
    isValid = false;
    
  } else if (!namePattern.test(firstName)) {
    document.getElementById("firstnameError").innerText = "Please use letters only (no numbers or symbols)";
     isValid = false;
   
  } else {
     document.getElementById("firstnameError").textContent = "";
     isValid = false;
    
  }
//  ........Last name............
  if (lastName === "") {
   document.getElementById("lastnameError").innerText = "Last name is required";
    isValid = false;
    
  } else if (!namePattern.test(lastName)) {
    document.getElementById("lastnameError").innerText = "Please use letters only (no numbers or symbols)";
     isValid = false;
   
  } else {
     document.getElementById("lastnameError").textContent = "";
     isValid = false;
    
  }
            
  // ........ name field ends.................................
            //email VALIDATION

            const email = document.getElementById("email").value.trim();
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                document.getElementById("emailError").innerText = "Invalid Email format";
                isValid = false;
            }
            //phone validation
            const phone = document.getElementById("phone").value.trim();
            const phonePattern = /^\d{10}$/;

            if (!phonePattern.test(phone)) {
                document.getElementById("phonrError").innerText = "Invalid phone number";
                isValid = false;
            }

            //message
            const message = document.getElementById("message").value.trim();
            if (message === "") {
                document.getElementById("messageError").innerText = "Message is required";
                isValid = false;
            }

            return isValid;

        }
        // ......................................................................................
        //save  data to Local storage on form submission
        //  document.getElementById("userForm").addEventListener('submit', function (event) {
        //     event.preventDefault();//prevent page load
        //     alert("saved successfully");
        //      const name = document.getElementById("firstname").value;
        // const email =document.getElementById("email").value;


        // localStorage.setItem('firstname',name);//setItem is used inorder to store datas in a local storage.
        // localStorage.setItem('email',email);

        // output.textContent=`Name : ${namfirstnamee} ,Email : ${email}`;
        // form.reset(); // clear form inputs
        // })
//..............................................................................
            // ..initialize email.js
            (function () {
                emailjs.init("mpdXRftiaDuRWXXvB");//public key
            })();
        //Form SubmissionisValid = false;
        // if(isValid === false){
        //     alert("hi");

        document.getElementById("userForm").addEventListener("submit", function (event) {
            event.preventDefault();

            emailjs.sendForm("service_j42gghk", "template_mwacmfg", this)//service is,template id
                .then(function () {
                    alert("Message send successfully!")
                }, function (error) {
                    alert('Failed to send message:0' + JSON.stringify(error));

                });
        });
   // }


