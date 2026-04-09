import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Facebook } from "lucide-react";
import tecoNicoLogo from "../../Assets/teconico_logo.png";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={tecoNicoLogo} alt="TecoNico" className="h-10 w-auto" />
              <span className="text-2xl font-bold text-white">TecoNico</span>
            </div>
            <p className="text-slate-400 mb-6">
              Home automation experiences powered by TecoHome devices and the TecoNico platform.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/teconicopvtltd/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/67183393/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://x.com/Teconicopvtltd" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/teconicopvtltd" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="/#products" className="hover:text-emerald-400 transition-colors">TecoHome Smart Switch System</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="/team" className="hover:text-emerald-400 transition-colors">Our Team</a></li>
              <li><a href="/#how-it-works" className="hover:text-emerald-400 transition-colors">How It Works</a></li>
              <li><a href="/#features" className="hover:text-emerald-400 transition-colors">Features</a></li>
              <li><a href="/#products" className="hover:text-emerald-400 transition-colors">TecoHome Product</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-400">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:developer@teconico.in" className="hover:text-emerald-400 transition-colors">developer@teconico.in</a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a href="tel:+919785911656" className="hover:text-emerald-400 transition-colors">+91 97859 11656</a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Jaipur, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500">© 2026 TecoNico. All rights reserved.</p>
            <div className="flex gap-6 text-slate-500">
              <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
