import React from 'react';

const Contact = () => {
  const recipientEmail = 'tomarmenta86@gmail.com';
  
  return (
    <section className="bg-primary px-12 py-12">
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
        <a
              href={`mailto:${recipientEmail}`}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Open Email App
            </a>
        </div>
      </form>
    </div>
  </section>
  );
};

export default Contact;
