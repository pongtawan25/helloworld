import React from 'react'
import Navbar from './components/navbar'
import Home from './components/home'
import Shareidea from './components/shareidea'
import Makeit from './components/makeit'
import rewards from './components/rewards'
import inspiration from './components/inspiration'
import contactus from './components/contactus'
import member from './components/member'
import Youridea from './components/youridea'
import Learnandcook from './components/learnandcook'
import Startidea from './components/startidea'
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
          <Route path="/member" component={member}/>
          <Route path="/youridea" component={Youridea}/>
          <Route path="/learnandcook" component={ Learnandcook}/>
          <Route path="/startidea" component={Startidea}/>
        </div>
      </div>
    </Router>
  </div>
)

export default App
