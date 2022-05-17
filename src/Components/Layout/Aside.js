import React from 'react'
import { NavLink ,Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Aside = () => {
    const location = useLocation();
    const { pathname } = location;
    const splitlocation = pathname.split('/');
    console.log(splitlocation); 

    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
                <li className="nav-item nav-profile">
                    <div className="nav-link">
                        <div className="profile-image">
                            <img src="images/faces/face5.jpg" alt="image" />
                        </div>
                        <div className="profile-name">
                            <p className="name">
                                Welcome Jane
                            </p>
                            <p className="designation">
                                Super Admin
                            </p>
                        </div>
                    </div>
                </li>
                <li className={splitlocation[1] === "dashbord" ? "active nav-item" : "nav-item"}>
                    <NavLink to='/' className="nav-link">
                        <i className="fa fa-home menu-icon" />
                        <span className="menu-title">Dashboard</span>
                    </NavLink>
                </li>
                <li className={
                    splitlocation[1] === "fans" ? "active nav-item" :
                    splitlocation[1] === "player" ? "active nav-item" :
                    splitlocation[1] === "coach" ? "active nav-item" :
                    "nav-item"}>
                    <a className="nav-link active" data-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables">
                        <i className="fas fa-table menu-icon" />
                        <span className="menu-title">Users</span>
                        <i className="menu-arrow" />
                    </a>
                    <div className="collapse" id="tables">
                        <ul className="nav flex-column sub-menu">
                            <li className={splitlocation[1] === "fans" ? "active nav-item" : "nav-item"}>
                                <NavLink to='/fans' className="nav-link active" >Fans</NavLink>
                            </li>
                            <li className={splitlocation[1] === "player" ? "active nav-item" : "nav-item"}>
                                <NavLink to='/player' className="nav-link" >Player</NavLink>
                            </li>
                            <li className={splitlocation[1] === "coach" ? "active nav-item" : "nav-item"}>
                                <NavLink to='/coach' className="nav-link" >Coach</NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </li>



            </ul>
        </nav>
    )
}

export default Aside