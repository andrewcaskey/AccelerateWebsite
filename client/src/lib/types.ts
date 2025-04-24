export interface ServiceDetail {
  id: number;
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
}

export interface CaseStudy {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tag: string;
  tagColor: string;
  results: string[];
}

export const serviceDetails: ServiceDetail[] = [
  {
    id: 1,
    title: "Website Development",
    description: "We build responsive, modern websites that provide excellent user experiences across all devices and screen sizes.",
    features: [
      "Mobile-first responsive design",
      "Modern React.js frontend with optimized code",
      "SEO-friendly architecture and content structure",
      "Accessible design that works for all users"
    ],
    imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Cloud Infrastructure",
    description: "Reliable, secure, and scalable hosting solutions that grow with your business and ensure your website is always available.",
    features: [
      "99.9% uptime guarantee",
      "Automatic scaling to handle traffic spikes",
      "Global CDN for fast content delivery worldwide",
      "Automated backups and disaster recovery"
    ],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Performance Monitoring",
    description: "Real-time monitoring and alerting to ensure your website is performing optimally and issues are addressed before they impact users.",
    features: [
      "24/7 uptime monitoring and alerts",
      "Real-time performance dashboards",
      "User experience tracking and analysis",
      "Proactive issue detection and resolution"
    ],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Technical Optimization",
    description: "Speed and SEO improvements that enhance user experience, boost your search engine rankings, and drive more traffic to your website.",
    features: [
      "Image and asset optimization",
      "Code minification and compression",
      "SEO audits and ongoing improvements",
      "Core Web Vitals optimization"
    ],
    imageUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Local Bakery Website Redesign",
    description: "A complete website overhaul for a local bakery that focused on affordability and functionality to help them reach more customers.",
    imageUrl: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tag: "Small Business",
    tagColor: "blue",
    results: [
      "63% increase in site traffic",
      "Page load time reduced from 4.2s to 1.8s",
      "42% more online order submissions"
    ]
  },
  {
    id: 2,
    title: "Accounting Firm Client Portal",
    description: "A secure, intuitive client portal for an accounting firm that streamlined document sharing and client communication.",
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tag: "Professional Services",
    tagColor: "purple",
    results: [
      "85% reduction in document processing time",
      "24/7 secure access to client documents",
      "Client satisfaction increased by 47%"
    ]
  },
  {
    id: 3,
    title: "Restaurant Chain Monitoring System",
    description: "A comprehensive monitoring solution for a restaurant chain with 12 locations to ensure consistent website performance across all sites.",
    imageUrl: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tag: "Multi-Location",
    tagColor: "green",
    results: [
      "99.98% uptime across all locations",
      "Early detection of 23 potential issues",
      "Unified reporting dashboard for all locations"
    ]
  },
  {
    id: 4,
    title: "Boutique Shop Performance Overhaul",
    description: "A complete technical optimization for an online boutique that was struggling with slow load times and poor conversion rates.",
    imageUrl: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tag: "E-commerce",
    tagColor: "red",
    results: [
      "68% improvement in page speed score",
      "53% reduction in cart abandonment",
      "129% increase in monthly revenue"
    ]
  }
];
