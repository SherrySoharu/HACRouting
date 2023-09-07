import { React, useState } from "react";
import space from "../assets/space.jpg";
import "../Styles/Home.css";

import { View, Text, StyleSheet, Image } from 'react';
import {styles,style} from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {
// const[change,SetChange]=useState("palku");

// const click=()=>{
//   if(change=="palku"){
//     SetChange("Avdhesh");
//   }
//   else{
//     SetChange("palku")
//   }
// }
// const[number,SetNumber]=useState(0);
// const count=()=>{
//   SetNumber(number+1);

// }
let navigate = useNavigate()
  if(!localStorage.getItem("name")) navigate("/");
  return (
    <div class="container">
    {/* <button onClick={count}>click</button> */}

    <h1 class="title">Welcome {localStorage.getItem("name")} to Space Exploration Hub</h1>
    {/* <Image
      source={require('./space.jpg')} */}
      <img class="space" src={space}/>
      {/* style={styles.image}
      resizeMode="cover"
    /> */}
    <h2 class="subtitle">Discover the wonders of the cosmos!</h2>
    <p class="description">
      At Space Exploration Hub, we're dedicated to bringing you the latest
      news, images, and information about space exploration and astronomy.
      From breathtaking nebulae to cutting-edge technologies used in space
      missions, our goal is to inspire and educate.
    </p>
  </div>
  );
};
export default Home;
