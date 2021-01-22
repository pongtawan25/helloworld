import React from "react";
import Home from "./components/home";
import Shareidea from "./components/shareidea";
import Makeit from "./components/makeit";
import rewards from "./components/rewards";
import inspiration from "./components/inspiration";
import contactus from "./components/contactus";
import Youridea from "./components/youridea";
import Learnandcook from "./components/learnandcook";
import Startidea from "./components/startidea";
import Goodtest from "./components/goodtest";
import Login from "./components/login";
import Omelet from "./components/omelet";
import Donut from "./components/donut";
import Salad from "./components/salad";
import Spagetti from "./components/spagetti";

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => (
  <div>
    <Router>
      <div>
        <div className="container-fluid">
          <Route exact path="/" component={Home} />
          <Route path="/shareidea" component={Shareidea} />
          <Route path="/makeit" component={Makeit} />
          <Route path="/rewards" component={rewards} />
          <Route path="/inspiration" component={inspiration} />
          <Route path="/contactus" component={contactus} />
          <Route path="/youridea" component={Youridea} />
          <Route path="/learnandcook" component={Learnandcook} />
          <Route path="/startidea" component={Startidea} />
          <Route path="/goodtest" component={Goodtest} />
          <Route path="/login" component={Login} />
          <Route path="/omelet" component={Omelet} />
          <Route path="/donut" component={Donut} />
          <Route path="/salad" component={Salad} />
          <Route path="/spagetti" component={Spagetti} />
        </div>
      </div>
    </Router>
  </div>
);

export default App;
