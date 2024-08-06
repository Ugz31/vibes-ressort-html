document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault()

      var formData = new FormData(this)


      fetch('https://www.vibesresort.com/plaquette', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'X-Requested-With': 'XMLHttpRequest',
              'X-CSRF-Token': formData.get('authenticity_token')
          },
          body: formData
      })
      .then(response => response.json())
      .then(data => {
          if (data.success) {
              alert('Form submitted successfully');
              document.getElementById('contact-form').reset();
          } else {
              alert('There was an error submitting the form: ' + (data.error || 'Unknown error'));
          }
      })
      .catch(error => {
          console.error('Error:', error);
          alert('There was an error submitting the form');
      });
  });
});
