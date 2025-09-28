export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <h4 className="font-bold text-white mb-2">Avantage Clone</h4>
          <p className="text-sm text-slate-400">© 2025 All rights reserved.</p>
        </div>
        <div>
          <h4 className="font-bold text-white mb-2">Company</h4>
          <ul className="space-y-1 text-sm text-slate-400">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-2">Follow Us</h4>
          <ul className="space-y-1 text-sm text-slate-400">
            <li><a href="#" className="hover:text-white">LinkedIn</a></li>
            <li><a href="#" className="hover:text-white">Twitter</a></li>
            <li><a href="#" className="hover:text-white">Facebook</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
