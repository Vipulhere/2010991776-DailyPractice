import React from "react";
import "./Home.css";
import ayush from "./Home.module.css"
const Home = () => {
    return(
        <div>
            <h2 style={{fontSize:"4rem"}}>This is a Home Componet</h2>
            <p className={ayush.mystyle}>Paragraph in Home Component</p>
        </div>
    )
}

export default Home;