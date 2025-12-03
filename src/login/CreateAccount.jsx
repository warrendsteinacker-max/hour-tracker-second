import { useState } from 'react';

export default function CreateAccount() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(''); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(''); 

    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    try {
      // Inside CreateAccount.jsx (and SignIn.jsx)

// ➡️ NEW Fetch URL: Targeting backend on port 8080
const response = await fetch('http://localhost:8080/backend/api/register', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
});

   


      const data = await response.json();

      if (response.ok) {
        setMessage('✅ Account created successfully! You can now sign in.');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      } else {
        setMessage(`❌ Error: ${data.message || 'Registration failed.'}`);
      }
    } catch (error) {
      setMessage('❌ Failed to connect to the server. Is the backend running on port 8081?');
      console.error('Network error during registration:', error);
    }
  };

  return (
    <div className="create-account-container">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Create Account</button>
      </form>
      {message && <p className="status-message">{message}</p>}
    </div>
  );
}