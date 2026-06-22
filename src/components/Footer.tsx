
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t-4" style={{ borderColor: '#11a9df' }}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/ddfadf40-9e47-4252-a913-1c0e1569a45f.png" 
                alt="Urban Roofing and Cladding Solutions" 
                className="h-16 w-auto"
              />
              <div className="flex flex-col">
                <h1 className="text-xl font-bold" style={{ color: '#11a9df' }}>URBAN ROOFING</h1>
                <p className="text-xl font-bold" style={{ color: '#11a9df' }}>AND CLADDING SOLUTIONS</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Professional roofing and cladding solutions for residential, commercial, and industrial projects.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5" style={{ color: '#11a9df' }} />
                <span>+91 9384818299 / 98 / 97 / 96</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5" style={{ color: '#11a9df' }} />
                <span>urbanroofingandcladding@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex space-x-2">
                  <a 
                    href="https://www.facebook.com/profile.php?id=61578285023663" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-700 text-white p-2 rounded-lg hover:bg-blue-800 transition-colors"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a 
                    href="https://www.instagram.com/urbanroofing_2024/#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-pink-600 text-white p-2 rounded-lg hover:bg-pink-700 transition-colors"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Address Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Locations</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1" style={{ color: '#11a9df' }} />
                <div>
                  <p className="font-medium">Registered Office:</p>
                  <p className="text-gray-300 text-sm">
                    Flat No.58, Karnavur Road, Peerangimedu, Tindivanam, Tamil Nadu – 604001
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1" style={{ color: '#11a9df' }} />
                <div>
                  <p className="font-medium">Sales Office:</p>
                  <p className="text-gray-300 text-sm">
                    No.2/20, Vanniyar Mettustreet, Iyyappanthangal, Chennai – 600056
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Urban Roofing and Cladding Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
