import React, {useContext} from "react";
import { ItemsContextClick} from "../hocComponent";



export default function PlanetsDetails(){

    const planetsDetails = useContext(ItemsContextClick)

    return(
        <div className='div2'>
            <h2 style={{color:'whitesmoke'}}>{planetsDetails.name}</h2>
            <ul className="list-group">
                <li className="list-group-item liBack">Rotation Period : {planetsDetails.rotation_period}</li>
                <li className="list-group-item liBack">Orbital Period : {planetsDetails.orbital_period}</li>
                <li className="list-group-item liBack">Diameter : {planetsDetails.diameter}</li>
                <li className="list-group-item liBack">Climate : { planetsDetails.climate}</li>
            </ul>
        </div>
    )
}
