
//validez date din formular cu regex + PreventDefault
document.addEventListener('DOMContentLoaded', function() {
    var contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
      var nameInput = document.getElementById('name');
      var emailInput = document.getElementById('email');

      var namePattern = /^[a-zA-Z\s]+$/; 
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

      if (!namePattern.test(nameInput.value)) {
        event.preventDefault();
        alert('Please enter a valid name (letters and spaces only).');
      }

      if (!emailPattern.test(emailInput.value)) {
        event.preventDefault();
        alert('Please enter a valid email address.');
      }
    });
  });
