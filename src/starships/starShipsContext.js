import React from "react";
import {useEffect, useState} from "react";
import SwapiService from "../swapi/swapi";
import {Link,useParams} from "react-router-dom";


export const StarShipsContext = React.createContext()
export const StarShipsContextClick=React.createContext()

export const StarShipsProvider = ({ children })=>{

     const [starShipsList,setStarShipsList]=useState([])

    const swapi = new SwapiService()

    useEffect(()=>{
        swapi.getAllStarships()
            .then(allStarShips=>{setStarShipsList(allStarShips)})
    })

    const [starShipsDetails,setStarShipsDetails]=useState('')

    const click=(starShips)=>{
        setStarShipsDetails(starShips)
    }


    const starShips = starShipsList.map((starShips,id)=>{

        return (
            <li
                onClick={()=>{click(starShips)}}
                key={id}
                className="list-group-item li liBack "
            >
                <Link
                      style={{color:'inherit',textDecoration:'none'}}
                      to={`/starShips/${id}`} >{ starShips.name }</Link>
            </li>
        )
    })

    return (
        <StarShipsContextClick.Provider value={starShipsDetails}>
            <StarShipsContext.Provider value={starShips} >
                { children }
            </StarShipsContext.Provider>
        </StarShipsContextClick.Provider>
    )
}
