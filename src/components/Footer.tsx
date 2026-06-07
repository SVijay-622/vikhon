"use client";
import { Mail, MapPin, MessageCircle, ExternalLink, Camera, Share2, GitBranch } from "lucide-react";

const QUICK_LINKS = ["Services", "Portfolio", "About", "Contact"];
const SERVICES = [
  "Web Development",
  "UI/UX Design",
  "Graphic Design",
  "Mobile Apps",
  "Digital Marketing",
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#080808] border-t border-zinc-900">
      {/* Top indigo gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="font-black text-2xl tracking-[0.3em] uppercase mb-4" style={{ color: "#C9A84C" }}>
              VIKHON
            </div>
            <p className="text-zinc-600 text-sm leading-relaxed mb-6 max-w-xs">
              Where Service Meets The Extraordinary. Premium digital solutions crafted with passion and precision.
            </p>
            <div className="flex gap-2">
              {[
                { icon: Camera, href: "#", label: "Instagram" },
                { icon: Share2, href: "#", label: "LinkedIn" },
                { icon: GitBranch, href: "#", label: "GitHub" },
                { icon: ExternalLink, href: "https://fiverr.com/vijayandiran", label: "Fiverr" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-zinc-800 flex items-center justify-center text-zinc-600 hover:text-indigo-400 hover:border-indigo-500/40 hover:bg-indigo-500/5 transition-all duration-300"
                  style={{ cursor: "none" }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.4em] uppercase text-zinc-400 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link)}
                    className="text-sm text-zinc-600 hover:text-indigo-400 transition-colors flex items-center gap-2 group"
                    style={{ cursor: "none" }}
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-indigo-500 transition-all duration-300 flex-shrink-0" />
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.4em] uppercase text-zinc-400 mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo("services")}
                    className="text-sm text-zinc-600 hover:text-indigo-400 transition-colors flex items-center gap-2 group"
                    style={{ cursor: "none" }}
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-indigo-500 transition-all duration-300 flex-shrink-0" />
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.4em] uppercase text-zinc-400 mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              {[
                { icon: Mail, text: "hello@vikhon.com", href: "mailto:hello@vikhon.com" },
                { icon: MessageCircle, text: "+91 80560 58965", href: "https://wa.me/918056058965" },
                { icon: MapPin, text: "Chennai, Tamil Nadu, India", href: null },
                { icon: ExternalLink, text: "fiverr.com/vijayandiran", href: "https://fiverr.com/vijayandiran" },
              ].map(({ icon: Icon, text, href }) =>
                href ? (
                  <li key={text}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-3 text-sm text-zinc-600 hover:text-indigo-400 transition-colors group"
                      style={{ cursor: "none" }}
                    >
                      <Icon size={14} className="text-indigo-500/40 group-hover:text-indigo-400 flex-shrink-0 transition-colors" />
                      {text}
                    </a>
                  </li>
                ) : (
                  <li key={text} className="flex items-center gap-3 text-sm text-zinc-600">
                    <Icon size={14} className="text-zinc-700 flex-shrink-0" />
                    {text}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-zinc-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-zinc-700">
            © 2026 <span className="text-indigo-500">VIKHON</span>. All rights reserved.
          </p>
          <p className="text-xs tracking-widest uppercase text-zinc-800">
            Where Service Meets The Extraordinary
          </p>
          <div className="flex gap-5">
            {["Privacy", "Terms"].map((t) => (
              <a
                key={t}
                href="#"
                className="text-xs text-zinc-700 hover:text-indigo-400 transition-colors"
                style={{ cursor: "none" }}
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
