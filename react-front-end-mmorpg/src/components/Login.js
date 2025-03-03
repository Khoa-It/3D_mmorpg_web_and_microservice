import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Login.css';
import { apiLogin } from '../api/admin';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(username && password){
      const param = {
        'email' : username,
        'password' : password,
      }
      const res = await apiLogin(param);
      if(res.data != null) navigate('/home');
      else alert('Tên người dùng hoặc mật khẩu sai!');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Đăng Nhập</h2>
        <form onSubmit={handleSubmit} className="login-form">
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
            <label>Mật khẩu</label>
            <input
              type="password"
              placeholder="Nhập mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Đăng Nhập</button>
        </form>
        <p className="register-link">
          Chưa có tài khoản? <a href="/register">Đăng ký ngay</a>
        </p>
      </div>
    </div>
  );
};

export default Login;   