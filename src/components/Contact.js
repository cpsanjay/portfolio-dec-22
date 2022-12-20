import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import ContactImg from "../assets/contact.svg";
import { FaGithubSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";

const Contact = ({ setSelectedPage }) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="py-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        onViewportEnter={() => setSelectedPage("contact")}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex w-full items-center justify-center"
      >
        <div className="relative">
          <h1
            id="projects"
            className="md:text-[180px] sm:text-[100px] text-[70px] font-black tracking-[-.8rem] md:tracking-[-1.5rem] items-center justify-center"
          >
            CONTACT &nbsp;
          </h1>
          <img
            src={ContactImg}
            alt="contact"
            className="absolute -left-20 top-20 w-[200px] md:left-[-25rem] md:top-10 md:w-[500px]"
          />
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        className="mt-10 md:mt-0"
      >
        <form
          target="_blank"
          onSubmit={onSubmit}
          action="https://formsubmit.co/ef4d2b2b51319823062b4a4227c19c31"
          method="POST"
          className="flex flex-col gap-8 max-w-[500px] m-auto"
        >
          <input
            className="p-4 rounded-[25px] bg-[#CFBF86] focus:text-white placeholder:text-white shadow-3xl focus:outline-none"
            type="text"
            placeholder="NAME"
            {...register("name", {
              required: true,
              maxLength: 100,
            })}
          />
          {errors.name && (
            <p className="text-red mt-1">
              {errors.name.type === "required" && "This field is required."}
              {errors.name.type === "maxLength" && "Max length is 100 char."}
            </p>
          )}
          <input
            className="p-4 rounded-[25px] bg-[#CFBF86] focus:text-white placeholder:text-white shadow-3xl focus:outline-none"
            type="text"
            placeholder="EMAIL"
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />
          {errors.email && (
            <p className="text-red mt-1">
              {errors.email.type === "required" && "This field is required."}
              {errors.email.type === "pattern" && "Invalid email address."}
            </p>
          )}
          <textarea
            className="p-4 rounded-[25px] resize-none bg-[#CFBF86] focus:text-white placeholder:text-white shadow-3xl focus:outline-none"
            name="message"
            placeholder="MESSAGE"
            rows="4"
            cols="50"
            {...register("message", {
              required: true,
              maxLength: 2000,
            })}
          />
          {errors.message && (
            <p className="text-red mt-1">
              {errors.message.type === "required" && "This field is required."}
              {errors.message.type === "maxLength" &&
                "Max length is 2000 char."}
            </p>
          )}

          <button
            className="md:w-[260px] text-[14px] md:text-[1rem] w-[150px]  h-[70px] bg-[#FFC700] rounded-[25px]  font-semibold flex items-center justify-center shadow-3xl hover:bg-[#fbd138] transition duration-500"
            type="submit"
          >
            Send a Message
          </button>
        </form>
      </motion.div>
      <div className="flex text-[30px] gap-4 items-center justify-center pt-10 mt-10 border-t-4 ">
        <a href="https://github.com/cpsanjay" target="_blank" rel="noreferrer">
          <FaGithubSquare />
        </a>
        <a
          href="https://www.instagram.com/_sanjaycp_/"
          target="_blank"
          rel="noreferrer"
        >
          <RiInstagramFill className="scale-110" />
        </a>
        <a
          href="https://www.linkedin.com/in/sanjay-cp/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
    </section>
  );
};

export default Contact;
