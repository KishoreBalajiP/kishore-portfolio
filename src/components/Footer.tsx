import { Download, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Kishore Balaji P</h3>
            <p className="text-gray-400">Software Developer</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all hover:scale-105 shadow-lg">
              <Download size={20} />
              Download Complete Portfolio
            </button>
            <p className="text-gray-400 text-sm">Get PDF or ZIP with all documents</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-red-500" /> by Kishore Balaji P
          </p>
          <p className="mt-2 text-sm">© 2024 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
