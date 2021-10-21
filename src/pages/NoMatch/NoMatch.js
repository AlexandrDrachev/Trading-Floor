import React from 'react';

import { Link } from 'react-router-dom';

const NoMatch = () => {

  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center">
      <div className="text-2xl text-gray-700 font-bold">Page not found</div>
      <div className="text-xl text-gray-700 font-bold">or you cannot view this content</div>
      <div className="w-full flex justify-center items-center text-sm mt-10">
        <div>please</div>
        <Link to="/" className="text-blue-500 font-bold cursor-pointer ml-3">sign in</Link>
      </div>
    </div>
  );
};

export default NoMatch;
