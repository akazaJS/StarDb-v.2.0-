import React, {useContext} from "react";
import './peopleDetails.css'
import { PeopleContextClick} from "../peoplesContext/peopleContext";


export default function PeopleDetails(){

    const peopleDetails = useContext(PeopleContextClick)

    return(
        <div className='div2'>
            <h2 style={{color:'whitesmoke'}}>{peopleDetails.name}</h2>
            <ul className="list-group">
                <li className="list-group-item liBack ">Height:{peopleDetails.height}</li>
                <li className="list-group-item liBack">Mass:{peopleDetails.mass}</li>
                <li className="list-group-item liBack">Hair color:{peopleDetails.hair_color}</li>
                <li className="list-group-item liBack">Skin color:{peopleDetails.skin_color}</li>
            </ul>
        </div>
    )
}
