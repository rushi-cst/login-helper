import React, { useState } from 'react';
import { handleInputChange, validateInputs, loginUser } from '../utils/loginUtils';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validateInputs(formData);
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    const response = await loginUser(formData);
    if (response.success) {
      console.log(response.message);
      // Redirect or set user in context/state, etc.
    } else {
      setErrors({ form: response.message });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => handleInputChange(e, setFormData)}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={(e) => handleInputChange(e, setFormData)}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <button type="submit">Login</button>
      {errors.form && <p>{errors.form}</p>}
    </form>
  );
};

export default LoginPage;