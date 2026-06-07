"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, MapPin, ExternalLink, Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const SERVICE_OPTIONS = [
  "Web Development",
  "UI/UX Design",
  "Graphic Design",
  "Mobile App",
  "Digital Marketing",
  "Other",
];

const BUDGET_OPTIONS = [
  "Under $100",
  "$100 - $500",
  "$500 - $1,000",
  "$1,000 - $5,000",
  "$5,000+",
];

type ToastState = { type: "success" | "error"; message: string } | null;

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState<ToastState>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSending(true);
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setToast({ type: "success", message: "Message sent! We'll reply within 24 hours." });
      formRef.current.reset();
    } catch {
      setToast({ type: "error", message: "Something went wrong. Please email us directly." });
    } finally {
      setSending(false);
      setTimeout(() => setToast(null), 5000);
    }
  };

  return (
    <section id="contact" className="py-32 px-4 bg-[#0A0A0A] relative">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-indigo-400 text-[11px] tracking-[0.5em] uppercase font-mono mb-4">
              GET IN TOUCH
            </p>
            <h2
              className="font-black leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
            >
              <span className="gradient-text">Let&rsquo;s build</span>
              <br />
              <span className="indigo-text">together</span>
            </h2>
            <p className="text-zinc-500 leading-relaxed mb-10 max-w-md">
              Have a project in mind? Drop us a message and we&rsquo;ll get
              back within 24 hours. No fluff — just a real conversation about
              your goals.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: Mail,
                  label: "hello@vikhon.com",
                  href: "mailto:hello@vikhon.com",
                  external: false,
                },
                {
                  icon: MessageCircle,
                  label: "+91 80560 58965",
                  href: "https://wa.me/918056058965",
                  external: true,
                },
                {
                  icon: MapPin,
                  label: "Chennai, Tamil Nadu, India",
                  href: null,
                  external: false,
                },
                {
                  icon: ExternalLink,
                  label: "fiverr.com/vijayandiran",
                  href: "https://fiverr.com/vijayandiran",
                  external: true,
                },
              ].map(({ icon: Icon, label, href, external }) =>
                href ? (
                  <a
                    key={label}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 group"
                    style={{ cursor: "none" }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/50 transition-all duration-300">
                      <Icon size={16} className="text-indigo-400" />
                    </div>
                    <span className="text-zinc-400 group-hover:text-white transition-colors text-sm">
                      {label}
                    </span>
                  </a>
                ) : (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-zinc-500" />
                    </div>
                    <span className="text-zinc-500 text-sm">{label}</span>
                  </div>
                )
              )}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="card-dark p-8 relative overflow-hidden">
              {/* Corner glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 relative">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-2 tracking-wider uppercase">
                      Name *
                    </label>
                    <input
                      name="user_name"
                      required
                      placeholder="Your name"
                      className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-indigo-500/60 focus:shadow-[0_0_15px_rgba(99,102,241,0.15)] transition-all duration-200"
                      style={{ cursor: "none" }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-2 tracking-wider uppercase">
                      Email *
                    </label>
                    <input
                      name="user_email"
                      type="email"
                      required
                      placeholder="hello@company.com"
                      className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-indigo-500/60 focus:shadow-[0_0_15px_rgba(99,102,241,0.15)] transition-all duration-200"
                      style={{ cursor: "none" }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-2 tracking-wider uppercase">
                      Service
                    </label>
                    <select
                      name="service"
                      className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-300 text-sm focus:outline-none focus:border-indigo-500/60 transition-all duration-200 appearance-none"
                      style={{ cursor: "none" }}
                    >
                      <option value="">Select service</option>
                      {SERVICE_OPTIONS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-2 tracking-wider uppercase">
                      Budget
                    </label>
                    <select
                      name="budget"
                      className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-300 text-sm focus:outline-none focus:border-indigo-500/60 transition-all duration-200 appearance-none"
                      style={{ cursor: "none" }}
                    >
                      <option value="">Select budget</option>
                      {BUDGET_OPTIONS.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-2 tracking-wider uppercase">
                    Project Description *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your project — the more detail, the better..."
                    className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-indigo-500/60 focus:shadow-[0_0_15px_rgba(99,102,241,0.15)] transition-all duration-200 resize-none"
                    style={{ cursor: "none" }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary w-full text-sm font-semibold flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ cursor: sending ? "not-allowed" : "none" }}
                >
                  <span className="flex items-center gap-2">
                    {sending ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Send Message
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>

            {/* Toast */}
            {toast && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10 }}
                className={`mt-4 p-4 rounded-xl flex items-center gap-3 text-sm font-medium border ${
                  toast.type === "success"
                    ? "bg-green-950/50 border-green-500/30 text-green-300"
                    : "bg-red-950/50 border-red-500/30 text-red-300"
                }`}
              >
                {toast.type === "success" ? (
                  <CheckCircle size={18} className="text-green-400 flex-shrink-0" />
                ) : (
                  <AlertCircle size={18} className="text-red-400 flex-shrink-0" />
                )}
                {toast.message}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
