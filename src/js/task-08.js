document.querySelector('.login-form').addEventListener('submit', mainSubmit)






function mainSubmit(event) {
  event.preventDefault()

  const { email, password } = event.currentTarget
  
     if (email.value === "" || password.value === "") {
      return alert("Please fill in all the fields!");
     }
  
  const user = {
    elements: {
      email: email.value,
      password: password.value
    }
  }
  
   
    console.log(user.elements);  

  event.currentTarget.reset();
}

