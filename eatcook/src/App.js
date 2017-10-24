import React from 'react'
import Home from './components/home'
import Shareidea from './components/shareidea'
import './static/css/style.css'
import {BrowserRouter as Router,Route} from 'react-router-dom'

const App = () => (
  <div>
    <Router>
      <div>
        <Home/>
        <Route exact path="/" component={Home}/>
        <Route path="/shareidea" component={Shareidea}/>
      </div>
    </Router>
  </div>
)

export default App
