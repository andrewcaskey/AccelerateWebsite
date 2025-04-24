import { Link } from "wouter";
import ServiceDetail from "@/components/services/ServiceDetail";
import { serviceDetails } from "@/lib/types";

const Services = () => {
  return (
    <div>
      {/* Services Hero */}
      <section className="bg-secondary-light py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-secondary-dark sm:text-5xl">
              <span className="block">Our Services</span>
            </h1>
            <p className="mt-4 text-xl text-secondary max-w-3xl mx-auto">
              Comprehensive web solutions designed specifically for small businesses looking to accelerate their online presence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {serviceDetails.map((service, index) => (
              <ServiceDetail 
                key={service.id}
                service={service}
                isReversed={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services CTA */}
      <section className="gradient-bg py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Need a custom solution?</span>
          </h2>
          <p className="mt-4 text-xl text-white opacity-90 max-w-2xl mx-auto">
            We can create a tailored package that combines our services to perfectly match your business needs and budget.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
