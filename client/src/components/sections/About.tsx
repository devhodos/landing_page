const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">About Hodos</h2>
            <p className="text-gray-600 mb-4">
              Hodos is revolutionizing corporate travel expense management through innovative technology and user-centric design.
            </p>
            <p className="text-gray-600">
              Our platform streamlines the entire expense process, from receipt capture to reimbursement, saving time and reducing errors.
            </p>
          </div>
          <div className="bg-gray-100 h-64 rounded-xl">
            <div className="relative w-full h-full">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/lMwFxU5jM0w
"
                style={{ border: 'none' }}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;