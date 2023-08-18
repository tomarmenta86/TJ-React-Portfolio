import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background text-white py-4 rounded-lg">
      <div className="container mx-auto">
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/tomarmenta86"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500"
          >
            <i className="fab fa-github-square text-2xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin-usernamehttps://www.linkedin.com/in/thomas-armenta-0a4921265/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500"
          >
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
        </div>
        <p className="text-center mt-4">
          © {new Date().getFullYear()} TJSanmai. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
