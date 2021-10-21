import React, { useState, useEffect } from 'react';

import { useParams, Link, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryDataRequestSaga } from './store/categoryActions';
import { returnToDefaultProductStateAction } from '../Product/store/productActions';
import Spinner from '../../components/Spinner';
import Product from '../Product';

const Category = () => {

  const dispatch = useDispatch();
  const data = useSelector(({ categoryState }) => categoryState.data);
  const [ categoryData, setCategoryData ] = useState(null);

  const { category } = useParams();

  const renderCategoryItems = () => {
    return categoryData.map((item, idx) => {
      return (
        <div key={idx}>
          <Link to={`/categories/${category}/${item.name}`}
            className="p-5 m-5 flex flex-col justify-center items-center rounded-lg shadow-lg cursor-pointer bg-white
          transform hover:scale-110"
          >
            <img className="w-32 h-32 rounded" alt={item.name} src={item.imgUrl} />
            <div className="mt-4 text-md text-gray-700 font-bold">
              {item.name}
            </div>
            <div className="w-full mt-3 flex justify-end items-center text-xl text-green-600 font-bold">
              $ {item.price}
            </div>
          </Link>
          <Switch>
            <Route path="categories/:category/:product" children={<Product />} />
          </Switch>
        </div>
      );
    });
  };

  useEffect(() => {
    dispatch(returnToDefaultProductStateAction());
  }, [dispatch]);

  useEffect(() => {
    if (data) {
      setCategoryData(data);
    } else {
      dispatch(getCategoryDataRequestSaga(category));
    }
  }, [data, category, dispatch]);

  return (
    <div className="w-full flex flex-col justify-start items-center bg-purple-500 h-screen">
      <div className="w-full flex justify-center items-center p-10 text-white text-xl font-bold justify-start items-center">
        {category}
      </div>
      {
        categoryData ?
        <div className="w-full flex justify-center items-center p-10">
          { renderCategoryItems() }
        </div> : <Spinner />
      }
    </div>
  );
};

export default Category;
