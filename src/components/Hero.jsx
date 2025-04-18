import { motion } from "framer-motion";
import { LiaDownloadSolid } from "react-icons/lia";
import PP2 from "../assets/Images/PP2.png";

const Main = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:max-w-6xl md:ml-12 w-full px-6 md:px-0 ">
      {/* Image Section */}
      <motion.div
        className="relative flex justify-center w-full md:w-auto"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.img
          src={PP2}
          alt="Profile"
          className="rounded-lg w-64 md:w-72 object-cover h-auto mt-14 md:mt-0"
          whileInView={{ scale: 1 }}
          initial={{ scale: 0.8 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
        />
      </motion.div>

      {/* Text Section */}
      <div className="w-full">
        <motion.h2
          className="text-2xl md:text-4xl font-montserrat font-semibold text-blue-900 text-center md:text-left"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          I am a Professional <br /> Video Post Production Expert
        </motion.h2>

        <motion.p
          className="text-[#000000] mt-2 text-lg md:text-xl font-inter font-regular md:text-left text-left"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          A creative video expert passionate about transforming raw footage into <br />
          compelling visual stories. Expert in editing, dynamic transitions, and
         <br /> bringing ideas to life with  precision and style.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex gap-4 mt-8 md:mt-5 justify-center md:justify-start"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <button className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900">
            My Projects
          </button>
          <button className="border border-blue-800 text-blue-800 px-4 py-2 rounded-lg hover:bg-blue-100 flex items-center gap-2">
            <LiaDownloadSolid />
            Download CV
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Main;
