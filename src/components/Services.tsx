type Service = { title: string; desc: string; icon?: string };
const services: Service[] = [
  // Fill with exact service names & blurbs (authorized)
  { title: "Brand Strategy", desc: "…" },
  { title: "Web Development", desc: "…" },
  { title: "Digital Marketing", desc: "…" },
  { title: "Creative Design", desc: "…" },
  { title: "Content Creation", desc: "…" },
  { title: "Consulting", desc: "…" },
];

export default function Services() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="p-8 bg-gray-100 rounded-2xl shadow hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
