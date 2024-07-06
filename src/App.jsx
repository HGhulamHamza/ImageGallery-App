import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [images,setImages]=useState([]);

  const apiKey="fhIdI3iazcd9VrbIss-mcsnMltAWzHel7l4FrwdzLY4";

  useEffect(()=> {
    fetch (`https://api.unsplash.com/photos/?client_id=${apiKey}`)
    .then(response => response.json())
    .then(data =>{
      setImages(data);
     // console.log(data);
    })
    .catch(error =>{
    console.log("Found an error!" ,error);
    })
   

  },[]);   // [] this is an empty array (dependency)
  return (
    <>
     <div className="main-container">
      <h1>Gallery Application</h1>




      <div className="images-container">
  {images.map(img=>{
  return (
    <div key={img.id}>
    <img src={img.urls.small}/>
    </div>
  )
  })}

      </div>
     </div>
    </>
  )
}

export default App
