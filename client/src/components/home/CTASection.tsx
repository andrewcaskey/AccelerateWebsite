import { Link } from "wouter";

const CTASection = () => {
  return (
    <section className="gradient-bg py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:max-w-xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Ready to accelerate your web presence?</span>
            </h2>
            <p className="mt-4 text-lg text-white opacity-90">
              Get a free consultation and see how we can help your business with fast, reliable, and affordable web solutions.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-8">
            <div className="rounded-md shadow">
              <Link href="/contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
