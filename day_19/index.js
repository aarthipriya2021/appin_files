document.getElementById('simpleForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
  
    // Error elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
  
    // Reset error messages
    nameError.style.display = 'none';
    emailError.style.display = 'none';
    passwordError.style.display = 'none';
  
    try {
      // Name validation
      if (name === '') throw { field: 'name', message: 'Name is required.' };
      if (name.length < 3) throw { field: 'name', message: 'Name must be at least 3 characters.' };
  
      // Email validation
      if (email === '') throw { field: 'email', message: 'Email is required.' };
      if (!/^\S+@\S+\.\S+$/.test(email)) throw { field: 'email', message: 'Email is invalid.' };
  
      // Password validation
      if (password === '') throw { field: 'password', message: 'Password is required.' };
      if (password.length < 6) throw { field: 'password', message: 'Password must be at least 6 characters.' };
  
      // Form is valid
      alert('Form submitted successfully!');
    } catch (error) {
      // Handle thrown errors
      if (error.field === 'name') {
        nameError.textContent = error.message;
        nameError.style.display = 'block';
      } else if (error.field === 'email') {
        emailError.textContent = error.message;
        emailError.style.display = 'block';
      } else if (error.field === 'password') {
        passwordError.textContent = error.message;
        passwordError.style.display = 'block';
      }
    } finally {
      console.log('Validation process completed.');
    }
  });
  