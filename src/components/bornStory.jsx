import React from "react";
import TextType from "../elements/TextType"
import ScrollReveal from '../elements/ScrollReveal';

const BornStory = () => {
    // const privacy_icon = () => {
    //     return(
    //         <div>
    //             <p>"Privacy"</p>
    //         <a href="https://www.flaticon.com/free-icons/privacy" title="privacy icons">Privacy icons created by Anggara - Flaticon</a>
    //         </div>
    //     )
    // }
    return(
        <div className="born-story-container">
             <div className="hero-video-container-top">
                <div className="hv-main-text">
                Imagine More
                <br />
         
                <TextType 
                text={["Privacy", "Innovation","Comfort","Flexibility", "Simplicity", "Security", "Control", "Efficiency"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                />
                </div>
            </div>
            {/* <div className="hero-video-container-top"></div> */}
            
            <div className='story'>
                <span className='story-text'>
                <b id="av_was_born">AV WAS BORN</b> from the belief that technology should elevate your life. In the heart of <b>Orange County</b>, we combined our expertise in home theaters, smart home automation, security systems, and IT services to create seamless, immersive experiences. Our mission? To bring cutting-edge audio, video, and smart tech into your home and business, effortlessly enhancing your world.

                {/* <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={5}
                blurStrength={10}
                >
                AV WAS BORN from the belief that technology should elevate your life. In the heart of Orange County, we combined our expertise in home theaters, smart home automation, security systems, and IT services to create seamless, immersive experiences. Our mission? To bring cutting-edge audio, video, and smart tech into your home and business, effortlessly enhancing your world.
                </ScrollReveal> */}
        <br />
                </span>
                <span>
                <span className='quote'>
                    <span className='quote-text'>
                        <ScrollReveal
                        baseOpacity={0}
                        enableBlur={true}
                        baseRotation={5}
                        blurStrength={10}
                        >
                        "At AV, we’re not just installing systems; we’re designing the future of living — where every device works in perfect harmony to make your life simpler, safer, and more exciting."
                        </ScrollReveal>


                        
                        {/* "At AV, we’re not just installing systems; we’re designing the future of living — where every device works in perfect harmony to make your life simpler, safer, and more exciting." */}
                         </span>
                    <span className='quote-author'>- HINESH PATEL</span>
                </span>
                </span>
            </div>
        </div>
    )
}

    export default BornStory




