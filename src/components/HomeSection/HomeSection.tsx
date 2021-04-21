import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import SRC from '../../images/myphoto-square.jpg';
import { HomeContainer, HomeBackground, VideoBackground, HomeContent, HomeP, HomeImg, ResumeContainer, Resume } from './HomeElements';
import ScrollReveal from 'scrollreveal';
import { ArrowForward, ArrowRight } from '@material-ui/icons';

const HomeSection = () => {

    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    };

    return (
        <>
            <HomeContainer id="home">
                <HomeBackground>
                    <VideoBackground autoPlay loop muted src={Video} />
                </HomeBackground>
                <HomeContent>
                    <HomeImg src={SRC}></HomeImg>
                    <HomeP>Maciej Kubale</HomeP>
                    <HomeP>Software Developer</HomeP>
                    <ResumeContainer>
                        <Resume to=''
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                        >Download Resume {hover ? <ArrowForward style={{ fontSize: 12, verticalAlign: "middle" }} /> : <ArrowRight style={{ fontSize: 12, verticalAlign: "middle" }} />}
                        </Resume>
                    </ResumeContainer>
                </HomeContent>
            </HomeContainer>
        </>
    )
};

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true,
});

sr.reveal('p', { delay: 500 });

export default HomeSection;
