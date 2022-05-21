import './SingUp.css'
import React, { useState } from "react";

export default _ => {
    const [email, setEmail] = useState("")
    const [emailConfirm, setEmailConfirm] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")

    return(
        <div className="SingUp">
            <div>
                <h1>Sing Up</h1>
                <form>
                    <div className="form-group">
                        <input type="email" className="first-form" 
                        placeholder="Enter an email"
                        onChange={e => setEmail(e.target.value)}
                        value={email} />
                    </div>

                    <div className="form-group">
                        <input type="email" 
                        placeholder="Enter an email"
                        onChange={e => setEmailConfirm(e.target.value)}
                        value={emailConfirm} />
                    </div>

                    <div className="form-group">
                        <input type="password" 
                        placeholder="Password" 
                        onChange={e => setPassword(e.target.value)}
                        value={password} />
                    </div>

                    <div className="form-group">
                        <input type="password" 
                        placeholder="Password" 
                        onChange={e => setPasswordConfirm(e.target.value)}
                        value={passwordConfirm} />
                    </div>

                    <button type="submit" className="btn">Sing Up</button>
                </form>
            </div>
        </div>
    )
}