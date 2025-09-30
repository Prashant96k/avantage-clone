export default function Contact() {
  return (
    <section
      className="py-20 text-white relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #001731 0%, #00426F 50%, #0D76B1 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
        <form className="grid gap-6 max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded bg-white/10 text-white border border-white/30 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded bg-white/10 text-white border border-white/30 focus:outline-none"
          />
          <textarea
            rows={4}
            placeholder="Your Message"
            className="p-4 rounded bg-white/10 text-white border border-white/30 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-white text-black py-3 px-6 rounded font-semibold hover:bg-gray-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
