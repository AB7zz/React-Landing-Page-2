import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import { HeroContainer, VideoBg, HeroBg, HeroContent, HeroH1, HeroP,HeroBtnWrapper,ArrowForward,ArrowRight} from './HeroElements' ;
import {Button} from '../ButtonElements';
import img2 from '../../images/smart.png'
const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    } 

    return (
        <HeroContainer>
            <HeroBg>
            </HeroBg>
            <HeroContent>
                <img src={img2} style={{height:'auto',width: '80%', marginRight:'20px'}}/>
                <HeroH1>Introducing Nai365 Smart Optics Collection</HeroH1>
                <HeroBtnWrapper>
                   <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                       View Now {hover ? <ArrowForward/> : <ArrowRight/>}
                       </Button>  
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
