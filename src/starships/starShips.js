import React, {useContext} from "react";
import {ItemsContext} from "../hocComponent";



export default function StarShips(){

    const starShips = useContext(ItemsContext)

    return(
        <div className='div'>
            <h2 style={{color:'whitesmoke'}}>StarShips</h2>
            <ul className="list-group">
                {starShips}
            </ul>
        </div>
    )
}