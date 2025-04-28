
import { Mail, Phone, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const ContactFooter = () => {
 

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-300">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-purple-400" />
                <span>info@example.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-purple-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="mt-3">
                <p>123 Business Avenue</p>
                <p>Enterprise City, EC 12345</p>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-300">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Process', 'Project',].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-purple-300 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours */}
          <div>
  <h3 className="text-xl font-semibold mb-4 text-purple-300">Business Hours</h3>
  <ul className="space-y-2 text-left">
    <li className="flex flex-col">
      <span className="font-semibold">Monday - Friday:</span>
      <span>9:00 AM - 6:00 PM</span>
    </li>
    <li className="flex flex-col">
      <span className="font-semibold">Saturday:</span>
      <span>10:00 AM - 4:00 PM</span>
    </li>
    <li className="flex flex-col">
      <span className="font-semibold">Sunday:</span>
      <span>Closed</span>
    </li>
  </ul>
</div>

         

        </div>

        {/* Bottom Social & Copyright */}
        <div className="border-t border-gray-700 pt-8 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            
            {/* Social Icons */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Social Link"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-right">
              &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default ContactFooter;
