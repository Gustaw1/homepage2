import React from 'react';

import { EducationContent, EducationHeader1, EducationHeader2, EducationHeader3, EducationI, EducationLeft, EducationP, EducationRight } from './EducationElements';
import { InfoContainer, InfoHeader } from './InfoElements';

enum Theme {
    Dark,
    Light
};

const EducationSection = () => {

    const theme = (theme: Theme) => {
        return {
            fontColor: theme === Theme.Light ? '#FFF' : '#000'
        };
    };
    return (
        <>
            <InfoContainer id="education">
                <InfoHeader theme={theme(Theme.Light)}>Education</InfoHeader>
                <EducationContent theme={theme(Theme.Dark)}>
                    <EducationLeft>
                        <EducationI className="fa fa-graduation-cap">
                            <EducationP>2017 – now</EducationP>
                        </EducationI>
                    </EducationLeft>
                    <EducationRight>
                        <EducationHeader1>Gdańsk University of Technology</EducationHeader1>
                        <EducationHeader2>Faculty of Electronics, Telecommunications and Informatics</EducationHeader2>
                        <EducationHeader3>BSc in Informatics</EducationHeader3>
                    </EducationRight>
                </EducationContent>

                <EducationContent theme={theme(Theme.Dark)}>
                    <EducationLeft>
                        <EducationI className="fa fa-graduation-cap">
                            <EducationP>2013 – 2015</EducationP>
                        </EducationI>
                    </EducationLeft>
                    <EducationRight>
                        <EducationHeader1>Gdańsk University of Technology</EducationHeader1>
                        <EducationHeader2>Faculty of Civil and Environmental Engineering</EducationHeader2>
                        <EducationHeader3>MSc in Civil Engineering</EducationHeader3>
                    </EducationRight>
                </EducationContent>

                <EducationContent theme={theme(Theme.Dark)}>
                    <EducationLeft>
                        <EducationI className="fa fa-graduation-cap">
                            <EducationP>2008 – 2013</EducationP>
                        </EducationI>
                    </EducationLeft>
                    <EducationRight>
                        <EducationHeader1>Gdańsk University of Technology</EducationHeader1>
                        <EducationHeader2>Faculty of Civil and Environmental Engineering</EducationHeader2>
                        <EducationHeader3>BSc in Civil Engineering</EducationHeader3>
                    </EducationRight>
                </EducationContent>

                <EducationContent theme={theme(Theme.Dark)}>
                    <EducationLeft>
                        <EducationI className="fa fa-graduation-cap">
                            <EducationP>2008 – 2013</EducationP>
                        </EducationI>
                    </EducationLeft>
                    <EducationRight>
                        <EducationHeader1>XV High School in Gdańsk</EducationHeader1>
                        <EducationHeader2>United Europe High School</EducationHeader2>
                        <EducationHeader3>Profile: mathematics, physics, informatics</EducationHeader3>
                    </EducationRight>
                </EducationContent>
            </InfoContainer>
        </>
    )
}

export default EducationSection
