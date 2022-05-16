import './Home.css'
import React, { useState } from "react";

import htmlLogo from '../img/html.png'
import cssLogo from '../img/css.png'
import jsLogo from '../img/js.png'
import reactLogo from '../img/react.png'
import skillText from './data/skillText'
import consultoriaTecnologicaLogo from '../img/consultoriaTecnologica.png'

export default _ => {
    const [text, useText] = useState(skillText.initial)

    return(
        <div className="Home">
            <div>
                <img src={consultoriaTecnologicaLogo}/>
            </div>
            <div className='skills'>
                <div className="logo">
                    <img 
                    onClick={_ => useText(skillText.html)} 
                    src={htmlLogo}/>

                    <img 
                    onClick={_ => useText(skillText.css)} 
                    src={cssLogo}/>

                    <img 
                    onClick={_ => useText(skillText.js)}
                    src={jsLogo}/>

                    <img
                    onClick={_ => useText(skillText.react)}
                    src={reactLogo}/>
                </div>
                <div className='skillText'>
                    <h2><span className='yellow'>{text.title}</span></h2>
                    <p>{text.text}</p>
                </div>
            </div>
        </div>
    )
}