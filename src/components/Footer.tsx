import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0b0f1a] text-white py-8">
      <div className="container mx-auto px-6">

        {/* Bottom Section Only */}
        <div className="text-center text-gray-400">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-red-600" /> by Kishore Balaji P
          </p>
          <p className="mt-2 text-sm">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
