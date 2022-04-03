import React, { useEffect, useState } from "react";
import About from "./components/about";
import Facilities from "./components/facilities/facilities";
import Landing from "./components/landing";
import OtherFacilities from "./components/otherFacilities";

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
        </React.Fragment>)
    )
}