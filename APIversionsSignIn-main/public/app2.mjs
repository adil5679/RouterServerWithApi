
  var signup = document.getElementById('signup')

  signup.addEventListener('click', async function(){

    var email = document.getElementById('email').value
    var password = document.getElementById('password').value

    
    try {
      const axiosResponse = await axios.post(`/api/v1/signup/${email}`, {
          password: password,
      })

      if (axiosResponse.data.signUpSuccess) {



        console.log(axiosResponse.data.signUpSuccess);
        location.href = `signin.html`;

      }

      else{


        console.log(axiosResponse.data.errorMessage);


      }



  } catch(error) {

      console.log(error);

  }



  })





