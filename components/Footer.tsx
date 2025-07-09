
import { Building2, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-construction-dark dark:bg-construction-charcoal text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-construction-gold rounded-lg">
                <Building2 className="h-6 w-6 text-construction-dark" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Fast Track</h3>
                <p className="text-sm text-gray-300 -mt-1">Constructions</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Building dreams with precision and soul. Your trusted partner for premium residential construction services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-construction-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-construction-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-construction-gold transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-construction-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-construction-gold transition-colors">Residential Construction</a></li>
              <li><a href="#" className="text-gray-300 hover:text-construction-gold transition-colors">Custom Home Building</a></li>
              <li><a href="#" className="text-gray-300 hover:text-construction-gold transition-colors">Duplex Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-construction-gold transition-colors">Renovation Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-construction-gold transition-colors">Project Consultation</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-300 hover:text-construction-gold transition-colors">About Us</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-construction-gold transition-colors">Our Projects</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-construction-gold transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-construction-gold transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-construction-gold transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-construction-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">123 Construction Ave</p>
                  <p className="text-gray-300">Metro City, MC 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-construction-gold" />
                <p className="text-gray-300">(555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-construction-gold" />
                <p className="text-gray-300">info@fasttrackconstructions.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 Fast Track Constructions. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-construction-gold text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-300 hover:text-construction-gold text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-construction-gold text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
