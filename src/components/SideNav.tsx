import React, { useState, useRef } from 'react';
import {
    PencilSquareIcon,
    CreditCardIcon,
    WrenchScrewdriverIcon,
    CurrencyDollarIcon
} from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

interface SideNavLinkProps {
    href: string;
    icon: React.ElementType;
    text: string;
}

const SideNavLink: React.FC<SideNavLinkProps> = ({ href, icon: Icon, text }) => (
    <Link to={href} className="flex items-center p-3 text-white hover:bg-red-700 transition-colors duration-300 w-full overflow-hidden">
        <Icon className="h-6 w-6 flex-shrink-0" />
        <span className="ml-4 text-xs font-bold uppercase tracking-wider">{text}</span>
    </Link>
);

const SideNav: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const timerRef = useRef<number | null>(null);

    const navLinks = [
        { href: "/contact", icon: PencilSquareIcon, text: "Quote" },
        { href: "#", icon: CreditCardIcon, text: "Billing" },
        { href: "#", icon: WrenchScrewdriverIcon, text: "Service" },
        { href: "/payment", icon: CurrencyDollarIcon, text: "Payment" },
    ];
    
    const handleMouseEnter = () => {
        timerRef.current = window.setTimeout(() => {
          setIsExpanded(true);
        }, 1000);
      };
    
      const handleMouseLeave = () => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
          timerRef.current = null;
        }
        setIsExpanded(false);
      };

    return (
        <div 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`fixed top-1/2 -translate-y-1/2 right-0 bg-deep-red text-white flex flex-col items-start justify-center rounded-l-md shadow-lg z-50 transition-transform duration-180 ${isExpanded ? 'translate-x-0 bg-opacity-100' : 'translate-x-[calc(100%-2.5rem)] bg-opacity-60'}`}
        >
            {navLinks.map((link, index) => (
                 <React.Fragment key={index}>
                    <Link to={link.href} className="flex items-center px-2 py-2 text-white hover:bg-red-700 transition-colors duration-150 w-full overflow-hidden">
                        <link.icon className="h-6 w-6 flex-shrink-0" />
                        {isExpanded && <span className="ml-2 text-xs font-bold uppercase tracking-wider">{link.text}</span>}
                    </Link>
                    {index < navLinks.length - 1 && <div className="w-4/5 h-px bg-red-400 opacity-50 ml-3"></div>}
                </React.Fragment>
            ))}
        </div>
    );
};

export default SideNav; 