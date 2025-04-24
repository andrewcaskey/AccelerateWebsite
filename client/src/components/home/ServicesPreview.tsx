import { Link } from "wouter";
import { Monitor, Cloud, BarChart, Zap } from "lucide-react";

const ServicesPreview = () => {
  const services = [
    {
      id: 1,
      icon: <Monitor className="h-6 w-6 text-primary" />,
      title: "Website Development",
      description: "Responsive designs that work perfectly on any device and screen size."
    },
    {
      id: 2,
      icon: <Cloud className="h-6 w-6 text-primary" />,
      title: "Cloud Infrastructure",
      description: "Scalable, reliable hosting solutions that grow with your business."
    },
    {
      id: 3,
      icon: <BarChart className="h-6 w-6 text-primary" />,
      title: "Performance Monitoring",
      description: "Real-time dashboards and alerts to keep your site running optimally."
    },
    {
      id: 4,
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Technical Optimization",
      description: "Speed and SEO improvements that boost your rankings and user experience."
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark">Our Services</h2>
          <p className="mt-4 text-lg text-secondary">Comprehensive web solutions for small businesses</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transform transition-all hover:shadow-md"
            >
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-secondary-dark">{service.title}</h3>
                <p className="mt-3 text-secondary">{service.description}</p>
                <Link href="/services" className="mt-4 inline-flex items-center text-primary hover:text-primary/90">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
