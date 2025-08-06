import React from "react";

const HeroVideoLoop = () => {
    return(
        <div className="hero-video-container">
            <video className="hero-video" src="/src/assets/home-hero-video-loop.mp4" poster="/src/assets/home-hero-video-loop-thumbnail.jpg" muted loop autoPlay></video>
        </div>
    )
}

export  default HeroVideoLoop