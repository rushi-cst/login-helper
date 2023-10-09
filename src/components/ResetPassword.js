import React, { useState } from 'react';
import { validateResetToken, setNewPassword } from '../utils/loginUtils';

const ResetPassword = () => {
  const [token, setToken] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const tokenValidation = await validateResetToken(token);
    
    if (tokenValidation.success) {
      const passwordResponse = await setNewPassword(token, password);
      setMessage(passwordResponse.message);
    } else {
      setMessage(tokenValidation.message);
    }
  };

  return (
    <div>
      <h2>Set New Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Reset Token:</label>
          <input 
            type="text" 
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />
        </div>
        <div>
          <label>New Password:</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Reset Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPassword;
