import React, { useState } from 'react';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link, Redirect } from 'react-router-dom';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { userAuthorisationRequestSaga } from '../store/authActions';
import Spinner from '../../../components/Spinner';

const Login = () => {

  const [ name, setName ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ showPass, setShowPass ] = useState(false);
  const dispatch = useDispatch();
  const { loading, logged } = useSelector(({ authState }) => authState);

  const onLoginSubmit = (e) => {
    e.preventDefault();
    const userLoginObj = {
      userName: name,
      password,
    };
    dispatch(userAuthorisationRequestSaga(userLoginObj));
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
          onSubmit={onLoginSubmit}
        >
          <div className="text-lg font-bold text-gray-600">Sign in</div>
          <input
            className="w-full m-2 p-2 focus:outline-none rounded"
            placeholder="user or admin"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="flex m-2 w-full items-center justify-between">
            <input
              placeholder="111"
              type={showPass ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 focus:outline-none rounded"
            />
            <div
              className="w-5 h-5 cursor-pointer text-gray-500"
              onClick={() => setShowPass(!showPass)}
            >
              { showPass ? <VisibilityIcon /> : <VisibilityOffIcon /> }
            </div>
          </div>
          <div className="mx-2 mt-5 w-full flex items-center justify-between">
            <Link
              to="/auth/register"
              className="text-blue-600 cursor-pointer font-bold"
            >
              Register
            </Link>
            <Button variant="contained" disabled={!name.length || !password.length} type="submit">
              Login
            </Button>
          </div>
        </form>
      }
    </div>
  );
};

export default Login;
