import { useAnimationFrame, useMotionValue, motion } from "framer-motion";

import { Projects as projectsData } from "../data/projects"
import type { Project } from "../types/project"
import ProjectCard from "./ProjectCard";
import { useEffect, useRef, useState } from "react";


const Projects = () => {
    const x = useMotionValue(0);
    const firstGroupRef = useRef<HTMLDivElement>(null);

    const [trackWidth, setTrackWidth] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    //Measure the width of one complete set of projects
    useEffect(() => {
        const measureWidth = () => {
            if (firstGroupRef.current) {
                setTrackWidth(firstGroupRef.current.scrollWidth)
            }
        };
        measureWidth();

        const observer = new ResizeObserver(measureWidth);
        if (firstGroupRef.current) {
            observer.observe(firstGroupRef.current)
        }
        return () => observer.disconnect()
    }, []);

    //continous automic scrolling
     useAnimationFrame((_,delta) => {
        if(isPaused || isDragging || trackWidth === 0){
            return;
        }

        const speed = 45;
        let nextX = x.get() - (speed * delta) /1000;

        // seamless infinite loop 
        if(nextX <= -trackWidth){
            nextX += trackWidth;
        }

        x.set(nextX);
     });

    // Render Project Cards
    const renderProjects = (copy: string) => 
        projectsData.map((projects: Project, index) => (
            <motion.div
            key={`${copy}-${projects.id}-${index}`}
            className=" relative z-0 w-87.5 md:w-112.5 shrink-0"
            whileHover={{scale: 1.02, y:-6, zIndex:20}}
            transition={{duration: 0.3}}
            onClickCapture={()=> setIsPaused(true)}>
                <ProjectCard project={projects}/>
            </motion.div>
        ));

    return (
       <section
       id="Projects"
       className="max-w-7xl mx-auto px-6 py-24 overflow-hidden">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            My Projects
        </h2>

        <div className=" overflow-hidden">
            <motion.div
            className="flex w-max cursor-grab active:cursor-grabbing"
            style={{ x }}
            drag='x'
            dragConstraints={
                trackWidth > 0
                    ? { left: -trackWidth, right: 0 }
                    : false
            }
            dragElastic={0}
            dragMomentum={false}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}>
                {/* First set */}
                <div
                ref={firstGroupRef}
                className="flex shrink-0 gap-8 pr-8">
                    {renderProjects("first")}
                </div>
                {/* Duplicates set for infinite scrolling */}
                <div className=" flex shrink-0 gap-8 pr-8">
                    {renderProjects("second")}
                </div>
            </motion.div>
        </div>
       </section>
    )
};

export default Projects;