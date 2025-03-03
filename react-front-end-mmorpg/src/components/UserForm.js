import React, { useState } from "react";

const UserForm = ({ onAddUser }) => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      onAddUser(formData);
      setFormData({ name: "", email: "" });
    }
  };

  return (
    <div className="user-form">
      <h2>Thêm tài khoản</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Tên"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <button type="submit">Thêm</button>
      </form>
    </div>
  );
};

export default UserForm;
