import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import SnowParticles from "./SnowParticle";
export default function About() {
  const formRef = useRef(null);
  const [showToast, setShowToast] = useState(false);

  const handleSuccess = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <section
      id="About"
      className="relative overflow-hidden min-h-screen bg-[#0B2447] px-4 py-16"
    >
      <SnowParticles />
      <div className="relative  max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Bot Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] flex items-center justify-center"
        >
          <iframe
            src="https://my.spline.design/happyrobotbutton-z223TCHWkFzxAoGzpR0Xgs7B/"
            frameBorder="0"
            allow="autoplay; fullscreen"
            className="w-full h-full rounded-xl shadow-xl"
            style={{
              pointerEvents: "auto",
              background: "transparent",
            }}
          />
        </motion.div>

        {/* Content (About + Contact) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-card border border-[#2C74B3]/30 rounded-2xl p-8 shadow-2xl backdrop-blur-lg bg-black/40"
        >
          <motion.h2
            className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-[#00c6ff] to-[#2C74B3] text-transparent bg-clip-text"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            👋 About Me
          </motion.h2>

          <p className="text-white/90 text-lg leading-relaxed mb-4">
            I'm{" "}
            <span className="text-[#5f9acf] pulse-glow font-semibold">Raghav Katta</span>,
            a modern-day digital alchemist who thrives on turning complex ideas
            into scalable, elegant solutions using <strong>MongoDB</strong>,{" "}
            <strong>Express.js</strong>, <strong>React</strong>, and{" "}
            <strong>Node.js</strong>.
          </p>
          <p className="text-white/80 mb-6">
            🚀 Constantly iterating. Always shipping. Passionate about elegant
            design, clean code, and pushing boundaries.
          </p>

        
          <h2 className="text-2xl font-bold text-white mb-4">📬 Contact Me</h2>

          <AnimatePresence>
            {showToast && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-green-600 text-white px-4 py-2 mb-4 text-sm rounded-lg text-center"
              >
                ✅ Your message was sent successfully!
              </motion.div>
            )}
          </AnimatePresence>

          <form
            ref={formRef}
            onSubmit={() => {
              handleSuccess();
              setTimeout(() => formRef.current.reset(), 100);
            }}
            method="POST"
            action="https://formspree.io/f/mgvageav"
            target="dummyFrame"
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="bg-black/50 border border-[#2C74B3]/50 text-white px-4 py-2 rounded-md outline-none focus:border-[#2C74B3]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="bg-black/50 border border-[#2C74B3]/50 text-white px-4 py-2 rounded-md outline-none focus:border-[#2C74B3]"
            />
            <textarea
              name="message"
              placeholder="Write your message..."
              rows={5}
              required
              className="bg-black/50 border border-[#2C74B3]/50 text-white px-4 py-2 rounded-md outline-none focus:border-[#2C74B3] resize-none"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white font-semibold py-2 rounded-lg transition-all"
            >
              Send Message
            </motion.button>
            <iframe name="dummyFrame" style={{ display: "none" }} />
          </form>
        </motion.div>
      </div>
    </section>
  );
}
