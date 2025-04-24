import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { CheckCircle } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Please enter a message with at least 10 characters")
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: FormValues) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      reset();
      setIsSubmitted(true);
    }
  });

  const onSubmit = async (data: FormValues) => {
    try {
      await contactMutation.mutateAsync(data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center p-4 bg-green-50 rounded-md">
        <CheckCircle className="h-6 w-6 text-green-500 mx-auto mb-2" />
        <p className="text-green-800 font-medium">Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-secondary-dark mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input 
            type="text" 
            id="name" 
            className={`block w-full rounded-md border shadow-sm focus:border-primary focus:ring-primary ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Your name" 
            {...register("name")}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-secondary-dark mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input 
              type="email" 
              id="email" 
              className={`block w-full rounded-md border shadow-sm focus:border-primary focus:ring-primary ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="you@example.com" 
              {...register("email")}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-secondary-dark mb-1">
              Phone Number
            </label>
            <input 
              type="tel" 
              id="phone" 
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              placeholder="(555) 123-4567" 
              {...register("phone")}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-secondary-dark mb-1">
              Company Name
            </label>
            <input 
              type="text" 
              id="company" 
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              placeholder="Your company" 
              {...register("company")}
            />
          </div>
          
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-secondary-dark mb-1">
              Service Interested In
            </label>
            <select 
              id="service" 
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              {...register("service")}
            >
              <option value="">Select a service</option>
              <option value="website-development">Website Development</option>
              <option value="cloud-infrastructure">Cloud Infrastructure</option>
              <option value="performance-monitoring">Performance Monitoring</option>
              <option value="technical-optimization">Technical Optimization</option>
              <option value="custom-solution">Custom Solution</option>
            </select>
          </div>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-secondary-dark mb-1">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea 
            id="message" 
            rows={4} 
            className={`block w-full rounded-md border shadow-sm focus:border-primary focus:ring-primary ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Tell us about your project or questions" 
            {...register("message")}
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
          )}
        </div>
        
        <div>
          <button 
            type="submit" 
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
            disabled={contactMutation.isPending}
          >
            {contactMutation.isPending ? "Sending..." : "Send Message"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
