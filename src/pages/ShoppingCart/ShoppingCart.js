import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { addProductSaga, payProductRequestSaga } from './store/shoppingCartActions';

const ShoppingCart = () => {

  const cartState = useSelector(({ shoppingCartState }) => shoppingCartState);
  const [ total, setTotal ] = useState(0);
  const [ confirm, setConfirm ] = useState(false);
  const [ goHome, setGoHome ] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cartState.data.length) {
      let totalPrice = 0;
      for (let i = 0; i < cartState.data.length; i++) {
        totalPrice += cartState.data[i].product.price * cartState.data[i].count;
      }
      setTotal(totalPrice);
    }
  }, [cartState]);

  const renderAddedProducts = () => {

    return cartState.data.map((product, idx) => {
      return (
        <div key={idx} className="w-full flex justify-between items-center p-5 m-5 bg-white rounded-lg shadow-lg">
          <img alt="" className="w-20 h-20 rounded mr-10" src={product.product.imgUrl} />
          <div>
            { product.productName }
          </div>
          <div>
            $ { product.product.price }
          </div>
          <div className="flex justify-center items-center">
            <div className="text-2xl cursor-pointer" onClick={() => dispatch(addProductSaga({ product: product.product, count: -1 }))}>-</div>
            <div className="mx-5">{ product.count }</div>
            <div className="text-2xl cursor-pointer" onClick={() => dispatch(addProductSaga({ product: product.product, count: 1 }))}>+</div>
            <div
              className="ml-5 cursor-pointer"
              onClick={() => dispatch(addProductSaga({ product: product.product, count: -product.count }))}
            >
              <DeleteOutlineIcon color="error" />
            </div>
          </div>
        </div>
      );
    });
  };

  const finishedPaying = () => {
    dispatch(payProductRequestSaga(cartState.data));
    setConfirm(false);
    setGoHome(true);
  };

  const renderModalConfirm = () => {
    return (
      <div
        style={{ background: 'rgba(0, 0, 0, 0.7)' }}
        className="fixed top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center"
      >
        <div className="w-1/2 bg-white flex flex-col justify-center items-center rounded-lg shadow-lg  p-20">
          <div className="text-2xl text-gray-700 font-bold">Thank you for your order!</div>
          <div className="text-lg text-gray-700 font-bold mb-20 mt-10">We will contact you shortly</div>
          <div
            onClick={() => finishedPaying()}
            className="w-full flex justify-end items-center"
          >
            <div
              className="p-5 px-20 rounded-lg bg-blue-600 text-white font-bold text-xl
              transform hover:scale-110"
            >
              Ok
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (goHome) {
    return <Redirect to="/" />
  }

  return (
    <div className="w-full flex flex-col justify-start items-center bg-purple-500 h-screen p-10 overflow-y-auto pb-72">
      { confirm ? renderModalConfirm() : null }
      <div className="text-2xl text-white font-bold">
        ShoppingCart
      </div>
      {
        cartState.data.length ?
          <div className="w-full flex flex-col">
            {renderAddedProducts()}
            <div className="w-full flex justify-end items-center">
              <div className="flex bg-white p-5 rounded-lg">
                <div className="text-gray-700 text-xl font-bold mr-5">
                  Total:
                </div>
                <div className="text-green-700 text-xl font-bold">
                  $ {total}
                </div>
              </div>
              <div
                onClick={() => setConfirm(true)}
                className="h-full flex justify-center items-center rounded-lg cursor-pointer transform
                ml-5 px-5 hover:scale-110 bg-blue-600 text-white text-xl font-bold border border-purple-400"
              >
                confirm the order
              </div>
            </div>
          </div> :
          <div className="m-10 text-white">
            Nothing to show
          </div>
      }
    </div>
  );
};

export default ShoppingCart;
