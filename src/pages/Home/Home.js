import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import Sidebar from '../../components/Sidebar';
import Spinner from '../../components/Spinner';
import Categories from '../../components/Categories';
import { getCategoriesRequestSaga } from './store/homeActions';
import { returnToDefaultAction } from '../Category/store/categoryActions';

const Home = () => {

  const user = useSelector(({ authState }) => authState.user);
  const { data, loading } = useSelector(({ homeState }) => homeState);
  const [ categories, setCategories ] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(returnToDefaultAction());
  }, [dispatch]);

  useEffect(() => {
    if (data) {
      setCategories(data);
    } else {
      dispatch(getCategoriesRequestSaga());
    }
  }, [data, dispatch]);

  if (!user) {
    return <Redirect to="/auth/signin" />
  }

  return (
    <div className="flex w-full bg-purple-500 flex flex-col h-screen">
      {/*<Sidebar />*/}
      { loading ? <Spinner /> : null }
      {
        data && !loading ?
          <div className="bg-purple-500 p-10 w-full flex flex-col h-screen">
            <div className="text-2xl text-gray-700 font-bold w-full p-10 border-b border-purple-400">
              Categories
            </div>
            <Categories categories={categories} />
          </div> : null
      }
    </div>
  );
};

export default Home;
