import React, {useContext} from "react";
import './peoples.css'
import {ItemsContext} from "../hocComponent";



export default function Peoples(){

    const peoples = useContext(ItemsContext)

    return(
        <div className='div'>
            <h2 style={{color:'whitesmoke'}}>Peoples</h2>
            <ul className="list-group">
                {peoples}
            </ul>
        </div>
    )
}