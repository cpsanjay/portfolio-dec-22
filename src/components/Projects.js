import React from "react";
import { motion } from "framer-motion";
import ProjectImg from "../assets/projects.svg";
import { projectDetails } from "../projectDetails";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, desc, head, gitLink }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-gray-300 z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue rounded-xl cursor-pointer`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div
      variants={projectVariant}
      className="relative w-[300px] h-[200px] sm:w-[150px] md:w-[200px] lg:w-[300px] object-cover m-2 "
      href={gitLink}
    >
      <div className={overlayStyles}>
        <p className="text-2xl">{head}</p>
        <p className="mt-7">{desc}</p>
        <a
          href={gitLink}
          target="_blank"
          className="text-blue-500"
          rel="noreferrer"
        >
          Github Link
        </a>
      </div>
      <img
        src={require(`../assets/${projectTitle}.png`)}
        alt={projectTitle}
        className="w-[300px] h-[200px] sm:w-[150px]  md:w-[200px] lg:w-[300px] object-cover rounded-xl "
      />
    </motion.div>
  );
};

const Projects = ({ setSelectedPage }) => {
  return (
    <section className="w-full flex justify-center flex-col items-center pb-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        onViewportEnter={() => setSelectedPage("projects")}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="relative">
          <h1
            id="projects"
            className="md:text-[180px] sm:text-[100px] text-[70px] font-black tracking-[-.8rem] md:tracking-[-1.5rem] items-center justify-center"
          >
            PROJECTS &nbsp;
          </h1>
          <img
            src={ProjectImg}
            alt="project"
            className="absolute right-[-10rem] top-10 w-[300px] md:right-[-25rem] md:top-20 md:w-[600px]"
          />
        </div>
      </motion.div>
      <motion.div
        className="sm:grid sm:grid-cols-3 p-10"
        id="projectSection"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={container}
      >
        {projectDetails.map((p, i) => (
          <Project
            title={p.title}
            head={p.head}
            desc={p.desc}
            gitLink={p.gitLink}
            key={i}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
