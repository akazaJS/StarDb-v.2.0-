import React, {useContext, useState} from "react";
import './menu.css'
import {Link} from "react-router-dom";




export default function Menu(){

    const [value,setValue] = useState('')

    console.log(value)

    return(
        <div className='menu'>
            <button
                onClick={(e)=>setValue(e.currentTarget.value)}
                value={'people'}
                className='btn btn-danger'
            >
                <Link style={{color:'inherit',textDecoration:'none'}} to='/peoples' >Peoples</Link>
            </button>
            <button
                onClick={(e)=>setValue(e.currentTarget.value)}
                value={'starships'}
                className='btn btn-danger'
            >
                <Link style={{color:'inherit',textDecoration:'none'}} to='/starShips' >StarShips</Link>
            </button>
            <button
                onClick={(e)=>setValue(e.currentTarget.value)}
                value={'planets'}
                className='btn btn-danger'
            >
                <Link style={{color:'inherit',textDecoration:'none'}} to='/planets' >Planets</Link>
            </button>
        </div>
    )
}