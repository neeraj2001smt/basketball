import React, { useState } from 'react'
import {  NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

// import PropTypes from 'prop-types';

const AdminLogin = (setToken) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let navigate = useNavigate()
    const LoginHandler = (event)=>{
        event.preventDefault();
        console.log("login")
        navigate('/dashbord')
    }
    const ValidateForm = () =>{
        return email.length > 0 && password.length>8  ;
    }
    return (
        <div className="login-page">
            <div className="login-box">
                <div className="card">
                    <div className="card-body login-card-body">
                        <h2 className='text-center'> Admin Panel</h2>
                        <form onSubmit={LoginHandler}>
                            <div className="input-group mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    onChange={(event) => { setEmail(event.target.value) }}
                                    required
                                    value={email}
                                />
                            </div>
                            <div className="input-group mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    onChange={(event) => setPassword(event.target.value)}
                                    required
                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                                    value={password}
                                />
                            </div>
                            <div className="input-group mb-3">
                                <NavLink to='/forgetpasswd'> Forgot Password</NavLink>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    {/* <NavLink to='/dashbord'> */}
                                        <button type='submit' disabled={!ValidateForm()} className="btn btn-primary btn-block">LogIn</button>
                                    {/* </NavLink> */}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
// AdminLogin.propTypes = {
//     setToken: PropTypes.func.isRequired
// }
export default AdminLogin