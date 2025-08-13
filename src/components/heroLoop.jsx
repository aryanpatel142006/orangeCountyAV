import React from "react";

const HeroVideoLoop = () => {
    return(
        <div>
            
            <div className="hero-video-container">
                <video className="hero-video" src="/src/assets/home-hero-video-loop.mp4" poster="/src/assets/home-hero-video-loop-thumbnail.jpg" muted loop autoPlay></video>
                {/* ::after */}
                {/* <div className="hp-section hp-landing hp-overlay"></div> */}
                {/* <div className="hp-section"></div> */}
                {/* <div className="hp-section"></div> */}
            </div>
        </div>
    )
}

export  default HeroVideoLoop