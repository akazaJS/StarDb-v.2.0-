import React from "react";
import {useEffect, useState} from "react";
import SwapiService from "./swapi/swapi";
import {Link} from "react-router-dom";


export const ItemsContext = React.createContext()
export const ItemsContextClick=React.createContext()
export const ChooseContext = React.createContext()


export const ItemsProvider = ({ children })=>{

    const [url,setUrl]=useState('people')
    const [ItemsList,setItemsList]=useState([])

    const swapi = new SwapiService()

    useEffect(()=>{
        swapi.getItems(url)
            .then(allItems=>{setItemsList(allItems)})
    })

    const [ItemsDetails,setItemsDetails]=useState('')

    const click=(Items)=>{
        setItemsDetails(Items)
    }

    const Items = ItemsList.map((Items,id)=>{

        return (
            <li
                onClick={()=>{click(Items)}}
                key={id}
                className="list-group-item li liBack "
            >
                <Link
                    style={{color:'inherit',textDecoration:'none'}}
                    to={`/starShips/${id}`} >{ Items.name }</Link>
            </li>
        )
    })

    return (
        <ChooseContext.Provider  >
            <ItemsContextClick.Provider value={ItemsDetails}>
                <ItemsContext.Provider value={Items} >
                    { children }
                </ItemsContext.Provider>
            </ItemsContextClick.Provider>
        </ChooseContext.Provider>
    )
}
