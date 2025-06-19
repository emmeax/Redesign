import { useState } from "react";
import borderBg from "../assets/Images/Rectangle 3468084.png"; 

const Contact = () => {
  const [showIframe, setShowIframe] = useState(false);

  const handleScheduleClick = () => {
    setShowIframe(true);
    setTimeout(() => {
      const el = document.getElementById("cal-frame");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleBackClick = () => {
    setShowIframe(false);
    setTimeout(() => {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div
      id="contact"
      className="w-screen bg-white py-7 px-4 flex justify-center items-center"
      style={{
        backgroundImage: `url(${borderBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
      }}
    >
      <div className="relative  w-full px-8 md:px-16 py-6 text-center border border-transparent overflow-hidden">
        {!showIframe ? (
          <div className="relative z-10 px-8 md:px-16 py-16">
            <h2 className="text-2xl md:text-4xl font-montserrate font-semibold text-gray-900 mb-6">
              Are You Ready to Create Videos <br /> That Make an Impact?
            </h2>
            <p className="text-gray-700 font-inter font-regular text-2xl max-w-xl mx-auto mb-4">
              I am ready to help you, your brand or companies <br /> create high-quality videos that tell powerful stories <br /> and leave powerful impressions.
            </p>
            <p className="text-blue-700 font-inter font-medium text-2xl mb-8">
              Let’s talk about how I can bring your ideas to life!
            </p>
            <button
              onClick={handleScheduleClick}
              className="bg-[#024B8A] hover:bg-blue-800 font-inter font-bold text-white font-semibold py-3 px-6 rounded-md transition duration-300"
            >
              Book a Free Call
            </button>
          </div>
        ) : (
          <div className="relative z-10 w-full">
            <div id="cal-frame" className="w-full">
              <iframe
                src="https://cal.com/tobyteq/30min"
                width="100%"
                height="700"
                frameBorder="0"
                scrolling="no"
                style={{
                  borderRadius: "0px", // full edge to edge inside the card
                  width: "100%",
                  maxWidth: "100%",
                }}
                title="Schedule a 30-Min Call"
              ></iframe>
            </div>
            <div className="text-center my-6">
              <button
                onClick={handleBackClick}
                className="bg-gray-700 hover:bg-gray-800 text-white font-medium py-2 px-5 rounded-md transition duration-300"
              >
                ← Back
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
