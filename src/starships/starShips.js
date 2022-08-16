import React, {useContext} from "react";
import {StarShipsContext} from "./starShipsContext";



export default function StarShips(){

    const starShips = useContext(StarShipsContext)

    return(
        <div className='div'>
            <h2 style={{color:'whitesmoke'}}>StarShips</h2>
            <ul className="list-group">
                {starShips}
            </ul>
        </div>
    )
}