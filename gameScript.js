const form = document.getElementById('registration-form');
const responseDiv = document.getElementById('response');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const mobile = document.getElementById('mobile').value;

  // Basic validation
  if (name === '' || email === '' || mobile === '') {
    responseDiv.textContent = 'Please fill all required fields.';
    return;
  }

  // Email validation
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))<span class="math-inline">/;
if \(\!emailRegex\.test\(email\)\)</5\> \{
responseDiv\.textContent \= 'Please enter a valid email address\.';
return;
\}
// Mobile number validation
const mobileRegex \= /^\[0\-9\]\{10\}</span>/;
  if (!mobileRegex.test(mobile)) {
    responseDiv.textContent = 'Please enter a valid 10-digit mobile number.';
    return;
  }

  // Calculate total registrations and prize
  const registered = parseInt(localStorage.getItem('registered')) || 0;
