import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import mainLogo from '../assets/images/logo-main.png';
import { ShieldCheckIcon, PhoneIcon, WrenchScrewdriverIcon, ChevronDownIcon, ComputerDesktopIcon, HomeIcon, VideoCameraIcon, BellAlertIcon, Squares2X2Icon, BuildingOffice2Icon, FireIcon, KeyIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

interface NavItem {
    name: string;
    link: string;
    icon?: React.ElementType;
}

interface NavLinkProps {
    children: React.ReactNode;
    dropdownItems: NavItem[];
    align?: 'left' | 'center';
}

const NavLink = ({ children, dropdownItems, align = 'center' }: NavLinkProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const alignmentClasses = align === 'left' ? 'left-0' : 'left-1/2 -translate-x-1/2';

    return (
        <div 
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            data-testid="nav-link-container"
        >
            <a href="#" className="flex items-center hover:text-deep-red py-4">
              <span>{children}</span>
              <ChevronDownIcon className={`h-4 w-4 ml-1 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
            </a>
            {isOpen && (
                 <div className={`absolute top-full w-60 bg-white shadow-lg rounded-md z-50 border border-gray-200 pt-2 ${alignmentClasses}`}
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                 >
                    <div className="p-2">
                        {dropdownItems.map((item) => (
                             <Link key={item.name} to={item.link} className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                                {item.icon && <item.icon className="h-5 w-5 mr-3 text-deep-red" />}
                                <span>{item.name}</span>
                            </Link>
                        ))}
                    </div>
                 </div>
            )}
        </div>
    )
}

const Header: React.FC = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        lastScrollY.current = window.scrollY;
        const handleScroll = () => {
            if (window.scrollY < 50) {
                setShowHeader(true);
                lastScrollY.current = window.scrollY;
                return;
            }
            if (window.scrollY > lastScrollY.current) {
                setShowHeader(false); // scrolling down
            } else {
                setShowHeader(true); // scrolling up
            }
            lastScrollY.current = window.scrollY;
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent background scrolling when mobile nav is open
    useEffect(() => {
        if (mobileNavOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileNavOpen]);

    const homeServices: NavItem[] = [
        { name: 'Alarm System', icon: ComputerDesktopIcon, link: '/home-services/alarm-system' },
        { name: 'Home Automation', icon: HomeIcon, link: '/home-services/home-automation' },
        { name: 'Video Surveillance', icon: VideoCameraIcon, link: '/home-services/video-surveillance' },
        { name: 'Alarm Monitoring', icon: BellAlertIcon, link: '/home-services/alarm-monitoring' },
        { name: 'All Home Options', icon: Squares2X2Icon, link: '#' },
    ];

    const commercialServices: NavItem[] = [
        { name: 'Alarm Systems', icon: ShieldCheckIcon, link: '/commercial-services/alarm-system' },
        { name: 'Fire Alarm Systems', icon: FireIcon, link: '/commercial-services/fire-alarm-system' },
        { name: 'Video Surveillance', icon: VideoCameraIcon, link: '/commercial-services/video-surveillance' },
        { name: 'Access Control', icon: KeyIcon, link: '/commercial-services/access-control' },
        { name: 'Alarm Monitoring', icon: BellAlertIcon, link: '/commercial-services/alarm-monitoring' },
        { name: 'All Commercial Services', icon: Squares2X2Icon, link: '#'},
    ];

    const resources: NavItem[] = [
        { name: 'About Us', icon: InformationCircleIcon, link: '/about-us' },
        { name: 'FAQ', link: '#' },
        { name: 'Reviews', link: '#' },
        { name: 'Contact Us', link: '/contact' },
        { name: 'Refund and Returns Policy', link: '#' },
    ];

    return (
        <header className={`bg-white shadow-soft z-50 transition-transform duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-full'} fixed w-full left-0 top-0`}>
            <div className="container mx-auto px-4 sm:px-6">
                {/* Top Section */}
                <div className="flex flex-col sm:flex-row justify-between items-center py-2 gap-2 sm:gap-0">
                    <div className="flex items-center w-full sm:w-auto justify-between">
                        <Link to="/">
                            <img src={mainLogo} alt="Alert Protective Logo" className="h-12 sm:h-16" />
                        </Link>
                        {/* Hamburger for mobile */}
                        <button
                            className="sm:hidden p-2 ml-2 text-gray-700 focus:outline-none"
                            onClick={() => setMobileNavOpen((open) => !open)}
                            aria-label="Toggle navigation"
                        >
                            <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                    <div className="hidden sm:flex items-center space-x-6 text-sm">
                        <div className="flex items-center text-gray-600">
                            <ShieldCheckIcon className="h-6 w-6 text-deep-red mr-2" />
                            <span className="text-base md:text-xl font-medium text-navy">
                                Protecting the Midwest <span className="font-extrabold">Since 1982</span>
                            </span>
                        </div>
                        <div className="hidden md:flex items-center space-x-2 ml-4">
                            <img src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/us.svg" alt="US Flag" className="h-5 w-7 object-cover rounded-sm" />
                            <img src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/pl.svg" alt="Polish Flag" className="h-5 w-7 object-cover rounded-sm" />
                            <img src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/es.svg" alt="Spanish Flag" className="h-5 w-7 object-cover rounded-sm" />
                        </div>
                        <a href="tel:855-433-6700" className="flex items-center text-gray-600 hover:text-deep-red font-semibold">
                            <PhoneIcon className="h-5 w-5 mr-2" />
                            <span>(855) 433-6700</span>
                        </a>
                        <a href="#" className="flex items-center text-gray-600 hover:text-deep-red font-semibold">
                            <WrenchScrewdriverIcon className="h-5 w-5 mr-2" />
                            <span>Get Support</span>
                        </a>
                    </div>
                </div>
                {/* Bottom Navigation Section */}
                <div className="hidden sm:flex justify-between items-center border-t border-gray-200 mt-2">
                    <div className="flex items-center space-x-8 font-medium text-gray-700">
                        <NavLink dropdownItems={homeServices} align="left"><Link to="/">Home Services</Link></NavLink>
                        <NavLink dropdownItems={commercialServices}><Link to="/commercial-services/alarm-system">Commercial Services</Link></NavLink>
                        <NavLink dropdownItems={resources}><Link to="/about-us">Resources</Link></NavLink>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link to="/payment" className="text-gray-600 hover:text-deep-red font-medium px-4 py-2 rounded-md bg-gray-100">Make A Payment</Link>
                        <Link to="/quote" className="bg-deep-red text-white px-5 py-2 rounded-md font-semibold hover:bg-red-700 shadow-md">Free Security System Quote</Link>
                    </div>
                </div>
                {/* Mobile Navigation Drawer */}
                {mobileNavOpen && (
                    <div className="sm:hidden fixed inset-0 bg-black bg-opacity-40 z-50" onClick={() => setMobileNavOpen(false)}>
                        <div
                            className="fixed top-0 left-0 w-full max-w-none h-full shadow-lg z-50 p-6 flex flex-col gap-6 border-r border-gray-200 bg-white/95 backdrop-blur-lg"
                            onClick={e => e.stopPropagation()}
                        >
                            <button className="self-end mb-4" onClick={() => setMobileNavOpen(false)} aria-label="Close menu">
                                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <div className="bg-white/90 rounded-xl shadow-lg p-4 flex flex-col gap-4 font-medium text-gray-700 backdrop-blur-md">
                                <span className="text-xs text-gray-400 uppercase">Home Services</span>
                                {homeServices.map(item => (
                                    <Link key={item.name} to={item.link} className="flex items-center py-2" onClick={() => setMobileNavOpen(false)}>
                                        {item.icon && <item.icon className="h-5 w-5 mr-3 text-deep-red" />}
                                        {item.name}
                                    </Link>
                                ))}
                                <span className="text-xs text-gray-400 uppercase mt-4">Commercial Services</span>
                                {commercialServices.map(item => (
                                    <Link key={item.name} to={item.link} className="flex items-center py-2" onClick={() => setMobileNavOpen(false)}>
                                        {item.icon && <item.icon className="h-5 w-5 mr-3 text-deep-red" />}
                                        {item.name}
                                    </Link>
                                ))}
                                <span className="text-xs text-gray-400 uppercase mt-4">Resources</span>
                                {resources.map(item => (
                                    <Link key={item.name} to={item.link} className="flex items-center py-2" onClick={() => setMobileNavOpen(false)}>
                                        {item.icon && <item.icon className="h-5 w-5 mr-3 text-deep-red" />}
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="mt-6 flex flex-col gap-3">
                                <Link to="/payment" className="text-gray-600 hover:text-deep-red font-medium px-4 py-2 rounded-md bg-gray-100" onClick={() => setMobileNavOpen(false)}>Make A Payment</Link>
                                <Link to="/quote" className="bg-deep-red text-white px-5 py-2 rounded-md font-semibold hover:bg-red-700 shadow-md" onClick={() => setMobileNavOpen(false)}>Free Security System Quote</Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header; 