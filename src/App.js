import React from "react";
import './App.css';
import Profil from './profile/Profil'
import Image from './Image.png'
function App() {
  const handleAlert = (fullName) => {
    alert(`this is ${fullName}`);
  };
  return (
    <div className="App">
       <h1>React props Check Point</h1>
      <Profil
      profilImage = {Image}
       fullName = "Houssem Eddine Hammmadi" 
       bio = "Hey , I am Houssem and currently I'am learning to code" 
       profession="Student"
       handleAlert={handleAlert}
       />
    </div>
  );
}

export default App;
