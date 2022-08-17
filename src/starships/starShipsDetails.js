import React, {useContext} from "react";
import {ItemsContextClick} from "../hocComponent";


export default function StarShipsDetails(){

    const starShipsDetails = useContext(ItemsContextClick)

    return(
        <div
            className='div2'>
            <h2 style={{color:'whitesmoke'}}>{starShipsDetails.name}</h2>
            <ul className="list-group">
                <li className="list-group-item liBack">Length : {starShipsDetails.length}</li>
                <li className="list-group-item liBack">Model : {starShipsDetails.model}</li>
                <li className="list-group-item liBack">Manufacturer : {starShipsDetails.manufacturer}</li>
                <li className="list-group-item liBack">Cost : { starShipsDetails.cost_in_credits}</li>
            </ul>
        </div>
    )
}
