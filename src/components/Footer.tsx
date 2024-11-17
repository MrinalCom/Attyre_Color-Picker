import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#E91E63] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">attyre</h2>
            <p className="mb-4">Reach out to us on info@attyre.app</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:opacity-80">
                <Linkedin size={24} />
              </a>
              <a href="#" className="hover:opacity-80">
                <Instagram size={24} />
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="space-y-2">
              <a href="#" className="block hover:opacity-80">Explore</a>
              <a href="#" className="block hover:opacity-80">Creators</a>
              <a href="#" className="block hover:opacity-80">Curations</a>
            </div>
            <div className="space-y-2 mt-4 md:mt-0">
              <a href="#" className="block hover:opacity-80">Find the Fit</a>
              <a href="#" className="block hover:opacity-80">Terms</a>
              <a href="#" className="block hover:opacity-80">Privacy</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2024 Attyre India Pvt. Ltd. All rights reserved.</p>
            <div className="mt-4 md:mt-0 space-x-4">
              <a href="#" className="hover:opacity-80">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                     alt="App Store" 
                     className="h-8 inline-block" />
              </a>
              <a href="#" className="hover:opacity-80">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                     alt="Play Store" 
                     className="h-8 inline-block" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;