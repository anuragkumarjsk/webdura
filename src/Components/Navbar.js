import React from 'react'
import '../Style/navbar.css'
import {useSelector} from 'react-redux'
function Navbar() {
    const {r,s,t} = useSelector(state => state.nav)
    
    return (
        <div className="navbar">
            <h2 id="req">Requests{r>0? <span >{ r }</span>: <p></p>}</h2>
            <h2 id="ser">Services{s>0? <span >{ s }</span>: <p></p>}</h2>
            <h2 id="pay">Payments{t>0? <span >{ t }</span>: <p></p>}</h2>
        </div>
    )
}

export default Navbar
