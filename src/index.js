import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/app";


function Ind() {

   return (
         <App  style={{width:'100%',minHeight:'100%'}} />
   )

}

const conteiner=document.querySelector('#root');
const root = ReactDOM.createRoot(conteiner);
root.render(<Ind/>)
