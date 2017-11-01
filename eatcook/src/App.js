import React from 'react'
import Navbar from './components/navbar'
import Home from './components/home'
import Shareidea from './components/shareidea'
import Makeit from './components/makeit'
import rewards from './components/rewards'
import inspiration from './components/inspiration'
import contactus from './components/contactus'
import Youridea from './components/youridea'
import Learnandcook from './components/learnandcook'
import Startidea from './components/startidea'
import Goodtest from './components/goodtest'
<<<<<<< HEAD
import Login from './components/login'
=======
import login from './components/login'
>>>>>>> 9924a0ca7bbf0151969dd4805a1ab2e3f01bc550
import { BrowserRouter as Router, Route } from 'react-router-dom'

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
<<<<<<< HEAD
        <Route path="/login" component={Login} />
=======
        <Route path="/login" component={(login)} />
>>>>>>> 9924a0ca7bbf0151969dd4805a1ab2e3f01bc550
        </div>
      </div>
    </Router>
  </div>
)

export default App
