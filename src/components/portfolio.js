import React from 'react';
import portfolioItems from './projects';
// import Resume from './forms';

const Portfolio = () => {
  return (
    <section className="bg-gray-200 py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Portfolio</h2>
        <div className="grid grid-cols-2 gap-4">
          {portfolioItems.map((item, index) => (
            <div key={index} className="border p-4 rounded">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Portfolio;
