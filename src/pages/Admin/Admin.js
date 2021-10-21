import React from 'react';

import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Admin = () => {

  const user = useSelector(({ authState }) => authState.user);

  if (!user || user.userRole !== 'admin') {
    return <Redirect to="/" />
  }

  return (
    <div className="w-full flex justify-center items-center">
      <div>
        Admin Page
      </div>
    </div>
  );
};

export default Admin;
