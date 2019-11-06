const apiURLl = "https://movies-api-siit.herokuapp.com";
const registerURL = apiURLl + "/auth/register";
const loginURL = apiURLl + "/auth/login";
const logoutURL = apiURLl + "/auth/logout";

// const registerButton = document.getElementById('register-button');
// registerButton.addEventListener('click', function(){

//     document.getElementById('modal-auth').showModal();
//     }
// )
class User {
  constructor(name, password, endpoint) {
    this.name = name;
    this.password = password;
    this.endpoint = endpoint;
  }

  registerNewUser() {
    console.log(this);
    fetch(this.endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: this.name, password: this.password })
    })
      .then(response => response.json())
      .then(data => console.log(data));
  }

  logInUser() {
    console.log(this);
    fetch(this.endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: this.name, password: this.password })
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  }

  logOut() {}
}

//register function

//login function
function logIn(url, user) {}
