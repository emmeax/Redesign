const Contact = () => {
  return (
    <div id="contact" className="w-screen bg-black py-10 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-white">
          Book a Meeting
        </h2>
        <div className="w-full h-[600px]">
          <iframe
            src="https://cal.com/emmanuel-badmus"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            allow="fullscreen"
            title="Book a Call with Emmanuel Badmus"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
