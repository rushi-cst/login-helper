import React, { useState } from 'react';
import { loginUser, validateInputs } from '../utils/loginUtils';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    phone: ''
  });
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
    } else {
      setErrors({ form: response.message });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
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
      <div>
        <label>Phone:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
        {errors.phone && <p>{errors.phone}</p>}
      </div>
      <button type="submit">Login</button>
      {errors.form && <p>{errors.form}</p>}
    </form>
  );
};

export default LoginPage;