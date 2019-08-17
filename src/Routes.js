import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Contact } from "./pages";
import { FixedNavbar } from './components';
import { Strings } from './util/Strings';
import './sass/General.sass';

function Routes() {
  return (
    <Router>
      <FixedNavbar />
      <div className="routerContainer">

        <Route path={Strings.exactPath} exact component={Home} />
        <Route path={Strings.contactPath} component={Contact} />
      </div>
    </Router>
  );
}

export default Routes;
