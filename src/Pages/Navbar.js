import React from 'react'
// import './navbar.css'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <a href="#" className="navbar-brand"> Brand</a>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navMenu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navMenu">
                <ul className="navbar-nav mr-auto">
                     <li className="nav-item">
                         <a href="#" className="nav-link">Home</a>
                     </li>

                     <li className="nav-item">
                         <a href="#" className="nav-link">Categories</a>
                     </li>

                     <li className="nav-item">
                         <a href="#" className="nav-link">Products</a>
                     </li>
                </ul>



                </div>
                
            </nav>
            
        </div>
    )
}
