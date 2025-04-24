import { Link } from "wouter";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-16 md:pt-12 md:pb-24 lg:pt-20 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <div className="text-center lg:text-left md:max-w-2xl md:mx-auto lg:mx-0">
              <h1 className="text-4xl font-extrabold tracking-tight text-secondary-dark sm:text-5xl md:text-6xl">
                <span className="block">Fast Websites for</span>
                <span className="block text-primary">Fast Results</span>
              </h1>
              <p className="mt-6 text-xl text-secondary">
                We build high-performance websites that load quickly, convert better, and help your business grow faster.
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link href="/contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 md:py-4 md:text-lg md:px-10 transition-colors">
                    Get Started
                  </Link>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <Link href="/services" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-secondary-light md:py-4 md:text-lg md:px-10 transition-colors">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-6">
            <div className="relative h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
              <svg className="w-full h-full object-contain animate-float" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#0D9488" d="M49.5,-67.2C64.9,-57.4,78.7,-44.1,83.7,-28C88.8,-11.9,85.1,7.1,78.5,24.9C71.9,42.7,62.5,59.3,48.6,67.6C34.6,75.9,16.1,75.9,-0.7,76.9C-17.6,77.9,-35.3,79.9,-50.1,73C-64.9,66.1,-76.8,50.3,-81.9,32.3C-87,14.4,-85.3,-5.7,-78.9,-23.2C-72.4,-40.7,-61.3,-55.6,-47.1,-65.7C-32.9,-75.9,-15.5,-81.2,0.8,-82.2C17,-83.3,34.1,-77.1,49.5,-67.2Z" transform="translate(100 100)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
