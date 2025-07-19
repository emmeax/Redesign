import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "STUDIO MANSOUR", image: "https://res.cloudinary.com/ddjnrebkn/video/upload/v1742815507/Work-videos/interior-designer-video-ad-179442-ORIGINAL_lgdgqo.mp4", type: "video" },
  { title: "CRISAB ANIMATION", image: "https://res.cloudinary.com/ddjnrebkn/video/upload/v1742815507/Work-videos/animation-reel-179449-ORIGINAL_o7duft.mp4", type: "video" },
  { title: "BLUE ARROW", image: "https://res.cloudinary.com/ddjnrebkn/video/upload/v1742815551/Work-videos/intro-video-179440-ORIGINAL_vmap9l.mp4", type: "video" },
];

const ProjectCard = ({ title, image }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }}
      className=" bg-white shadow-lg p-4 rounded-xl w-full max-w-xs"
    >
      <div className=" container w-full h-40 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
        <video ref={videoRef} src={image} className="w-full h-full object-cover" />
      </div>
      <h3 className="font-semibold mt-2 text-left">{title}</h3>
      <div className="flex justify-start mt-2">
        <button
          onClick={togglePlayPause}
          className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
        >
          {isPlaying ? "❚❚" : "▶"}
        </button>
      </div>
    </motion.div>
  );
};

const MoreProjects = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-16 px-14 md:px-0">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-3xl font-bold text-blue-900 mb-4"
      >
        More Projects
      </motion.h2>
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-gray-700 justify-center hidden md:block text-left md:item-center mb-10"
      >
        Here are some more of the great work I have done for my amazing
        <span className="item-center">
          {" "}
          <br />
          clients across different industries
        </span>
      </motion.p>
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-gray-700 justify-center md:hidden block text-left md:item-center mb-10"
      >
        Here are some more of the great work I have done for my amazing clients across different industries
      </motion.p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default MoreProjects;
