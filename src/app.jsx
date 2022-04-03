import React from "react";
import About from "./components/about";
import Facilities from "./components/facilities/facilities";
import Landing from "./components/landing";
import OtherFacilities from "./components/otherFacilities";

export default function App(){
    return(
        <React.Fragment>
            <Landing />
            <About />
            <Facilities />
            <OtherFacilities />
        </React.Fragment>
    )
}