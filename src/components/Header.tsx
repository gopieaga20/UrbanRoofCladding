
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/products', label: 'Products' },
  { to: '/applications', label: 'Applications' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `font-bold transition-colors text-lg relative ${
    isActive
      ? 'font-extrabold border-b-2 pb-1'
      : 'text-gray-800 hover:text-[#11a9df]'
  }`;

const linkStyle = ({ isActive }: { isActive: boolean }) =>
  isActive ? { color: '#11a9df', borderColor: '#11a9df' } : {};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleGetQuote = () => {
    window.open('https://wa.me/919384818299?text=Hi, I would like to get a quote for roofing services.', '_blank');
  };

  const handleCallNow = () => {
    window.location.href = 'tel:+919384818299';
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-[#11a9df] to-[#0ea5db] text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span className="hover:underline cursor-pointer font-bold text-white" onClick={handleCallNow}>+91 9384818299</span>
            </div>
            <div className="hidden sm:flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span
                className="hover:underline cursor-pointer font-bold text-white"
                onClick={() => window.location.href = 'mailto:urbanroofingandcladding@gmail.com'}
              >
                urbanroofingandcladding@gmail.com
              </span>
            </div>
          </div>
          <div className="hidden md:flex space-x-2">
            <Button
              size="sm"
              onClick={handleGetQuote}
              className="bg-white text-[#11a9df] hover:bg-gray-100 font-bold shadow-md border-2 border-white"
            >
              Get Quote
            </Button>
            <Button
              size="sm"
              onClick={handleCallNow}
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold shadow-md"
            >
              Call Now
            </Button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <NavLink to="/" onClick={handleNavClick} className="flex items-center space-x-3">
            <img
              src="/lovable-uploads/ddfadf40-9e47-4252-a913-1c0e1569a45f.png"
              alt="Urban Roofing and Cladding Solutions"
              className="h-20 w-auto"
            />
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold" style={{ color: '#11a9df' }}>URBAN ROOFING</h1>
              <p className="text-2xl font-bold" style={{ color: '#11a9df' }}>AND CLADDING SOLUTIONS</p>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={handleNavClick}
                className={linkClass}
                style={linkStyle}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  onClick={handleNavClick}
                  className={linkClass}
                  style={linkStyle}
                >
                  {label}
                </NavLink>
              ))}
              <div className="flex space-x-2 pt-4">
                <Button
                  size="sm"
                  className="font-bold bg-white border-2 text-[#11a9df] hover:bg-[#11a9df] hover:text-white transition-colors"
                  style={{ borderColor: '#11a9df' }}
                  onClick={handleGetQuote}
                >
                  Get Quote
                </Button>
                <Button
                  size="sm"
                  onClick={handleCallNow}
                  className="font-bold bg-orange-600 hover:bg-orange-700 text-white"
                >
                  Call Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
