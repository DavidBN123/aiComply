document.querySelectorAll('.form-group input').forEach(inputElement => {
  inputElement.addEventListener('blur', () => {
      if (inputElement.value !== '') {
          inputElement.classList.add('used');
      } else {
          inputElement.classList.remove('used');
      }
  });

  inputElement.addEventListener('focus', () => {
      inputElement.parentElement.classList.add('is-focused');
  });

  inputElement.addEventListener('blur', () => {
      inputElement.parentElement.classList.remove('is-focused');
  });
});

// Social login buttons animations
document.querySelectorAll('.social-btn').forEach(button => {
  button.addEventListener('click', function() {
      alert('Login with ' + this.textContent.trim() + ' clicked!');
  });
});