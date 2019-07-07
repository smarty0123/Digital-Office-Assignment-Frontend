import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MyProfile from "./components/MyProfile"
import AllRestaurants from './components/AllRestaurants'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export class App extends React.Component {
  render(){
    return (
      <React.Fragment>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={MyProfile} />
            <Route path="/allRestaurants" component={AllRestaurants} />
          </Switch>
        </Router>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
