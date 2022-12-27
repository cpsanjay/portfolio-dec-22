import React from "react";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Man from "../assets/man.png";

const Landing = ({ setSelectedPage }) => {
  return (
    <section
      id="home"
      className=" md:flex md:justify-between md:items-center md:h-full gap-16 py-10 md:pr-20 max-w-[1250px] m-auto"
    >
      <div className="relative md:order-2 flex justify-center basis-2/5 z-10 mt-16 md:mt-32">
        <img
          className="max-w-[30%] md:max-w-[80%] -mb-20"
          alt="profile"
          src={Man}
        />
      </div>
      <div className="z-30 basis-3/5 mt-36 md:mt-0 ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <p className="text-[96px] md:leading-[110px] leading-[60px] font-lexendDeca z-10 text-center md:text-start">
            <span className="md:text-[96px] text-[50px] tracking-[0.01rem]">
              Hey,
            </span>
            <br />
            <span className="md:text-[96px]  text-[60px]  tracking-[0.01rem]">
              My name is <br />
            </span>
            {""}
            <span
              className="font-bold md:text-[128px] text-[90px] tracking-[-.8rem] md:tracking-[-1rem]"
              id="sanjay"
            >
              SANJAY&nbsp;
            </span>
          </p>
          <p className="font-lexendDeca mt-10 font-medium text-[#3D3D3D] w-full mb-7 text-start md:text-[1.5rem] tracking-[-0.1rem] flex md:gap-2 gap-1 justify-center md:justify-start">
            I am a <span className="font-bold">Web Developer</span> based in{" "}
            <span className="font-bold">India</span>
          </p>
        </motion.div>
        <motion.div
          className="w-[200px] md:w-[360px] md:h-[70px] h-[140px] flex flex-col md:flex-row gap-8 m-auto md:m-0 justify-center items-center "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <AnchorLink
            className="w-[260px] h-[70px] bg-[#FFC700] rounded-[25px]  font-semibold flex items-center justify-center shadow-3xl hover:bg-[#fbd138] "
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <a
            className="w-[100px] h-[70px] bg-[#FFC700] rounded-[25px]  font-semibold flex items-center justify-center shadow-3xl hover:bg-[#fbd138]"
            href="https://drive.google.com/file/d/1ebE1glN4j5DK8EwusnAe9DXXkxgEqmX6/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Get CV
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
