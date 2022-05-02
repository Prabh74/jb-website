import React from "react";
import "../app.css";

export default function Landing (){
    return(
        <section className="landingMainContainer">
                <img className="logo" src="/Images/logo.png" />
            <div className="landingContent">
                <h1 className="landingHead">Welcome to Jawahar Bhawan</h1>
                <p className="landingBody">In the memory of first prime minister of India, Pandit Jawahar Lal Nehru</p>
            </div>
        </section>
    )
}