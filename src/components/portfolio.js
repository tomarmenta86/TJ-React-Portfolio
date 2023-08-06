import React from 'react';
import portfolioItems from './projects';


const Portfolio = () => {
  return (
    <section className="bg-tertiary px-3 py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Portfolio</h2>
        <div className="grid grid-cols-2 gap-4">
          {portfolioItems.map((item, index) => (
            <div key={index} className="border p-4 rounded mb-11">
              <h3 className="text-xl font-semibold mb-">{item.title}</h3>
              <p>{item.description}</p>
              <img src={item.imageUrl} alt={item.title} className="w-full mb-2" />
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline border p-3 container rounded bg-background">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Portfolio;
