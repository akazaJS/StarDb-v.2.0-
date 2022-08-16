import React from "react";
import {useEffect, useState} from "react";
import SwapiService from "../swapi/swapi";
import {Link} from "react-router-dom";



export const PeopleContext = React.createContext()
export const PeopleContextClick=React.createContext()



export const PeopleProvider = ({ children })=>{

    const [peopleList,setPeopleList]=useState([])

    const swapi = new SwapiService()

    useEffect(()=>{
        swapi.getAllPeople()
            .then(allPeople=>{setPeopleList(allPeople)})
    })

    const [peopleDetails,setPeopleDetails]=useState('')

    const click=(people)=>{
        setPeopleDetails(people)
    }

    const peoples = peopleList.map((people,id)=>{
        return (
            <li
                onClick={()=>{click(people)}}
                key={id}
                className="list-group-item li liBack "
            >
                <Link style={{color:'inherit',textDecoration:'none'}} to='/peoples/' >{ people.name }</Link>
            </li>
        )
    })

    return (
        <PeopleContextClick.Provider value={peopleDetails}>
            <PeopleContext.Provider value={peoples} >
                { children }
            </PeopleContext.Provider>
        </PeopleContextClick.Provider>
    )
}
