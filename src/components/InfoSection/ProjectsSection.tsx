import React from 'react'
import { ProjectsContent, InfoContainerProjects, ProjectsLeft, ProjectsRight, ProjectsHeader1, ProjectsHeader2, ProjectsHeader3, ProjectsList } from './ProjectsElements';
import { InfoHeader } from './InfoElements'
import reversi from '../../images/reversi.png';

enum Theme {
    Dark,
    Light
};

const reversiTechnics = ['HTML', 'CSS', 'JAVASCRIPT'];

const ProjectsSection = () => {

    const theme = (theme: Theme) => {
        return {
            fontColor: theme === Theme.Light ? '#FFF' : '#000'
        };
    };

    return (
        <>
            <InfoContainerProjects id="projects">
                <InfoHeader theme={theme(Theme.Dark)}>Projects</InfoHeader>
                <ProjectsContent>
                    <ProjectsLeft>
                        <img src={reversi} alt="reversi screen" height="300" />
                    </ProjectsLeft>
                    <ProjectsRight>
                        <ProjectsHeader1>Reversi / Otello</ProjectsHeader1>
                        <ProjectsHeader2>Browser game</ProjectsHeader2>
                        <ProjectsHeader3>Reversi game for two players in one browser. No artificial intelligence Yet.</ProjectsHeader3>
                        {reversiTechnics.map((tech, i) => {
                            return <ProjectsList key={i}>{tech}</ProjectsList>
                        })}
                    </ProjectsRight>
                </ProjectsContent>
            </InfoContainerProjects>
        </>
    )
};

export default ProjectsSection;
