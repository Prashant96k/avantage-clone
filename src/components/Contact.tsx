"use client";
export default function Contact() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
        <form className="grid gap-6 max-w-2xl mx-auto">
          {/* Replace placeholders with exact labels/placeholders if required */}
          <input type="text" placeholder="Your Name" className="p-4 rounded bg-gray-800 text-white focus:outline-none" />
          <input type="email" placeholder="Your Email" className="p-4 rounded bg-gray-800 text-white focus:outline-none" />
          <textarea rows={4} placeholder="Your Message" className="p-4 rounded bg-gray-800 text-white focus:outline-none" />
          <button type="submit" className="bg-red-600 hover:bg-red-700 py-3 px-6 rounded font-semibold">Send Message</button>
        </form>
      </div>
    </section>
  );
}
