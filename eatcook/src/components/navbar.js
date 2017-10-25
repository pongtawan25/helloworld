import React from 'react'
import { Link } from 'react-router-dom'
import './../static/css/bootstrap.min.css'
import './../static/css/style.css'

const Navbar = () => (
    <div>
        <div className="row ">
            <div className="offset-md-2 col-md-1 ">
                <Link to="/"><button >HOME</button></Link>
            </div>
            <div className="col-md-1 spaceleft">
                <Link to="/shareidea"><button >SHARE IDEA</button></Link>
            </div>
            <div className="col-md-1 spaceleft">
                <Link to="/makeit"><button >MAKE IT</button></Link>
            </div>
            <div className="col-md-1 spaceleft ">
                <Link to="/rewards"><button >REWARDS</button></Link>
            </div>
            <div className="col-md-1 spaceleft">
                <Link to="/inspiration"><button>INSPIRATION</button></Link>
            </div>
            <div className="col-md-1 spaceleft">
                <Link to="/contactus"><button>CONTACT US</button></Link>
            </div>
            {/* <div className="col-md-1 spaceleft">
                <Link to="/member"><button>MEMBER</button></Link>
            </div> */}
        </div>
        
    </div>
)

export default Navbar