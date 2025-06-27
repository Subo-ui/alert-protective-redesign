import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Payment from './pages/Payment';
import Quote from './pages/Quote';
import AlarmSystem from './pages/HomeServices/AlarmSystem';
import HomeAutomation from './pages/HomeServices/HomeAutomation';
import VideoSurveillance from './pages/HomeServices/VideoSurveillance';
import HomeAlarmMonitoring from './pages/HomeServices/AlarmMonitoring';
import CommercialAlarmSystem from './pages/CommercialServices/CommercialAlarmSystem';
import FireAlarmSystem from './pages/CommercialServices/FireAlarmSystem';
import CommercialVideoSurveillance from './pages/CommercialServices/VideoSurveillance';
import AccessControl from './pages/CommercialServices/AccessControl';
import CommercialAlarmMonitoring from './pages/CommercialServices/AlarmMonitoring';
import SideNav from './components/SideNav';
import Footer from './components/Footer';
import BottomChatWidget from './components/BottomChatWidget';
import ScrollToTop from './components/utils/ScrollToTop';
import AboutUs from './pages/About';
import AuroraTest from './components/AuroraTest';
import { AuroraBackground } from './components/AuroraBackground';
// import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative font-sans flex flex-col min-h-screen overflow-x-hidden">
        {/* Aurora background as a global layer */}
        <div className="absolute inset-0 -z-10">
          <AuroraBackground>{null}</AuroraBackground>
        </div>
        <Header />
        <main className="flex-grow pt-28">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/home-services/alarm-system" element={<AlarmSystem />} />
            <Route path="/home-services/home-automation" element={<HomeAutomation />} />
            <Route path="/home-services/video-surveillance" element={<VideoSurveillance />} />
            <Route path="/home-services/alarm-monitoring" element={<HomeAlarmMonitoring />} />
            <Route path="/commercial-services/alarm-system" element={<CommercialAlarmSystem />} />
            <Route path="/commercial-services/fire-alarm-system" element={<FireAlarmSystem />} />
            <Route path="/commercial-services/video-surveillance" element={<CommercialVideoSurveillance />} />
            <Route path="/commercial-services/access-control" element={<AccessControl />} />
            <Route path="/commercial-services/alarm-monitoring" element={<CommercialAlarmMonitoring />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/test-aurora" element={<AuroraTest />} />
          </Routes>
        </main>
        <SideNav />
        <BottomChatWidget />
        <Footer />
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
