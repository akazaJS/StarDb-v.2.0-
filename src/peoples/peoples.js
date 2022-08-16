import React, {useContext} from "react";
import './peoples.css'
import {PeopleContext} from "../peoplesContext/peopleContext";



export default function Peoples(){

    const peoples = useContext(PeopleContext)

    return(
        <div className='div'>
            <h2 style={{color:'whitesmoke'}}>Peoples</h2>
            <ul className="list-group">
                {peoples}
            </ul>
        </div>
    )
}