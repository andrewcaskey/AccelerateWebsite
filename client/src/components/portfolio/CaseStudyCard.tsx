import { Check } from "lucide-react";
import { CaseStudy } from "@/lib/types";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

const CaseStudyCard = ({ caseStudy }: CaseStudyCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
      <img className="h-64 w-full object-cover" src={caseStudy.imageUrl} alt={caseStudy.title} />
      <div className="p-6 flex-grow">
        <div className="flex items-center mb-4">
          <span 
            className={`bg-${caseStudy.tagColor}-100 text-${caseStudy.tagColor}-800 text-xs px-2 py-1 rounded-full uppercase font-medium`}
          >
            {caseStudy.tag}
          </span>
        </div>
        <h2 className="text-2xl font-bold text-secondary-dark mb-2">{caseStudy.title}</h2>
        <p className="text-secondary mb-4">
          {caseStudy.description}
        </p>
        <div className="mt-4 space-y-3">
          {caseStudy.results.map((result, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <p className="ml-2 text-sm text-secondary-dark">{result}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="p-6 bg-secondary-light">
        <a href="#" className="text-primary hover:text-primary/90 font-medium flex items-center">
          View full case study
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default CaseStudyCard;
