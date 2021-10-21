import React from 'react';

import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector, useDispatch } from 'react-redux';
import { logoutAction } from '../../pages/Auth/store/authActions';

const Navbar = () => {

  const user = useSelector(({ authState }) => authState.user);
  const dispatch = useDispatch();
  const shoppingCartState = useSelector(({ shoppingCartState }) => shoppingCartState);

  return (
    <div
      className="w-full flex justify-between items-center bg-purple-700 px-10 py-5 border-b border-purple-400"
    >
      <Link to="/" className="text-2xl font-bold text-white cursor-pointer transform hover:scale-110">
        Trading Floor
      </Link>
      <div className="flex justify-center items-center">
        {
          user && user.userRole === 'admin' ?
            <Link to="/admin" className="text-white text-xl font-bold cursor-pointer mr-4 transform hover:scale-110">
              Administration
            </Link> : null
        }
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center text-white mr-2">
            {user ? user.userName : null}
          </div>
          <div className="text-white flex justify-center items-center">
            <PersonIcon />
          </div>
        </div>
        <Link to="/shopping-cart"
          className=" relative text-white mx-4 flex justify-center items-center cursor-pointer transform hover:scale-110"
        >
          {
            shoppingCartState.data.length > 0 ? <div
              className="absolute w-4 h-4 rounded-full bg-green-500 text-white flex justify-center items-center font-bold"
              style={{ fontSize: '10px', left: '15px', bottom: '15px' }}
            >
              { shoppingCartState.data.length }
            </div> : null
          }
          <ShoppingCartIcon />
        </Link>
        <div className="flex flex-col justify-center items-center">
          <div
            className="my-2 text-red-500 font-bold text-sm cursor-pointer transform hover:scale-110"
            onClick={() => dispatch(logoutAction())}
          >
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
