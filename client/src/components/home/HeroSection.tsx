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
              <div className="w-full h-full flex items-center justify-center animate-float">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full max-w-md transform animate-pulse" style={{ animation: 'pulse 3s infinite' }}>
                  {/* Web development/coding icon */}
                  <path d="M16 18l6-6-6-6" fill="none" stroke="#0D9488" strokeWidth="2" />
                  <path d="M8 6l-6 6 6 6" fill="none" stroke="#0D9488" strokeWidth="2" />
                  <path d="M12 2l-4 20" fill="none" stroke="#0D9488" strokeWidth="2" />
                  
                  {/* Circular background */}
                  <circle cx="12" cy="12" r="10" fill="#0D948820" />
                  
                  {/* Additional elements suggesting speed/performance */}
                  <path d="M20 12h-4" fill="none" stroke="#0D9488" strokeWidth="1" />
                  <path d="M4 12h4" fill="none" stroke="#0D9488" strokeWidth="1" />
                  <path d="M12 4v4" fill="none" stroke="#0D9488" strokeWidth="1" />
                  <path d="M12 16v4" fill="none" stroke="#0D9488" strokeWidth="1" />
                  
                  {/* Graph line suggesting analytics/performance */}
                  <path d="M5 16l3-4 2 2 4-6 2 1" fill="none" stroke="#0D9488" strokeWidth="1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
