import './SingUp.css'
import React, { useState } from "react";

export default _ => {
    const [email, useEmail] = useState("")
    const [emailConfirm, useEmailConfirm] = useState("")
    const [password, usePassword] = useState("")
    const [passwordConfirm, usePasswordConfirm] = useState("")

    return(
        <div className="SingUp">
            <div>
                <h1>Sing Up</h1>
                <form>
                    <div className="form-group">
                        <input type="email" className="first-form" 
                        placeholder="Enter an email"
                        onChange={e => useEmail(e.target.value)}/>
                    </div>

                    <div className="form-group">
                        <input type="email" className="first-form" 
                        placeholder="Enter an email"
                        onChange={e => useEmailConfirm(e.target.value)}/>
                    </div>

                    <div className="form-group">
                        <input type="password" 
                        placeholder="Password" 
                        onChange={e => usePassword(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <input type="password" 
                        placeholder="Password" 
                        onChange={e => usePasswordConfirm(e.target.value)} />
                    </div>

                    <button type="submit" className="btn">Sing Up</button>
                </form>
            </div>
        </div>
    )
}