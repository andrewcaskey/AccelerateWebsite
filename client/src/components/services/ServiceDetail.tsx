import { Link } from "wouter";
import { Check } from "lucide-react";
import { ServiceDetail as ServiceDetailType } from "@/lib/types";

interface ServiceDetailProps {
  service: ServiceDetailType;
  isReversed: boolean;
}

const ServiceDetail = ({ service, isReversed }: ServiceDetailProps) => {
  return (
    <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
      {!isReversed ? (
        <>
          <div className="lg:col-span-6">
            <h2 className="text-3xl font-bold text-secondary-dark">{service.title}</h2>
            <p className="mt-4 text-lg text-secondary">
              {service.description}
            </p>
            <ul className="mt-8 space-y-4">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-base text-secondary-dark">{feature}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link href="/contact" className="text-primary hover:text-primary/90 font-medium flex items-center">
                Request a quote
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:col-span-6">
            <img className="rounded-lg shadow-lg" src={service.imageUrl} alt={service.title} />
          </div>
        </>
      ) : (
        <>
          <div className="lg:col-span-6 order-last lg:order-first">
            <img className="rounded-lg shadow-lg" src={service.imageUrl} alt={service.title} />
          </div>
          <div className="mt-10 lg:mt-0 lg:col-span-6">
            <h2 className="text-3xl font-bold text-secondary-dark">{service.title}</h2>
            <p className="mt-4 text-lg text-secondary">
              {service.description}
            </p>
            <ul className="mt-8 space-y-4">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-base text-secondary-dark">{feature}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link href="/contact" className="text-primary hover:text-primary/90 font-medium flex items-center">
                Request a quote
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ServiceDetail;
