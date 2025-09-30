const testimonials = [
  { name: "John Doe", role: "CEO", text: "They grew our business fast." },
  { name: "Jane Smith", role: "CMO", text: "Creative, reliable, impactful." },
  { name: "Raj Patel", role: "Founder", text: "Exactly what we needed." },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <p className="text-gray-600 mb-4">“{t.text}”</p>
              <h3 className="font-semibold">{t.name}</h3>
              <span className="text-sm text-gray-500">{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
