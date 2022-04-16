import React from "react";

export default function Gallery(){

    const scrollLeft = () => {
       document.getElementById("scrollDiv").scrollLeft -= 300;
    }
    
    const scrollRight = () => {
        document.getElementById("scrollDiv").scrollLeft += 300;
    }

    return(
        <section className="galleryMain" id="Gallery">
            <h1>Gallery</h1>
            <center>
                <div className="aboutHR1 black"/>
                <div className="aboutHR2 black"/>
            </center>

            <div className="galleryImages">
                <button className="scrollButtons leftBtn" onClick={scrollLeft}><img src="/Images/leftarrow.svg"/></button>
                    <div id="scrollDiv">
                        <img className="galleryImage" src="/Images/gallery/1.JPG"/>
                        <img className="galleryImage" src="/Images/gallery/2.JPG"/>
                        <img className="galleryImage" src="/Images/gallery/3.JPG"/>
                        <img className="galleryImage" src="/Images/gallery/4.JPG"/>
                        <img className="galleryImage" src="/Images/gallery/5.JPG"/>
                        <img className="galleryImage" src="/Images/gallery/6.JPG"/>
                        <img className="galleryImage" src="/Images/gallery/7.JPG"/>
                        <img className="galleryImage" src="/Images/gallery/8.JPG"/>
                        <img className="galleryImage" src="/Images/gallery/9.JPG"/>
                        <img className="galleryImage" src="/Images/gallery/10.JPG"/>
                        <img className="galleryImage" src="/Images/gallery/11.JPG"/>
                    </div>
                <button className="scrollButtons rightBtn" onClick={scrollRight}><img src="/Images/rightarrow.svg"/></button>
                
            </div>
        </section>
    )
}