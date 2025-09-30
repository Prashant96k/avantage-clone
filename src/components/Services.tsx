const services = [
  { title: "Brand Strategy", desc: "Shaping your identity to stand out." },
  { title: "Web Development", desc: "Modern and user-focused websites." },
  { title: "Digital Marketing", desc: "Performance-driven campaigns." },
  { title: "Creative Design", desc: "Bold visuals for your brand." },
  { title: "Content Creation", desc: "Engaging stories that connect." },
  { title: "Consulting", desc: "Guidance to help your brand scale." },
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <div
              key={idx}
              className="p-8 bg-white rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
