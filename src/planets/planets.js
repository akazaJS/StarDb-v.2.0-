import React, {useContext} from "react";
import {ItemsContext} from "../hocComponent";


export default function Planets(){

    const planets = useContext(ItemsContext)

    return(
        <div className='div'>
            <h2 style={{color:'whitesmoke'}}>Planets</h2>
            <ul className="list-group">
                {planets}
            </ul>
        </div>
    )
}