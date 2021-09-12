import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import BestBooks from './component/BestBooks';
import Profile from './component/Profile';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// }
//  from "react-router-dom";
// import reactDom from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {/* <Router>
          <Switch>
            <Route exact path="/">
              <BestBooks />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
          </Switch>
        </Router> */}
        <BestBooks />
        
      </div>
    )
  }
}

export default App
