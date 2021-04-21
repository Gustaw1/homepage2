import React from 'react';

import styles from '../../styles/timeline.module.css'
import { ExperienceContainer, Experienceli } from './ExperienceElements';
import { InfoHeader } from './InfoElements';

enum Theme {
    Dark,
    Light
};

const ExperienceSection = () => {

    const theme = (theme: Theme) => {
        return {
            fontColor: theme === Theme.Light ? '#FFF' : '#000'
        };
    };

    return (
        <>
            <ExperienceContainer id="experience">
                <InfoHeader theme={theme(Theme.Light)}>Experience</InfoHeader>
                <ExperienceContent side="left" data={experience1} />
                <ExperienceContent side="right" data={experience2} />
                <ExperienceContent side="left" data={experience3} />
                <ExperienceContent side="right" data={experience4} />
                <ExperienceContent side="left" data={experience5} />
            </ExperienceContainer>
        </>
    )
}

interface ExperienceContentProps {
    side: string;
    data: ExperienceObj;
}

interface ExperienceObj {
    title: string;
    description: string;
    jobPeriod: string;
    tasks: string[];
}

function ExperienceContent(props: ExperienceContentProps) {
    const z = props.side === 'left' ? styles.left : styles.right;
    return (
        <div className={`${styles.timelineContainer} ${z}`} >
            <div className={styles.timelineContent}>
                <h1>{props.data.title}</h1>
                <div className={styles.timelineContentInfo} >
                    <span className={styles.timelineContentInfoTitle}>
                        <i className="icon-cog" aria-hidden="true"></i>
                        {props.data.description}
                    </span>
                    <span className={styles.timelineContentInfoDate}>
                        <i className="icon-calendar" aria-hidden="true"></i>
                        {props.data.jobPeriod}
                    </span>
                </div>
                <ul>
                    {props.data.tasks.map((task, index) => {
                        return (
                            <Experienceli key={index}>{task}</Experienceli>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default ExperienceSection

const experience1: ExperienceObj = {
    title: 'Biuro Informatyki Ubezpieczeniowej',
    description: 'Fullstack Developer',
    jobPeriod: '09.2020 – Now',
    tasks: ['Frontend: ',
        'Typescript',
        'React',
        'CSS3',
        'HTML5',
        'Backend: ',
        'Java',
        'MS SQL',
        'Typescript',
        'Datastore'
    ]
}

const experience2: ExperienceObj = {
    title: 'uTest.com / Applause App Quality, Inc.',
    description: 'Freelance QA Tester',
    jobPeriod: '11.2019 – 02.2020',
    tasks: ['Website testing', 'Test case execution', 'Functional testing']
}

const experience3: ExperienceObj = {
    title: 'Euro-Alians Pracownia Projektowa',
    description: 'Assistant in the design office',
    jobPeriod: '11.2015 – 07.2017',
    tasks: ['Creation of executive projects', 'Drawings', 'Technical specifications', 'Costs estimates', 'Ancillary works for project documentation']
}

const experience4: ExperienceObj = {
    title: 'Mott MacDonald Polska Sp. z o.o.',
    description: 'Assistant in the design office',
    jobPeriod: '06.2015 – 10.2015',
    tasks: ['Ancillary works for project documentation']
}

const experience5: ExperienceObj = {
    title: 'Towarzystwo edukacyjne „Wiedza Powszechna”',
    description: 'Leading computer and Internet classes',
    jobPeriod: '12.2012–12.2014',
    tasks: ['Develop and conduct classes with computer and Internet in the project "Active regardless of the age"']
}