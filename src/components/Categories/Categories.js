import React from 'react';

import { Link, Switch, Route } from 'react-router-dom';
import Category from '../../pages/Category';

const Categories = ({ categories }) => {

  const renderCategory = () => {
    return categories && categories.map((category, idx) => {
      return (
        <div key={idx}>
          <Link to={`/categories/${category.name}`}
            className="p-5 rounded shadow-lg m-5 cursor-pointer flex flex-col justify-center items-center flex-wrap
            bg-purple-400 transform hover:scale-110"
          >
            <div className="w-32 h-32 mb-4">
              <img alt="category" src={category.imgUrl} className="w-full h-full rounded" />
            </div>
            <div className="text-xl text-gray-700 font-bold">
              {category.name}
            </div>
          </Link>
          <Switch>
            <Route path="/categories/:category" children={<Category />} />
          </Switch>
        </div>
      );
    });
  };

  return (
    <div className="w-full flex justify-center items-center p-10">
      { renderCategory() }
    </div>
  );
};

export default Categories;
