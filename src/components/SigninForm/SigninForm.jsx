import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as authService from '../../services/authService';

const SigninForm = (props) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(['']);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const updateMessage = (msg) => {
    setMessage(msg);
  };

  const handleChange = (e) => {
    updateMessage('');
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await authService.signin(formData);
      props.setUser(user);
      navigate('/posts');
    } catch (err) {
      updateMessage(err.message);
    }
  };

  return (
    <main>
      <div className='post-form'>
        <h1>Log In</h1>
        <p>{message}</p>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Username:</label>
            <input
              type="text"
              autoComplete="off"
              id="username"
              value={formData.username}
              name="username"
              onChange={handleChange}
              placeholder='FunkySauce'
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              autoComplete="off"
              id="password"
              value={formData.password}
              name="password"
              onChange={handleChange}
              placeholder='NOTpassword'
            />
          </div>
          <div className='auth-buttons'>
              <Link to="/"><button>Cancel</button></Link>
              <button>Log In</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default SigninForm;
