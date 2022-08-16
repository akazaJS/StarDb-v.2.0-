import React from "react";
import './menu.css'
import {Link} from "react-router-dom";

export default function Menu(){

    return(
        <div className='menu'>
            <button className='btn btn-danger'>
                <Link style={{color:'inherit',textDecoration:'none'}} to='/peoples' >Peoples</Link>
            </button>
            <button className='btn btn-danger'>
                <Link style={{color:'inherit',textDecoration:'none'}} to='/starShips' >StarShips</Link>
            </button>
            <button className='btn btn-danger'>
                <Link style={{color:'inherit',textDecoration:'none'}} to='/planets' >Planets</Link>
            </button>
        </div>
    )
}