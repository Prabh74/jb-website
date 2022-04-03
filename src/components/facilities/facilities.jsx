import React from "react";
import Card from "./card.jsx";
import data from "./data.js"
import "../../app.css"

export default function Facilities(){
    return(
        <React.Fragment>
            <section className="facilitiesContainer">
            {data.map(e => {
                return <Card sent = {e}/>
            })}
            </section>
        </React.Fragment>
    )
}