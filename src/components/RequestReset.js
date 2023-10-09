import React, { useState } from 'react';
import { requestPasswordReset } from '../utils/loginUtils';

const RequestReset = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await requestPasswordReset(email);
    setMessage(response.message);
  };

  return (
    <div>
      <h2>Request Password Reset</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Send Reset Link</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RequestReset;
