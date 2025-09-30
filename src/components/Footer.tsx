export default function Footer() {
  return (
    <footer
      className="text-white py-6"
      style={{
        background:
          "linear-gradient(135deg, #001731 0%, #00426F 50%, #0D76B1 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p>&copy; {new Date().getFullYear()} L4RG. All Rights Reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-300">Facebook</a>
          <a href="#" className="hover:text-gray-300">Instagram</a>
          <a href="#" className="hover:text-gray-300">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
