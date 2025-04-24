import { Link } from "wouter";
import { Bolt, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Bolt className="h-8 w-8 text-primary" />
              <span className="ml-2 text-lg font-bold">Accelerate Web</span>
            </div>
            <p className="mt-4 text-sm text-gray-300">
              Fast, reliable websites for small businesses that drive real results and help your business grow.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider">Services</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white text-sm">Website Development</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white text-sm">Cloud Infrastructure</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white text-sm">Performance Monitoring</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white text-sm">Technical Optimization</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white text-sm">About Us</Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-white text-sm">Portfolio</Link>
              </li>
              <li>
                <Link href="/" className="text-gray-300 hover:text-white text-sm">Testimonials</Link>
              </li>
              <li>
                <Link href="/" className="text-gray-300 hover:text-white text-sm">Careers</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white text-sm">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white text-sm">Blog</Link>
              </li>
              <li>
                <Link href="/" className="text-gray-300 hover:text-white text-sm">Guides</Link>
              </li>
              <li>
                <Link href="/" className="text-gray-300 hover:text-white text-sm">FAQ</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white text-sm">Support</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Accelerate Web. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link href="/" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
              <Link href="/" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link>
              <Link href="/" className="text-gray-400 hover:text-white text-sm">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
