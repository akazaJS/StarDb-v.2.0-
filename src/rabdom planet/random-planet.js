import React, {useEffect, useState} from "react";
import './random-planet.css'
import SwapiService from "../swapi/swapi";




export default function RandomPlanet(){

    let id=Math.floor(Math.random()*(20-2))+2;

    const swapi = new SwapiService()

    const [planet,setPlanet] = useState({})
    const [planetName,setPlanetName]=useState('name')
    const [population,setPopulation]=useState('population')
    const [rotate,setRotate]=useState('rotate')
    const [diameter,setDiameter]=useState('diameter')


    useEffect(()=>{
        const timeout = setTimeout(()=>{
            swapi.getPlanet(id)
                 .then(planet=>setPlanet(planet))
        },4000)
        setPlanetName(planet.name)
        setPopulation(planet.population)
        setRotate(planet.rotation_period)
        setDiameter(planet.diameter)
        return ()=>clearTimeout(timeout)
    },[planet])


    return (
        <div className='randPl'>
            <div className='img'>
                <img
                    alt=''
                    className='img'
                    src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                />
            </div>
            <div>
                <ul style={{listStyle:'none',color:'whitesmoke'}}>
                    <li>
                        <h1>
                            {planetName}
                        </h1>
                    </li>
                    <li>
                        <span>Population:{population}</span>

                    </li>
                    <li>
                        <span>Rotation period:{rotate}</span>

                    </li>
                    <li>
                        <span>Diameter:{diameter}</span>

                    </li>
                </ul>
            </div>
        </div>
    )
}