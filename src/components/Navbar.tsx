
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white bg-opacity-95 backdrop-blur-sm fixed w-full z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-nigeria-green flex items-center justify-center mr-2">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="font-bold text-xl text-nigeria-green">
                The Market <span className="text-gray-800">Place Hub</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-nigeria-green transition duration-300">Home</a>
            <a href="#features" className="text-gray-700 hover:text-nigeria-green transition duration-300">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-nigeria-green transition duration-300">How It Works</a>
            <a href="#community" className="text-gray-700 hover:text-nigeria-green transition duration-300">Community</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-nigeria-green text-nigeria-green hover:bg-nigeria-green hover:text-white">
              Sign In
            </Button>
            <Button className="bg-nigeria-green hover:bg-nigeria-green-dark text-white">
              Register
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-nigeria-green focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-nigeria-green py-2 transition duration-300">Home</a>
              <a href="#features" className="text-gray-700 hover:text-nigeria-green py-2 transition duration-300">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-nigeria-green py-2 transition duration-300">How It Works</a>
              <a href="#community" className="text-gray-700 hover:text-nigeria-green py-2 transition duration-300">Community</a>
              <div className="flex flex-col space-y-3 pt-2">
                <Button variant="outline" className="border-nigeria-green text-nigeria-green hover:bg-nigeria-green hover:text-white w-full">
                  Sign In
                </Button>
                <Button className="bg-nigeria-green hover:bg-nigeria-green-dark text-white w-full">
                  Register
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
