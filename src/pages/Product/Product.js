import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProductDataRequestSaga } from './store/productActions';
import { addProductSaga } from '../ShoppingCart/store/shoppingCartActions';
import Spinner from '../../components/Spinner';
import { Button } from '@mui/material';

const Product = () => {

  const product = useParams();
  const [ productData, setProductData ] = useState(null);
  const { data, loading } = useSelector(({ productState }) => productState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      setProductData(data);
    } else {
      dispatch(getProductDataRequestSaga(product));
    }
  }, [data, dispatch, product]);

  if (loading) {
    return (
      <div className="w-full h-screen flex flex-col justify-start items-center p-10 bg-purple-500">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="w-full h-screen flex flex-col justify-start items-center p-10 bg-purple-500">
      <div className="text-gray-700 text-3xl font-bold w-full flex justify-center items-center">
        {productData && productData.name}
      </div>
      <div className="w-full flex justify-center items-center mt-10 p-10">
        <img alt={productData && productData.name} src={productData && productData.imgUrl} className="w-80 h-80 rounded-lg mr-10" />
        <div className="w-1/3 h-80 flex flex-col justify-start items-start p-10">
          <div className="flex flex-col justify-between items-start">
            <div className="text-white">
              <div className="font-bold text-xl mb-4">
                DESCRIPTION
              </div>
              <div className="text-sm">
                {productData && productData.description}
              </div>
            </div>
            <div className="w-full flex flex-col justify-end items-end mt-10">
              <div className="w-full flex justify-end items-center text-2xl font-bold text-yellow-300">
                $ {productData && productData.price}
              </div>
              <Button
                variant="contained"
                onClick={() => dispatch(addProductSaga({ product: productData, count: 1 }))}
              >
                add to shopping cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
