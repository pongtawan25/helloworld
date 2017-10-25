import React from 'react'
import Navbar from './components/navbar'
import Home from './components/home'
import Shareidea from './components/shareidea'
import Makeit from './components/makeit'
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
        </div>
      </div>
    </Router>
  </div>
)

export default App
