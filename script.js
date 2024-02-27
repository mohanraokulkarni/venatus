document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault(); // prevent form submission

  // Get username and password
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Simple check for demonstration purpose (Replace with proper authentication)
  if (username === 'venatus' && password === 'venatus') {
    // Redirect to provided link
    window.location.href = './va/index.html'; // Replace with your desired link
    // Disable back button
    history.pushState(null, null, window.location.href);
    window.onpopstate = function() {
      history.go(1);
    };
  } else {
    alert('Invalid username or password');
  }
});
