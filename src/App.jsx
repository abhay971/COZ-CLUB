import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Producers from './pages/connect/Producers';
import Membership from './pages/connect/Membership';
import Providers from './pages/connect/Providers';
import ExportManagement from './pages/consult/ExportManagement';
import ProjectManagement from './pages/consult/ProjectManagement';
import OperationsManagement from './pages/consult/OperationsManagement';
import BusinessProcesses from './pages/coserve/BusinessProcesses';
import PredictiveAnalysis from './pages/coserve/PredictiveAnalysis';
import ArtificialIntelligence from './pages/coserve/ArtificialIntelligence';
import MyCompass from './pages/my account/MyCompass';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import About from './pages/About';
import TermsOfUse from './pages/TermsOfUse';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import CancellationPolicy from './pages/CancellationPolicy';

// Additional Page Components for Footer Routes
// const About = () => (
//   <div className="min-h-screen bg-gray-50 p-8">
//     <div className="max-w-4xl mx-auto">
//       <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
//       <p className="text-lg text-gray-600">Learn more about our company and mission.</p>
//     </div>
//   </div>
// );

// const Contact = () => (
//   <div className="min-h-screen bg-gray-50 p-8">
//     <div className="max-w-4xl mx-auto">
//       <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
//       <p className="text-lg text-gray-600">Get in touch with our team.</p>
//     </div>
//   </div>
// );

// const WhyIndia = () => (
//   <div className="min-h-screen bg-gray-50 p-8">
//     <div className="max-w-4xl mx-auto">
//       <h1 className="text-4xl font-bold text-gray-800 mb-6">Why India?</h1>
//       <p className="text-lg text-gray-600">Discover the advantages of choosing India for your business.</p>
//     </div>
//   </div>
// );

// const TermsOfUse = () => (
//   <div className="min-h-screen bg-gray-50 p-8">
//     <div className="max-w-4xl mx-auto">
//       <h1 className="text-4xl font-bold text-gray-800 mb-6">Terms of Use</h1>
//       <p className="text-lg text-gray-600">Please read these terms carefully before using our services.</p>
//     </div>
//   </div>
// );

// const PrivacyPolicy = () => (
//   <div className="min-h-screen bg-gray-50 p-8">
//     <div className="max-w-4xl mx-auto">
//       <h1 className="text-4xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
//       <p className="text-lg text-gray-600">Your privacy is important to us. Learn how we protect your data.</p>
//     </div>
//   </div>
// );

// const RefundPolicy = () => (
//   <div className="min-h-screen bg-gray-50 p-8">
//     <div className="max-w-4xl mx-auto">
//       <h1 className="text-4xl font-bold text-gray-800 mb-6">Refund Policy</h1>
//       <p className="text-lg text-gray-600">Information about our refund and return policies.</p>
//     </div>
//   </div>
// );

// const CancellationPolicy = () => (
//   <div className="min-h-screen bg-gray-50 p-8">
//     <div className="max-w-4xl mx-auto">
//       <h1 className="text-4xl font-bold text-gray-800 mb-6">Cancellation Policy</h1>
//       <p className="text-lg text-gray-600">Learn about our cancellation terms and conditions.</p>
//     </div>
//   </div>
// );

// 404 Page
const NotFound = () => (
  <div className="min-h-screen bg-gray-50 p-8">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-6">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600">The page you're looking for doesn't exist.</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Connect Routes */}
          <Route path="/connect/membership" element={<Membership />} />
          <Route path="/connect/producers" element={<Producers />} />
          <Route path="/connect/providers" element={<Providers />} />
          
          {/* Consult Routes */}
          <Route path="/consult/export-management" element={<ExportManagement />} />
          <Route path="/consult/project-management" element={<ProjectManagement />} />
          <Route path="/consult/operations-management" element={<OperationsManagement />} />
          
          {/* CoServe Routes */}
          <Route path="/coserve/business-processes" element={<BusinessProcesses />} />
          <Route path="/coserve/predictive-analysis" element={<PredictiveAnalysis />} />
          <Route path="/coserve/artificial-intelligence" element={<ArtificialIntelligence />} />

          {/* My Account Routes */}
          <Route path="/myaccount/mycompass" element={<MyCompass />} />
          
          {/* Footer Routes */}
          {/* <Route path="/why-india" element={<WhyIndia />} /> */}
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/cancellation-policy" element={<CancellationPolicy />} />
          
          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;