import './Login.css'
import React from "react";

import { Link } from 'react-router-dom'

export default _ =>
    <div className="Login">
        <div>
            <h1>Login</h1>
            <form>
                <div className="form-group">
                <input type="email" className="first-form" placeholder="Enter an email" />
                </div>
                <div className="form-group">
                <input type="password" placeholder="Password" />
                </div>
                <button type="submit" class="btn">Login</button>
            </form>
            <Link to="/Login">Forgot yout password?</Link>
        </div>
    <hr />
    <div className="need-acount">
      <p>Need an acount?</p>
      <Link to="/SingUp" className='btn'>Sing Up</Link> 
    </div>
    </div>