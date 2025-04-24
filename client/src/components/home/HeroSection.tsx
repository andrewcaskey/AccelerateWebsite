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
                <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md">
                  {/* Main circle */}
                  <circle cx="250" cy="250" r="200" fill="#f8f9fa" stroke="#0D9488" strokeWidth="8" />
                  
                  {/* Decorative elements */}
                  <circle cx="250" cy="250" r="230" fill="none" stroke="#0D9488" strokeWidth="3" strokeDasharray="15,15" />
                  
                  {/* Laptop base */}
                  <rect x="130" y="200" width="240" height="150" rx="10" fill="#0D9488" />
                  
                  {/* Laptop screen */}
                  <rect x="140" y="130" width="220" height="140" rx="5" fill="white" stroke="#0D9488" strokeWidth="8" />
                  
                  {/* Screen content - code lines */}
                  <line x1="160" y1="150" x2="240" y2="150" stroke="#0D9488" strokeWidth="4" />
                  <line x1="160" y1="170" x2="340" y2="170" stroke="#0D9488" strokeWidth="4" />
                  <line x1="160" y1="190" x2="280" y2="190" stroke="#0D9488" strokeWidth="4" />
                  <line x1="160" y1="210" x2="320" y2="210" stroke="#0D9488" strokeWidth="4" />
                  <line x1="160" y1="230" x2="260" y2="230" stroke="#0D9488" strokeWidth="4" />
                  
                  {/* Speed lines */}
                  <path d="M390,150 C420,180 430,220 430,250" fill="none" stroke="#0D9488" strokeWidth="5" strokeLinecap="round" />
                  <path d="M400,130 C440,170 450,210 450,250" fill="none" stroke="#0D9488" strokeWidth="5" strokeLinecap="round" />
                  <path d="M410,110 C460,160 470,200 470,250" fill="none" stroke="#0D9488" strokeWidth="5" strokeLinecap="round" />
                  
                  {/* Decorative gears */}
                  <circle cx="100" cy="350" r="30" fill="#0D9488" opacity="0.8">
                    <animateTransform 
                      attributeName="transform" 
                      attributeType="XML" 
                      type="rotate" 
                      from="0 100 350" 
                      to="360 100 350" 
                      dur="10s" 
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="100" cy="350" r="15" fill="white" />
                  
                  <circle cx="400" cy="350" r="25" fill="#0D9488" opacity="0.8">
                    <animateTransform 
                      attributeName="transform" 
                      attributeType="XML" 
                      type="rotate" 
                      from="360 400 350" 
                      to="0 400 350" 
                      dur="8s" 
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="400" cy="350" r="12" fill="white" />
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
