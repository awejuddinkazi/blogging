// Example JavaScript code for frontend interactions

// Function to handle login form submission
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(loginForm);
  const username = formData.get('username');
  const password = formData.get('password');

  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (response.ok) {
      // Login successful, redirect or show success message
      console.log(data); // Placeholder for actual logic
    } else {
      // Login failed, display error message
      console.error(data.error);
    }
  } catch (err) {
    console.error('Error:', err);
  }
});

// Function to handle registration form submission
const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(registerForm);
  const username = formData.get('username');
  const password = formData.get('password');

  try {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (response.ok) {
      // Registration successful, redirect or show success message
      console.log(data); // Placeholder for actual logic
    } else {
      // Registration failed, display error message
      console.error(data.error);
    }
  } catch (err) {
    console.error('Error:', err);
  }
});
