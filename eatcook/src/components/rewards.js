import React from 'react'
import Navbar from './navbar'
import { Link } from 'react-router-dom'
import './../static/css/style.css'


const Rewards = () => (
    <div>
        <Navbar />
        <div className="row texthadeleft ">
            <div className="col-md-6 ">
                <div className="text-center">
                    <h1> REWARDS <br /> <Link to="/goodtest"><button className="buttonnav">GOOD TESTE</button></Link> </h1>
                </div>
            </div>
        </div>
    </div>

)

export default Rewards