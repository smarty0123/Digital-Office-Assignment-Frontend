import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MyProfile from "./components/MyProfile";
import AllRestaurants from "./components/AllRestaurants";
import MemoryRecorder from "./components/MemoryRecorder";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={MyProfile} />
          <Route path="/allRestaurants" component={AllRestaurants} />
          <Route path="/memoryRecorder" component={MemoryRecorder} />
        </Switch>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;
