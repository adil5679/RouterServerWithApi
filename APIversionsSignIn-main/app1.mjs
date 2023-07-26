

  var signin = document.getElementById('signin')

  signin.addEventListener('click', async function(){

    var email = document.getElementById('email').value
    var password = document.getElementById('password').value



    try {
      const axiosResponse = await axios.post(`/api/v1/login/${email}`, {
          password: password,
      })

      if (axiosResponse.data.userLoggedIn) {


        localStorage.setItem('do', `hahahahaha`);

        console.log(localStorage.getItem('do'));

        localStorage.setItem('user', `${JSON.stringify(axiosResponse.data.user)}`);


        location.href = `app.html`;

      }



  } catch {

      console.log("error");

  }



  })