import React from "react";

export default function Gallery(){

    const scrollLeft = () => {
       document.getElementById("scrollDiv").scrollLeft -= 300;
    }
    
    const scrollRight = () => {
        document.getElementById("scrollDiv").scrollLeft += 300;
    }

    return(
        <section className="galleryMain">
            <h1>About Us</h1>
            <center>
                <div className="aboutHR1 black"/>
                <div className="aboutHR2 black"/>
            </center>

            <div className="galleryImages">
                <button className="scrollButtons leftBtn" onClick={scrollLeft}><img src="/Images/leftarrow.svg"/></button>
                    <div id="scrollDiv">
                        <img className="galleryImage" src="/Images/gallery/aboutBG.png"/>
                        <img className="galleryImage" src="/Images/gallery/aboutBG.png"/>
                        <img className="galleryImage" src="/Images/gallery/aboutBG.png"/>
                        <img className="galleryImage" src="/Images/gallery/aboutBG.png"/>
                        <img className="galleryImage" src="/Images/gallery/aboutBG.png"/>
                        <img className="galleryImage" src="/Images/gallery/aboutBG.png"/>
                        <img className="galleryImage" src="/Images/gallery/aboutBG.png"/>
                        <img className="galleryImage" src="/Images/gallery/aboutBG.png"/>
                    </div>
                <button className="scrollButtons rightBtn" onClick={scrollRight}><img src="/Images/rightarrow.svg"/></button>
                
            </div>
        </section>
    )
}