import React from "react";
import "../../app.css"
import TeamCard from "./teamCard";
import data from "./data.js"

export default function TeamSection(){
    return(
        <section className="teamSection">
            <h1 className="teamHeading">Meet the Team</h1>
                <center>
                    <div className="aboutHR1 black"/>
                    <div className="aboutHR2 black"/>
                </center>
            <div className="teamCards">
                {data.map((e) => {
                    return <TeamCard props={e} />
                })}
            </div>
        </section>
    )
}