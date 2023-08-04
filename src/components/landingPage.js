import React from 'react';
import Footer from './footer';
import Header from './header';
import Contact from './contact';
import Portfolio from './portfolio';
import AboutMe from './aboutMe';

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
    {/* Header */}
    <Header />

    {/* About Section */}
    <div className="bg-white py-12">
      <div className="container mx-auto">
        <AboutMe />
      </div>
    </div>

    {/* Portfolio Section */}
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <Portfolio />
      </div>
    </div>

    {/* Contact Section */}
    <div className="bg-white py-12">
      <div className="container mx-auto">
        <Contact />
      </div>
    </div>

    {/* Footer */}
    <Footer />
  </div>
);
};


export default LandingPage;
