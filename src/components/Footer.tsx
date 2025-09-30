import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p>&copy; {new Date().getFullYear()} L4RG. All Rights Reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-400"><FaFacebook /></a>
          <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
          <a href="#" className="hover:text-gray-400"><FaLinkedin /></a>
        </div>
      </div>
    </footer>
  );
}
