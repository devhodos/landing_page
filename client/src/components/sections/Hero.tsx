import { useState } from "react";
import { Play } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import ContactForm from "../form/contact"; // Import the ContactForm component

const Hero = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  // Function to show the form when "Get Started" is clicked
  const handleGetStartedClick = () => {
    setIsFormVisible(true);
  };

  // Function to toggle the visibility of the video card
  const handleWatchDemoClick = () => {
    setIsVideoVisible(true);
  };

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-relaxed">
          Simplify Your{" "}
          <div className="inline-block overflow-visible">
            <TypeAnimation
              sequence={[
                "Travel Expenses",
                2000,
                "Expense Reporting",
                2000,
                "Bill Management",
                2000,
                "Workflow Automation",
                2000,
                "Approvals",
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="text-blue-600 inline-block"
              repeat={Infinity}
            />
          </div>
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Effortless expense management for corporate travelers. Track, manage, and report expenses in one place.
        </p>
        <div className="flex justify-center gap-4">
        <a
  href="https://main.d2yeebuc0aimjp.amplifyapp.com/signup"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors text-lg"
>
  Get Started
</a>

          <button
            onClick={handleWatchDemoClick}
            className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-50 transition-colors text-lg flex items-center gap-2"
          >
            <Play size={20} />
            Watch Demo
          </button>
        </div>

        {/* Request Demo Form Modal */}
        {isFormVisible && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
              {/* Close button */}
              <div className="absolute top-2 right-2">
                <button
                  onClick={() => setIsFormVisible(false)}
                  className="text-gray-600 text-2xl font-bold"
                >
                  &times;
                </button>
              </div>
              <h2 className="text-2xl font-semibold mb-4">Request a Demo</h2>
              {/* Render the ContactForm component here */}
              <ContactForm />
            </div>
          </div>
        )}

        {/* Video Modal */}
        {isVideoVisible && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full h-[60vh] relative">
              {/* Close button */}
              <div className="absolute top-2 right-2">
                <button
                  onClick={() => setIsVideoVisible(false)}
                  className="text-gray-600 text-2xl font-bold"
                >
                  &times;
                </button>
              </div>

              {/* Video iframe */}
              <div className="relative w-full h-full">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/lMwFxU5jM0w?autoplay=1"
                  style={{ border: "none" }}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
