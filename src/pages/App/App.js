import React from 'react';

import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from '../../configs/routes';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const App = () => {

  const userRole = useSelector(({ authState }) => authState.userRole);

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <Router>
        <Navbar />
        <Switch>
          {
            routes.map((route, idx) => {
              const { role, exact, path, component } = route;
              return role.includes(userRole) && <Route key={idx} exact={exact} path={path} component={component} />
            })
          }
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
