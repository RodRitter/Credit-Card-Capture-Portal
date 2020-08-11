import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import CreditCardCapture from './containers/CreditCardCapture'

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/capture">
            <CreditCardCapture />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
