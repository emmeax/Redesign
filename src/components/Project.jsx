import React, { useState } from "react";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react"; // Play icon

// Sample project data (Replace with actual image & video URLs)
const projects = [
    {
        id: 1,
        title: "Cardlinx Associatio Presents Video campaign",
        description: "With this video, we helped our client provide clarity and next steps...",
        thumbnail: "https://res.cloudinary.com/ddjnrebkn/video/upload/so_0/Work-videos/cardlinx-promo-179438-ORIGINAL_hwg3ck.jpg", 
        video: "https://res.cloudinary.com/ddjnrebkn/video/upload/v1742815615/Work-videos/cardlinx-promo-179438-ORIGINAL_hwg3ck.mp4", 
      },
      {
        id: 2,
        title: "IG Reels YouTube Shorts Video",
        description: "We helped create a memorable visual message...",
        thumbnail: "https://res.cloudinary.com/ddjnrebkn/video/upload/so_0/Work-videos/ig-reels-youtube-shorts-281175-ORIGINAL_wjw0fz.jpg",
        video: "https://res.cloudinary.com/ddjnrebkn/video/upload/v1742815495/Work-videos/ig-reels-youtube-shorts-281175-ORIGINAL_wjw0fz.mp4"
      },
      {
        id: 3,
        title: "Woobiebed 3D Video Promo",
        description: "We delivered a great video to communicate brand values.",
        thumbnail: "https://res.cloudinary.com/ddjnrebkn/video/upload/so_0/Work-videos/woobiebed-3d-video-promo-223559-ORIGINAL_udtgsa.jpg",
        video: "https://res.cloudinary.com/ddjnrebkn/video/upload/v1742815634/Work-videos/woobiebed-3d-video-promo-223559-ORIGINAL_udtgsa.mp4",
      },
      {
        id: 4,
        title: "Reese's Peanut Video",
        description: "We helped create a memorable visual message...",
        thumbnail: "https://res.cloudinary.com/ddjnrebkn/video/upload/so_0/Work-videos/faceless-youtube-video-281176-ORIGINAL_tnbvds.jpg",
        video: "https://res.cloudinary.com/ddjnrebkn/video/upload/v1742815501/Work-videos/faceless-youtube-video-281176-ORIGINAL_tnbvds.mp4",
      },
      {
        id: 5,
        title: "Short Form Showreel Videos",
        description: "We delivered a great video to communicate brand values.",
        thumbnail: "https://res.cloudinary.com/ddjnrebkn/video/upload/so_0/Work-videos/SHORT-FORM_SHOW_REEL_ngctzv.jpg",
        video: "https://res.cloudinary.com/ddjnrebkn/video/upload/v1742815629/Work-videos/SHORT-FORM_SHOW_REEL_ngctzv.mp4",
      },
      {
        id: 6,
        title: "Smith Lending Videos",
        description: "We delivered a great video to communicate brand values.",
        thumbnail: "https://res.cloudinary.com/ddjnrebkn/video/upload/so_0/Work-videos/smith-lending-youtube-video-179439-ORIGINAL_xhaai5.jpg",
        video: "https://res.cloudinary.com/ddjnrebkn/video/upload/v1742815650/Work-videos/smith-lending-youtube-video-179439-ORIGINAL_xhaai5.mp4",
      },
];

const ProjectCards = ({ title, description, thumbnail, video, isPlaying, onClick }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden relative"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Video / Image Container */}
      <div className="relative w-full h-96">
        {isPlaying ? (
          <video src={video} controls autoPlay className="w-full h-full object-cover" />
        ) : (
          <div className="relative w-full h-full">
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover cursor-pointer"
            />
            {/* Play Button Overlay */}
            <button
              className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition"
              onClick={onClick}
            >
              <PlayCircle size={60} className="text-white" />
            </button>
          </div>
        )}
      </div>

      {/* Project Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
      </div>
    </motion.div>
  );
};

const ProjectCard = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

  return (
    <section className="bg-[#EEF2FF] py-16 px-6 md:px-12">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-bold text-blue-900 "
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          Featured Projects
        </motion.h2>
        <motion.button
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
          className="bg-blue-700 text-white px-4 py-2 rounded-md mt-3 hover:bg-blue-800"
        >
          See more
        </motion.button>

        {/* Project Grid */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
        >
          {/* First project - alone at top right */}
          

          {/* Remaining projects - in two-column grid */}
          {projects.map((project) => (
            <ProjectCards
              key={project.id}
              {...project}
              isPlaying={playingVideo === project.id}
              onClick={() => setPlayingVideo(project.id)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectCard;
