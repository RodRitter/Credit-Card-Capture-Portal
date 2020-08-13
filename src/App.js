import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Provider } from 'react-redux'
import store from './redux/store'

import CreditCardCapture from './containers/CreditCardCapture'

function App() {
  return (
    
      <Router>
        <Provider store={store}>
          <Switch>
            <Route path="/">
              <CreditCardCapture />
            </Route>
          </Switch>
        </Provider>
      </Router>
  );
}

export default App;
