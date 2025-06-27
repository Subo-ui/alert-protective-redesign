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
    <footer className="bg-white/90 backdrop-blur-md border-t border-slate-200 text-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">Alert Protective</h3>
            <p className="text-slate-500">
              Chicagoland's trusted source for home and commercial security since 1982.
            </p>
          </div>

          {/* Sitemap */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">Sitemap</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-slate-500 hover:text-slate-900">Home</Link></li>
              <li><Link to="/services" className="text-slate-500 hover:text-slate-900">Services</Link></li>
              <li><Link to="/contact" className="text-slate-500 hover:text-slate-900">Contact</Link></li>
              <li><Link to="#" className="text-slate-500 hover:text-slate-900">Resources</Link></li>
              <li><Link to="#" className="text-slate-500 hover:text-slate-900">Support</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">Contact Us</h3>
            <address className="not-italic text-slate-500">
              <p>2915 W Montrose Ave</p>
              <p>Chicago, IL 60618</p>
              <p className="mt-4">
                <a href="tel:773-685-8383" className="hover:text-slate-900">(773) 685-8383</a>
              </p>
              <p>
                <a href="mailto:info@alertprotective.com" className="hover:text-slate-900">info@alertprotective.com</a>
              </p>
            </address>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a key={link.name} href={link.url} className="text-slate-500 hover:text-blue-600">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-6 text-center text-slate-400">
          <p>© {new Date().getFullYear()} Alert Protective Co. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 