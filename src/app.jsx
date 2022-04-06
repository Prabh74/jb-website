import React, { useEffect, useState } from "react";
import About from "./components/about";
import Facilities from "./components/facilities/facilities";
import Footer from "./components/footer";
import Gallery from "./components/gallery";
import Landing from "./components/landing";
import OtherFacilities from "./components/otherFacilities";
import TeamSection from "./components/team/teamSection";

export default function App(){
    const [pageLoaded, setPageloaded] = useState(false);

    useEffect(() =>{
        setPageloaded(true)
    }, [])
    return(
        pageLoaded && (
        <React.Fragment>
            <Landing />
            <About />
            <Facilities />
            <OtherFacilities />
            <TeamSection />
            <Gallery />
            <Footer />
        </React.Fragment>)
    )
}