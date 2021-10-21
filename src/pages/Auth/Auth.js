import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

const Auth = () => {

  return (
    <div className="w-full container mx-auto">
      <div className="w-full flex flex-col justify-center items-center p-20 sm:p-10 overflow-hidden">
        <Switch>
          <Route path="/auth/signin" component={Login} />
          <Route path="/auth/register" component={Register} />
        </Switch>
      </div>
    </div>
  );
};

export default Auth;
