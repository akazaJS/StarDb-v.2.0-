import React from "react";
import Header from "../header/header";
import Menu from "../menu/menu";
import './app.css'
import RandomPlanet from "../rabdom planet/random-planet";
import Peoples from "../peoples/peoples";
import PeopleDetails from "../peoples/peopleDetails";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Planets from "../planets/planets";
import PlanetsDetails from "../planets/planetsDetails";
import StarShips from "../starships/starShips";
import StarShipsDetails from "../starships/starShipsDetails";
import {ItemsProvider} from "../hocComponent";


export default function App(){

    return (
        <Router>
        <div
            style={{width:'100%',minHeight:'100vh',backgroundSize:'cover'}}
            className='background'>
            <ItemsProvider>
                <div className='topAndRand'>
                    <div className='top'>
                        <Header/>
                        <Menu/>
                    </div>
                    <RandomPlanet/>
                </div>
                    <div className='partAndDetails'>
                                    <Routes>
                                    <Route path='/' element={<h1 style={{color:'whitesmoke'}}>Welcome to STAR DB!!!</h1>}/>
                                    <Route path='/peoples' element={ <Peoples/> }/>
                                    <Route path='/peoples/details' element={<PeopleDetails/>}/>
                                    <Route path='/planets' element={<Planets/>}/>
                                    <Route path='/planets/details' element={<PlanetsDetails/>}/>
                                    <Route path='/starShips/*'  element={<StarShips/>}/>
                                    <Route path='/starShips/:detailsId' element={<StarShipsDetails/>}/>
                                    </Routes>
                    </div>
            </ItemsProvider>
        </div>
        </Router>
    )
}