import './SingUp.css'
import React from "react";

import { Link } from 'react-router-dom'

export default _ =>
    <div className="SingUp">
        <div>
            <h1>Sing Up</h1>
            <form>
                <div class="form-group">
                    <input type="name" className="first-form" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                    <input type="email" placeholder="Enter an email" />
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Create a password" />
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Confirm password" />
                </div>
                <button type="submit" className="btn">Sing Up</button>
            </form>
        </div>
    </div>