import { Link } from "wouter";
import CaseStudyCard from "@/components/portfolio/CaseStudyCard";
import { caseStudies } from "@/lib/types";

const Portfolio = () => {
  return (
    <div>
      {/* Portfolio Hero */}
      <section className="bg-secondary-light py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-secondary-dark sm:text-5xl">
              <span className="block">Our Portfolio</span>
            </h1>
            <p className="mt-4 text-xl text-secondary max-w-3xl mx-auto">
              See how we've helped businesses just like yours achieve remarkable results with fast, reliable websites.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio CTA */}
      <section className="gradient-bg py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to become our next success story?</span>
          </h2>
          <p className="mt-4 text-xl text-white opacity-90 max-w-2xl mx-auto">
            Your business deserves a fast, reliable website that converts visitors into customers. Let's build it together.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
