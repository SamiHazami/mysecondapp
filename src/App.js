import logo from './logo.svg';
import './App.css';
import React from "react";
import  ProfilePhoto from "./Component/Profile/ProfilePhoto" 
import Adresse from "./Component/Profile/Adresse";
import FullName from "./Component/Profile/FullName" 

const  App =()=>(
  <div>
    <div>
    <FullName/>  
    <Adresse/>
         </div>
    <div> 
     <ProfilePhoto/>                
    </div>
  </div>
  );
export default App

