import React, {useContext} from "react";
import {PlanetsContext} from "./planetsContext";


export default function Planets(){

    const planets = useContext(PlanetsContext)

    return(
        <div className='div'>
            <h2 style={{color:'whitesmoke'}}>Planets</h2>
            <ul className="list-group">
                {planets}
            </ul>
        </div>
    )
}