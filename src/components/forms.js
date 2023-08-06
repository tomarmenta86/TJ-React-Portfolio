import React from 'react';
import resumePdf from '../assets/TJ Resume - Portfolio.pdf';

const Resume = () => {
  return (
    <section className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <iframe src={resumePdf} title="Resume PDF" className="h-96 w-full" />
        </div>
        <div className="flex justify-center mt-4">
          <a
            href={resumePdf}
            download="TJ Resume.pdf"
            className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
