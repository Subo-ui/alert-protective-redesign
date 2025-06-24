import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer: React.FC = () => {
  const socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/alertprotectiveservicesllc', icon: <FaFacebook className="w-6 h-6" /> },
    { name: 'X', url: 'https://www.x.com/AlertProtective', icon: <FaXTwitter className="w-6 h-6" /> },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/alert-protective-inc/', icon: <FaLinkedin className="w-6 h-6" /> },
  ];

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Alert Protective</h3>
            <p className="text-gray-400">
              Chicagoland's trusted source for home and commercial security since 1982.
            </p>
          </div>

          {/* Sitemap */}
          <div>
            <h3 className="text-xl font-bold mb-4">Sitemap</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">Resources</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">Support</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-400">
              <p>2915 W Montrose Ave</p>
              <p>Chicago, IL 60618</p>
              <p className="mt-4">
                <a href="tel:773-685-8383" className="hover:text-white">(773) 685-8383</a>
              </p>
              <p>
                <a href="mailto:info@alertprotective.com" className="hover:text-white">info@alertprotective.com</a>
              </p>
            </address>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a key={link.name} href={link.url} className="text-gray-400 hover:text-white">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Alert Protective Co. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 