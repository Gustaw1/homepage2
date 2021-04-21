import React from 'react'
import { InfoContainer, InfoHeader } from './InfoElements'
import { SkillHeader, SkillList, SkillsContent } from './SkillsElements'

enum Theme {
    Dark,
    Light
};

const basicsSkills: string[] = ['PYTHON', 'PHP', 'PHOTOSHOP CS5'];
const intermediateSkills: string[] =
    [
        'C',
        'C++',
        'C#',
        'JAVA',
        'JAVASCRIPT',
        'TYPESCRIPT',
        'SQL',
        'HTML5',
        'CSS3',
        'MS Office',
        'MS Windows',
        'Linux',
    ];
const knowledge: string[] = ['GIT', 'NODE', 'REACT', 'JAVA SPRING', 'REST API'];

const SkillsSection = () => {

    const theme = (theme: Theme) => {
        return {
            fontColor: theme === Theme.Light ? '#FFF' : '#000'
        };
    };
    return (
        <>
            <InfoContainer id="skills" >
                <InfoHeader theme={theme(Theme.Light)}>Skills</InfoHeader>
                <SkillsContent>
                    <SkillHeader>Basics:</SkillHeader>
                    {basicsSkills.map((skill, i) => {
                        return <SkillList key={i}>{skill}</SkillList>
                    })}
                    <SkillHeader>intermediate:</SkillHeader>
                    {intermediateSkills.map((skill, i) => {
                        return <SkillList key={i}>{skill}</SkillList>
                    })}
                    <SkillHeader>Knowledge of:</SkillHeader>
                    {knowledge.map((skill, i) => {
                        return <SkillList key={i}>{skill}</SkillList>
                    })}
                </SkillsContent>
            </InfoContainer>
        </>
    )
}

export default SkillsSection
