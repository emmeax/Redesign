import React from "react";
import { motion } from "framer-motion";
import { FaSearch,  FaPaintBrush, FaRocket } from "react-icons/fa";
import { FileText, Search } from "lucide-react";
import Analyze from '../assets/Images/Analyze.png'
import Case_Study from '../assets/Images/Case_Study.png'
import Design from '../assets/Images/Design.png'

const AnalysisIcon = () => {
  return (
    <div className="relative w-6 h-6">
      {/* Document Icon */}
      <FileText className="w-full h-full text-white" />
      {/* Magnifying Glass Icon */}
      <Search className="w-3 h-3 absolute bottom-0 right-0 bg-white text-blue-700 rounded-full p-0.5 border border-blue-700" />
    </div>
  );
};


const steps = [
  {
    id: 1,
    title: "Research",
    description:
      "We start by understanding your brand, audience, and goals. Through research, we identify the best styles, formats, and storytelling techniques for your video.",
    icon: <img src={Case_Study} alt="Case-Study Icon" className="text-white text-2xl" />, 
  },
  {
    id: 2,
    title: "Analysis",
    description:
      "We carefully review your footage, scripts, and creative direction. Key moments are selected, and pacing is refined to enhance engagement. This step sets the foundation for a seamless and compelling story.",
    icon: <img src={Analyze} alt="Analysis Icon" className="text-white text-2xl" />, 
  },
  {
    id: 3,
    title: "Design",
    description:
      "Here’s where the visuals come to life. We apply precise cuts, transitions, color grading, and motion graphics while refining sound design. Every detail is polished to create a high-quality, professional video.",
    icon: <img src={Design} alt="Design Icon" className="text-white text-2xl" />, 
  },
  {
    id: 4,
    title: "Launch",
    description:
      "The final video is exported in the best format for your platform. A quality check ensures smooth playback, crisp visuals, and clear audio. Your video is now ready to captivate your audience.",
    icon: <FaRocket className="text-white text-2xl" />, 
  },
];

const MyProcess = () => {
  return (
    <section className="bg-[#EEF2FF] py-16 px-6 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row gap-12">
        {/* Left Side - Title and Description */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
          className="md:w-1/2 self-start"
        >
          <h2 className="text-4xl font-montserrat font-semibold text-blue-900">My process</h2>
          <p className="text-gray-600 font-inter font-medium mt-4 max-w-md">
            Great videos don’t happen by chance—they’re crafted with purpose. My process ensures every project is seamless, from concept to final cut. With a blend of creativity, precision, and storytelling, I turn raw footage into compelling visuals that captivate and engage.
          </p>
        </motion.div>

        {/* Right Side - Steps */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
          className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-10 relative"
        >
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`bg-white p-6 rounded-lg shadow-lg flex flex-col gap-4 min-h-[240px] relative ${index === 1 ? 'md:top-14' : ''} ${index === 2 ? 'md:top-2' : ''} ${index === 3 ? 'md:top-14' : ''}`}
            >
              {/* Icon inside a blue box */}
              <div className="w-10 h-10 flex items-center justify-center bg-blue-700 rounded-md">
                {step.icon}
              </div>
              
              {/* Title & Description */}
              <h3 className="text-lg font-bold text-gray-900 font-inter">{step.id}. {step.title}</h3>
              <p className="text-gray-600 text-sm font-medium font-inter">{step.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MyProcess;
