import React, { useState } from 'react';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link, Redirect } from 'react-router-dom';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { userRegistrationRequestSaga } from '../store/authActions';
import Spinner from '../../../components/Spinner';

const Register = () => {

  const [ name, setName ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ passwordConfirm, setPasswordConfirm ] = useState('');
  const [ showPass, setShowPass ] = useState(false);
  const [ showPassConfirm, setShowPassConfirm ] = useState(false);
  const dispatch = useDispatch();
  const { loading, logged } = useSelector(({ authState }) => authState);

  const onRegisterSubmit = (e) => {
    e.preventDefault();
    const userRegisterObj = {
      userName: name,
      password,
    };
    dispatch(userRegistrationRequestSaga(userRegisterObj));
  };

  if (logged) {
    return <Redirect to="/" />
  }

  return (
    <div className="absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center bg-purple-500">
      {
        loading ? <Spinner /> :
        <form
          className="p-10 flex flex-col justify-center items-center bg-blue-200 rounded shadow-lg"
          onSubmit={onRegisterSubmit}
        >
          <div className="text-lg font-bold text-gray-600">Registration</div>
          <input
            className="w-full m-2 p-2 focus:outline-none rounded"
            placeholder="username"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="flex m-2 w-full items-center justify-between">
            <input
              placeholder="password"
              type={showPass ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 focus:outline-none rounded"
            />
            <div className="w-5 h-5 cursor-pointer text-gray-500" onClick={() => setShowPass(!showPass)}>
              { showPass ? <VisibilityIcon /> : <VisibilityOffIcon /> }
            </div>
          </div>
          <div className="flex m-2 w-full items-center justify-between">
            <input
              placeholder="password confirm"
              type={showPassConfirm ? "text" : "password"}
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              className="p-2 focus:outline-none rounded"
            />
            <div className="w-5 h-5 cursor-pointer text-gray-500" onClick={() => setShowPassConfirm(!showPassConfirm)}>
              { showPassConfirm ? <VisibilityIcon /> : <VisibilityOffIcon /> }
            </div>
          </div>
          <div className="mx-2 mt-5 w-full flex items-center justify-between">
            <Link
              to="/auth/signin"
              className="text-blue-600 cursor-pointer font-bold"
            >
              Login
            </Link>
            <Button
              variant="contained"
              disabled={!name.length || !password.length || !passwordConfirm.length || password !== passwordConfirm}
              type="submit"
            >
              Register
            </Button>
          </div>
        </form>
      }
    </div>
  );
};

export default Register;
