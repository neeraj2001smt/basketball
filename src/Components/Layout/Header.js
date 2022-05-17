import React from 'react'
import { NavLink , Link} from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row default-layout-navbar">
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                <NavLink to='/' className="navbar-brand brand-logo" href="/fans">BasketBall</NavLink>
                <NavLink to='/' className="navbar-brand brand-logo-mini" href="index-2.html"><img src="images/logo-mini.svg" alt="logo" /></NavLink>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-stretch">
                <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                    <span className="fas fa-bars" />
                </button>
               
                <ul className="navbar-nav navbar-nav-right">
                    <li className="nav-item nav-profile dropdown">
                        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
                        <i class="fas fa-solid fa-power-off"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                            <div className="dropdown-divider" />
                            <Link to='/' className="dropdown-item">
                                <i className="fas fa-power-off text-primary" />
                                Logout
                            </Link>
                        </div>
                    </li>
                </ul>
                <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                    <span className="fas fa-bars" />
                </button>
            </div>
        </nav>
    )
}

export default Header