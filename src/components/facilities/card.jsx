import React from "react"
import "../../app.css"

export default function Card(props){
    return(
        <section className="facilitiesCard" style={{flexDirection: props.sent.flexDirection}}>
            <div className="cardContent">
                <img className="cardVector" src={"/Images/card/" + props.sent.vector} />
                <div className="divider" />
                <h2 className="cardTitle">{props.sent.name}</h2>
                <p className="cardDesc">{props.sent.description}</p>
            </div>
            <img className="cardImg" src={"/Images/card/" + props.sent.img} />
        </section>
    )
}