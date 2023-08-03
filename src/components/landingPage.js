import React from 'react';

const LandingPage = () => {
  return (
    <div>
      {/* Header */}
      <header className="bg-gray-800 text-white py-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Welcome to My Portfolio</h1>
        </div>
      </header>

      {/* About Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec
            elit non risus interdum tincidunt id ac odio. Nullam egestas
            ullamcorper turpis at pharetra.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4">Portfolio</h2>
          <div className="grid grid-cols-2 gap-4">
            {/* Add portfolio items here */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <form className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold">Name:</label>
              <input
                type="text"
                className="border p-2 rounded w-full"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block font-semibold">Email:</label>
              <input
                type="email"
                className="border p-2 rounded w-full"
                placeholder="Your Email"
              />
            </div>
            <div className="col-span-2">
              <label className="block font-semibold">Message:</label>
              <textarea
                className="border p-2 rounded w-full"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="col-span-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto">
          <p className="text-center">
            © {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
