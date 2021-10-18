import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className="container-fluid">
            <div className="login-container">
                <form action="">
                    <h2 className="text-black fw-bold">Login</h2>
                    <label className="text-black fw-bold mx-3">Username : </label>
                    <input type="text" placeholder="Enter Username" name="username" required />
                    <br />
                    <label className="text-black fw-bold mx-3">Password : </label>
                    <input type="password" placeholder="Enter Password" name="password" autoComplete="on" required />
                    <br />
                    <div className="mt-4 ms-5">
                        <button className="btn btn-danger ps-3 mx-4 rounded" type="submit">Login</button>
                        <input type="checkbox" />
                        <span className="ms-2 text-black fw-bolder">Remember me</span>
                        <button className="btn btn-danger px-3 mx-4 rounded" type="button"> Cancel</button>
                        <span className="ms-2 text-black fw-bolder">Forgot <Link to="#"> password? </Link></span>
                        <br />
                        <div className="d-flex justify-content-center mt-3">
                            <button className="btn btn-primary" onClick={signInUsingGoogle}>Google Sign In</button>
                        </div>

                        {/* <br />
                        <Link to="/register">New User?</Link> */}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;