import React, { useState } from 'react';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    newPassword: '',
    confirmPassword: '',
    isRobot: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., validation, API call)
    console.log(formData);
    // Reset form after submission if needed
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      newPassword: '',
      confirmPassword: '',
      isRobot: false,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        New Password:
        <input
          type="password"
          name="newPassword"
          value={formData.newPassword}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Confirm Password:
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="isRobot"
          checked={formData.isRobot}
          onChange={handleChange}
          required
        /> Are you a robot?
      </label>
      <br />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
