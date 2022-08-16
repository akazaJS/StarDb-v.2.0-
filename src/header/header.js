import React from "react";
import {Link} from "react-router-dom";




export default function Header() {


    return(
        <h1
            style={{color:'whitesmoke'}}>
          <Link
              style={{color:'inherit',textDecoration:'none'}}
              to='/'>Star DB
          </Link>
        </h1>
    )
}