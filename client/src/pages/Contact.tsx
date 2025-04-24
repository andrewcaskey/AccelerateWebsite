import { MapPin } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

const Contact = () => {
  return (
    <div>
      {/* Contact Hero */}
      <section className="bg-secondary-light py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-secondary-dark sm:text-5xl">
              <span className="block">Contact Us</span>
            </h1>
            <p className="mt-4 text-xl text-secondary max-w-3xl mx-auto">
              Have questions or ready to start your project? Get in touch with our team to discuss your web development needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-bold text-secondary-dark mb-6">Get in Touch</h2>
              <p className="text-lg text-secondary mb-8">
                Fill out the form and one of our web experts will get back to you within 24 hours to discuss your project.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-3 text-secondary-dark">
                    <p className="text-base font-medium">Our Address</p>
                    <p className="mt-1 text-sm">123 Tech Lane, Suite 200<br />San Francisco, CA 94107</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-3 text-secondary-dark">
                    <p className="text-base font-medium">Email</p>
                    <p className="mt-1 text-sm">hello@accelerateweb.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-3 text-secondary-dark">
                    <p className="text-base font-medium">Phone</p>
                    <p className="mt-1 text-sm">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-3 text-secondary-dark">
                    <p className="text-base font-medium">Business Hours</p>
                    <p className="mt-1 text-sm">Monday - Friday: 9AM - 6PM<br />Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10 lg:mt-0 lg:col-span-7">
              <div className="bg-white shadow-md rounded-lg p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-secondary-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg overflow-hidden shadow-md h-96 bg-gray-200">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-secondary mx-auto mb-3" />
                <p className="text-secondary-dark font-medium">Our Location</p>
                <p className="text-secondary text-sm mt-1">123 Tech Lane, San Francisco, CA 94107</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
