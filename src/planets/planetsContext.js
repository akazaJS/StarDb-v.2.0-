import React from "react";
import {useEffect, useState} from "react";
import SwapiService from "../swapi/swapi";
import {Link} from "react-router-dom";

export const PlanetsContext = React.createContext()
export const PlanetsContextClick=React.createContext()

export const PlanetsProvider = ({ children })=>{

    const [planetsList,setPlanetsList]=useState([])

    const swapi = new SwapiService()

    useEffect(()=>{
        swapi.getPlanets()
            .then(allPlanets=>{setPlanetsList(allPlanets)})
    })

    const [planetsDetails,setPlanetsDetails]=useState('')

    const click=(planet)=>{
        setPlanetsDetails(planet)
    }

    const planets = planetsList.map((planet,id)=>{
        return (
            <li
                onClick={()=>{click(planet)}}
                key={id}
                className="list-group-item li liBack "
            >
                <Link style={{color:'inherit',textDecoration:'none'}} to='/planets/details' >{ planet.name }</Link>
            </li>
        )
    })

    return (
        <PlanetsContextClick.Provider value={planetsDetails}>
            <PlanetsContext.Provider value={planets} >
                { children }
            </PlanetsContext.Provider>
        </PlanetsContextClick.Provider>
    )
}
