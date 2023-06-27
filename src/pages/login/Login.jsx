import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      navigate('/home');
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post('https://datn-web-led-mn.vercel.app/api/auth/login', {
        email: email,
        password: password
      })
      .then((response) => {
        const { token, user } = response.data;
        console.log(response.data);
        Cookies.set('user', JSON.stringify(user));
        Cookies.set('token', token);
        navigate('/home');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      navigate('/home');
    }
  }, [navigate, email, password]); // Thêm email và password vào mảng dependency

  return (
    <div className="container-login100 snipcss-iEisH">
      <div className="wrap-login100">
        <div className="login100-form-title style-fgjJw" id="style-fgjJw">
          <span className="login100-form-title-1">
            Sign In
          </span>
        </div>
        <form className="login100-form validate-form">
          <div className="wrap-input100 validate-input m-b-26" data-validate="Username is required">
            <span className="label-input100">
              Username
            </span>
            <input
              className="input100"
              type="text"
              name="username"
              placeholder="Enter username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="focus-input100">
            </span>
          </div>
          <div className="wrap-input100 validate-input m-b-18" data-validate="Password is required">
            <span className="label-input100">
              Password
            </span>
            <input
              className="input100"
              type="password"
              name="pass"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="focus-input100">
            </span>
          </div>
          <div className="flex-sb-m w-full p-b-30">
            <div className="contact100-form-checkbox">
              <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
              <label className="label-checkbox100" htmlFor="ckb1">
                Remember me
              </label>
            </div>
            <div>
              <a href="#" className="txt1">
                Forgot Password?
              </a>
            </div>
          </div>
          <div className="container-login100-form-btn">
            <button className="login100-form-btn" onClick={handleLogin}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
