
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-nigeria-green flex items-center justify-center mr-2">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="font-bold text-xl text-white">
                The Market <span className="text-nigeria-green">Place Hub</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Nigeria's premier platform for economic and political discourse, fostering informed debates and data-driven conversations.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-nigeria-green transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-nigeria-green transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" aria-label="Instagram" className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-nigeria-green transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-nigeria-green transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-nigeria-green transition-colors">Home</a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-nigeria-green transition-colors">Features</a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-nigeria-green transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#community" className="text-gray-400 hover:text-nigeria-green transition-colors">Community</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-nigeria-green transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-nigeria-green transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-nigeria-green transition-colors">Economic Data</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-nigeria-green transition-colors">Political Analysis</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-nigeria-green transition-colors">Academic Papers</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-nigeria-green transition-colors">Discussion Guidelines</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-nigeria-green transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-nigeria-green transition-colors">Help Center</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-nigeria-green mr-3 mt-0.5" />
                <span className="text-gray-400">Victoria Island, Lagos, Nigeria</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-nigeria-green mr-3 mt-0.5" />
                <a href="mailto:info@marketplacehub.ng" className="text-gray-400 hover:text-nigeria-green transition-colors">
                  info@marketplacehub.ng
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-nigeria-green mr-3 mt-0.5" />
                <a href="tel:+234800000000" className="text-gray-400 hover:text-nigeria-green transition-colors">
                  +234 800 000 0000
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} The Market Place Hub. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 text-sm hover:text-nigeria-green transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 text-sm hover:text-nigeria-green transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 text-sm hover:text-nigeria-green transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
