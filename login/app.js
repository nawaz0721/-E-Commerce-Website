function userLogIn() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }
  
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
  
    alert('Login successful');
  }