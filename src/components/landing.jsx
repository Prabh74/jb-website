import React from "react";
import "../app.css"

export default function Landing(){
    return(
        <section className="landingMainGradient">
            <img className="landingMainGradientImg" src="/Images/Gradient.png" />
            <img className="landingMainGradientImg opacity" src="/Images/Frame 1.png" />
                <section className="landingMain">
                    <h3 className="logo">Jawahar <br /> Bhawan</h3>
                    <div className="landingHero">
                        <section className="landingGrid">
                            <img src="/Images/facilities/diet.svg" className="landingGridItems left"/>
                            <img src="/Images/facilities/restaurant.svg" className="landingGridItems left"/>
                            <img src="/Images/facilities/tailor.svg" className="landingGridItems right"/>
                            <img src="/Images/facilities/snooker.svg" className="landingGridItems left"/>
                            <img src="/Images/facilities/logo.svg" className="landingGridItems center"/>
                            <img src="/Images/facilities/barber.svg" className="landingGridItems right"/>
                            <img src="/Images/facilities/gym.svg" className="landingGridItems left"/>
                            <img src="/Images/facilities/laundry.svg" className="landingGridItems right"/>
                            <img src="/Images/facilities/stationary.svg" className="landingGridItems right"/>
                        </section>
                        <section className="landingGridContent">
                            <h3 className="landingTitle">Welcome to Jawahar Bhawan</h3>
                            <hr />
                            <p className="landingDesc">In the memory of first prime minister of India, Pandit Jawahar Lal Nehru</p>
                        </section>
                    </div>

                </section>
        </section>
    )
} 