import React from 'react';
import Footer from '../components/Footer/Footer';
import HomeSection from '../components/HomeSection/HomeSection';
import ContactSection from '../components/InfoSection/ContactSection';
import EducationSection from '../components/InfoSection/EducationSection';
import ExperienceSection from '../components/InfoSection/ExperienceSection';
import ProjectsSection from '../components/InfoSection/ProjectsSection';
import SkillsSection from '../components/InfoSection/SkillsSection';
import NavBar from '../components/Navbar/Navbar';

const Home = () => {
    return (
        <>
            <NavBar />
            <HomeSection />
            <EducationSection />
            <ExperienceSection />
            <ProjectsSection />
            <SkillsSection />
            <ContactSection />
            <Footer />
        </>
    )
};

export default Home
