import './Login.css'
import React, { useState } from "react";

import { Link } from 'react-router-dom'

export default _ => {
    const [email, useEmail] = useState("")
    const [password, usePassword] = useState("")

    return(
        <div className="Login">
            <div>
                <h1>Login</h1>
                <form>
                    <div className="form-group">
                        <input type="email" className="first-form" 
                        placeholder="Enter an email"
                        onChange={e => useEmail(e.target.value)}/>
                    </div>

                    <div className="form-group">
                        <input type="password" 
                        placeholder="Password" 
                        onChange={e => usePassword(e.target.value)} />
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
    )
}