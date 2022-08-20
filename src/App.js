import logo from './logo.svg';
import './App.css';
import React from "react"
import ProfilePhoto from "./Component/Profile/ProfilePhoto" 
import Adresse from "./Component/Profile/Adresse" 
import FullName from "./Component/Profile/FullName" 

function App() {
  return (
    <div className="App">
       <>
       <ProfilePhoto/>
       <FullName/>
       <Adresse/>             
       </>
    </div>
  );
}

export default App;
