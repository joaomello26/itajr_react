import './App.css'
import React from 'react'

import { BrowserRouter } from 'react-router-dom'

import Navbar from './components/Navbar'
import Content from './components/Content'

export default _ =>
    <div className='App'>
        <BrowserRouter>
            <Navbar />
            <Content />
        </BrowserRouter>
    </div>