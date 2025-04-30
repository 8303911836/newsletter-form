document.getElementById('subscription-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const formData = new FormData();
    formData.append('email', email);
  
    fetch('https://script.google.com/macros/s/AKfycbxMGl4i7LlEfJeopEvyLG3f51CGQBRbqA1O7X6hFFVPXHSCJMZpg2yT8jf-cqsCsjzhHQ/exec', {
      method: 'POST',
      body: formData
    })
    .then(response => response.text())
    .then(result => {
      document.getElementById('confirmation-message').innerText = '✅ Thank you for subscribing!';
      document.getElementById('email').value = '';
    })
    .catch(error => {
      document.getElementById('confirmation-message').innerText = '❌ Something went wrong. Please try again.';
    });
  });
  