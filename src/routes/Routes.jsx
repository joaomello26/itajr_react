import { Routes, Route } from 'react-router-dom'

import Home from '../views/Home'
import Login from '../views/Login'
import About from '../views/About'
import SingUp from '../views/SingUp'

export default _ => (
    <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SingUp" element={<SingUp />} />
        <Route path="/" element={<Home />} />
    </Routes>
)
