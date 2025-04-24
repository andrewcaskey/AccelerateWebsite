const StatsSection = () => {
  const stats = [
    {
      value: "40%",
      label: "Faster Page Loads",
      description: "Average improvement in page load times for our clients"
    },
    {
      value: "99.9%",
      label: "Uptime Guarantee",
      description: "Reliable hosting with enterprise-level uptime"
    },
    {
      value: "35%",
      label: "Conversion Increase",
      description: "Better performance leads to better customer engagement"
    },
    {
      value: "24/7",
      label: "Monitoring & Support",
      description: "Continuous performance monitoring and technical support"
    }
  ];

  return (
    <section className="bg-secondary-light py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark">Measurable Performance Improvements</h2>
          <p className="mt-4 text-lg text-secondary">Our clients see real results after working with Accelerate Web</p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-sm px-6 py-8 transform transition-transform hover:scale-105"
            >
              <div className="text-primary text-4xl font-bold">{stat.value}</div>
              <div className="mt-2 text-secondary-dark font-medium">{stat.label}</div>
              <p className="mt-2 text-secondary text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
