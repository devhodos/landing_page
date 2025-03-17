import { useState } from "react";
import { Play, Plane, CreditCard, Receipt, Briefcase, MapPin, Globe, FileText, CheckCircle, Cpu } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import ContactForm from "../form/contact";

const Hero = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const handleWatchDemoClick = () => {
    setIsVideoVisible(true);
  };

  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* Floating Icons (Random Positions) */}
      <div className="absolute top-2 left-16 text-blue-500 opacity-40 animate-float">
        <Plane size={40} />
      </div>
      <div className="absolute top-20 right-20 text-green-500 opacity-40 animate-float-slow">
        <CreditCard size={40} />
      </div>
      <div className="absolute top-48 left-12 text-purple-500 opacity-40 animate-float">
        <Receipt size={40} />
      </div>
      <div className="absolute bottom-40 right-36 text-orange-500 opacity-40 animate-float-slow">
        <Briefcase size={40} />
      </div>
      <div className="absolute bottom-16 left-24 text-red-500 opacity-40 animate-float">
        <MapPin size={50} />
      </div>

      {/* AI Auditing Icon */}
      <div className="absolute top-40 right-10 text-gray-600 opacity-50 animate-float">
        <Cpu size={40} />
      </div>

      {/* Additional Icons */}
      <div className="absolute top-64 left-80 text-gray-600 opacity-50 animate-float">
        <FileText size={40} />
      </div>
      <div className="absolute top-80 right-40 text-green-600 opacity-50 animate-float">
        <CheckCircle size={40} />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-relaxed">
         Automate Your{" "}
          <div className="inline-block overflow-visible">
            <TypeAnimation
              sequence={[
                "Auditing",
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
          Effortless AI-driven expense and audit management for corporate travelers. Track, analyze, and automate reporting seamlessly.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="https://main.d2yeebuc0aimjp.amplifyapp.com/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors text-lg flex items-center gap-2"
          >
            <Globe size={20} /> Get Started
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
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-[1000]">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
              <button
                onClick={() => setIsFormVisible(false)}
                className="absolute top-2 right-2 text-gray-600 text-2xl font-bold"
              >
                &times;
              </button>
              <h2 className="text-2xl font-semibold mb-4">Request a Demo</h2>
              <ContactForm />
            </div>
          </div>
        )}

        {/* Video Modal */}
        {/* Video Modal */}
{isVideoVisible && (
  <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-[1000]">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full h-[60vh] relative z-[1001]">
      <button
        onClick={() => setIsVideoVisible(false)}
        className="absolute top-2 right-2 text-gray-600 text-2xl font-bold"
      >
        &times;
      </button>
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
