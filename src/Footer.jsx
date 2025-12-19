import { MapPin, Mail, Phone, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-black
 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo / About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">SikkimSphere</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Discover Sikkim’s monasteries through immersive virtual tours, 
            cultural stories, and interactive experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-purple-300 transition">Home</a></li>
            <li><a href="#explore" className="hover:text-purple-300 transition">Explore Monasteries</a></li>
            <li><a href="#events" className="hover:text-purple-300 transition">Events</a></li>
            <li><a href="#about" className="hover:text-purple-300 transition">About Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Gangtok, Sikkim, India
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> support@sikkimsphere.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +91 98765 43210
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-pink-400 transition"><Instagram size={22} /></a>
            <a href="#" className="hover:text-blue-400 transition"><Facebook size={22} /></a>
            <a href="#" className="hover:text-sky-400 transition"><Twitter size={22} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} SikkimSphere. All rights reserved.
      </div>
    </footer>
  );
}
