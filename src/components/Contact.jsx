import { useState } from "react";

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
    <div id="contact" className="w-screen bg-black py-10 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
          Book a Meeting
        </h2>

        {!showIframe ? (
          <div className="text-center">
            <button
              onClick={handleScheduleClick}
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              Schedule a 30-Min Call
            </button>
          </div>
        ) : (
          <div>
            <div
              id="cal-frame"
              className="mt-10 border rounded-xl overflow-hidden bg-white"
            >
              <iframe
                src="https://cal.com/tobyteq/30min"
                width="100%"
                height="700"
                frameBorder="0"
                scrolling="no"
                style={{
                  borderRadius: "12px",
                  width: "100%",
                  maxWidth: "100%",
                }}
                title="Schedule a 30-Min Call"
              ></iframe>
            </div>

            <div className="text-center mt-6">
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
