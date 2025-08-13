import React from "react";
// import "../elements/CircularGallery.css"
// import CircularGallery from "../elements/CircularGallery";
// import ScrollStack, { ScrollStackItem } from "../elements/ScrollStack";
import ScrollStack, { ScrollStackItem } from "/src/elements/ScrollStack.jsx";
import './ServiceTypes.css';  

const ServiceTypes = () => {
    return (
    
           
            <ScrollStack>
            <ScrollStackItem itemClassName="card1" id="1">
                <h2>Smart Home Technology</h2>
                {/* <p>This is the first card in the stack</p> */}
            </ScrollStackItem>
            <ScrollStackItem itemClassName="card2" id="2">
                <h2>Wi-fi / Networking</h2>
                {/* <p>This is the second card in the stack</p> */}
            </ScrollStackItem>
            <ScrollStackItem itemClassName="card3" id="3">
                <h2>Multi-Room Music</h2>
                {/* <p>This is the third card in the stack</p> */}
            </ScrollStackItem>
            <ScrollStackItem itemClassName="card4" id="4">
                <h2>Home Theater</h2>
                {/* <p>This is the second card in the stack</p> */}
            </ScrollStackItem>
            <ScrollStackItem itemClassName="card5" id="5">
                <h2>Lighting Control</h2>
                {/* <p>This is the second card in the stack</p> */}
            </ScrollStackItem>
            <ScrollStackItem itemClassName="card6">
                <h2>Surveillance</h2>
                {/* <p>This is the second card in the stack</p> */}
            </ScrollStackItem>
            </ScrollStack>
            
    );
}

export default ServiceTypes;