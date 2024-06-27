import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as authService from '../../services/authService';

const SignupForm = (props) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(['']);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    passwordConf: '',
  });

  const updateMessage = (msg) => {
    setMessage(msg);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUserResponse = await authService.signup(formData);
      props.setUser(newUserResponse.user);
      navigate('/');
    } catch (err) {
      updateMessage(err.message);
    }
  };

  const { username, password, passwordConf } = formData;

  const isFormInvalid = () => {
    return !(username && password && password === passwordConf);
  };

  return (
    <main>
      <div className='post-form'>
        <h1>Sign Up</h1>
        <p>{message}</p>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="name"
              value={username}
              name="username"
              onChange={handleChange}
              placeholder='FunkySauce'
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              name="password"
              onChange={handleChange}
              placeholder="Don't use 'password'"
            />
          </div>
          <div>
            <label htmlFor="confirm">Confirm Password:</label>
            <input
              type="password"
              id="confirm"
              value={passwordConf}
              name="passwordConf"
              onChange={handleChange}
              placeholder="No really, don't"
            />
          </div>
          <div className='auth-buttons'>
            <Link to="/"><button>Cancel</button></Link>
            <button disabled={isFormInvalid()}>Sign Up</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default SignupForm;
