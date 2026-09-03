import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import FadeInSection from "../components/FadeInSection";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Suraj | Full Stack Devloper</title>
                <meta
                    name="description"
                    content="Portfolio of Suraj, a full stack devloper building projects with the Mern stack and Typescript."
                />
            </Helmet>
            <Hero />
            <FadeInSection>
                <About />
            </FadeInSection>
            <FadeInSection delay={0.1}>
                <Projects />
            </FadeInSection>
            <FadeInSection delay={0.1}>
                <Skills />
            </FadeInSection>
            <FadeInSection delay={0.1}>
                <Contact />
            </FadeInSection>
        </>
    );
};

export default Home;