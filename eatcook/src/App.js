import React from 'react'
import Navbar from './components/navbar'
import Home from './components/home'
import Shareidea from './components/shareidea'
import Makeit from './components/makeit'
import rewards from './components/rewards'
import inspiration from './components/inspiration'
import contactus from './components/contactus'
import './static/css/style.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => (
  <div>
    <Router>
      <div>
        <div className="container-fluid">
          <Navbar/>
          <Route exact path="/" component={Home} />
          <Route path="/shareidea" component={Shareidea}/>
          <Route path="/makeit" component={Makeit}/>
          <Route path="/rewards" component={rewards}/>
          <Route path="/inspiration" component={inspiration}/>
          <Route path="/contactus" component={contactus}/>
        </div>
      </div>
    </Router>
  </div>
)

export default App
