import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert('Mật khẩu xác nhận không khớp!');
      return;
    }

    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    alert('Đăng ký thành công!');
    navigate('/login');
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2 className="register-title">Đăng Ký Tài Khoản</h2>
        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <label>Tên người dùng</label>
            <input
              type="text"
              placeholder="Nhập tên người dùng"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Nhập địa chỉ email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Mật khẩu</label>
            <input
              type="password"
              placeholder="Nhập mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Xác nhận mật khẩu</label>
            <input
              type="password"
              placeholder="Nhập lại mật khẩu"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="register-button">
            Đăng Ký
          </button>
        </form>
        <p className="login-link">
          Đã có tài khoản? <a href="/login">Đăng nhập ngay</a>
        </p>
      </div>
    </div>
  );
};

export default Register;