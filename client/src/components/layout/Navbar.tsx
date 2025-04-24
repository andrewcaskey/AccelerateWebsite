import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Bolt } from "lucide-react";

interface NavbarProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const Navbar = ({ isMobileMenuOpen, toggleMobileMenu }: NavbarProps) => {
  const [location] = useLocation();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Bolt className="h-8 w-8 text-primary" />
              <span className="ml-2 text-lg font-bold text-secondary-dark">Accelerate Web</span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8 items-center">
            <Link 
              href="/" 
              className={`text-secondary hover:text-primary px-3 py-2 rounded-md text-sm font-medium border-b-2 border-transparent hover:border-primary transition-colors ${
                location === "/" ? "text-primary border-primary" : ""
              }`}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className={`text-secondary hover:text-primary px-3 py-2 rounded-md text-sm font-medium border-b-2 border-transparent hover:border-primary transition-colors ${
                location === "/services" ? "text-primary border-primary" : ""
              }`}
            >
              Services
            </Link>
            <Link 
              href="/portfolio" 
              className={`text-secondary hover:text-primary px-3 py-2 rounded-md text-sm font-medium border-b-2 border-transparent hover:border-primary transition-colors ${
                location === "/portfolio" ? "text-primary border-primary" : ""
              }`}
            >
              Portfolio
            </Link>
            <Link 
              href="/contact" 
              className={`text-secondary hover:text-primary px-3 py-2 rounded-md text-sm font-medium border-b-2 border-transparent hover:border-primary transition-colors ${
                location === "/contact" ? "text-primary border-primary" : ""
              }`}
            >
              Contact
            </Link>
            <Link 
              href="/contact" 
              className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Get Started
            </Link>
          </nav>
          <div className="flex items-center md:hidden">
            <button 
              type="button" 
              className="inline-flex items-center justify-center p-2 rounded-md text-secondary hover:text-primary hover:bg-secondary-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link 
            href="/" 
            className={`block px-3 py-2 rounded-md text-base font-medium text-secondary hover:text-primary hover:bg-secondary-light ${
              location === "/" ? "text-primary bg-secondary-light" : ""
            }`}
          >
            Home
          </Link>
          <Link 
            href="/services" 
            className={`block px-3 py-2 rounded-md text-base font-medium text-secondary hover:text-primary hover:bg-secondary-light ${
              location === "/services" ? "text-primary bg-secondary-light" : ""
            }`}
          >
            Services
          </Link>
          <Link 
            href="/portfolio" 
            className={`block px-3 py-2 rounded-md text-base font-medium text-secondary hover:text-primary hover:bg-secondary-light ${
              location === "/portfolio" ? "text-primary bg-secondary-light" : ""
            }`}
          >
            Portfolio
          </Link>
          <Link 
            href="/contact" 
            className={`block px-3 py-2 rounded-md text-base font-medium text-secondary hover:text-primary hover:bg-secondary-light ${
              location === "/contact" ? "text-primary bg-secondary-light" : ""
            }`}
          >
            Contact
          </Link>
          <Link 
            href="/contact" 
            className="block text-center mt-4 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md text-base font-medium transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
