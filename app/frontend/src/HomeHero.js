import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { URLS } from "./urls";

export default function HomeHero() {
  const canvasRef = useRef(null);

  // Animated particle background
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      dx: (Math.random() - 0.5) * 1,
      dy: (Math.random() - 0.5) * 1,
      size: Math.random() * 2 + 1,
    }));

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(59,130,246,0.7)";
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      requestAnimationFrame(animate);
    }
    animate();
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      {/* Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 bg-gradient-to-br from-[#0f172a] to-[#1e293b]"
        style={{ zIndex: 0 }}
      />

      {/* Modal/Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 p-8 rounded-2xl shadow-2xl backdrop-blur-xl bg-white/10 border border-white/20 text-center max-w-md"
      >
        <h1 className="text-3xl font-bold text-white mb-3">
          Welcome to {" "}
          <span style={{
            background: "linear-gradient(90deg, #22d3ee 0%, #3b82f6 60%, #8b5cf6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent"
          }}>Resume Screener</span>!
        </h1>
        <p className="text-gray-300 mb-6">
          ✨ Empower your career and hiring journey. <br />
          Fast, smart, and fun resume analysis for everyone!
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg"
          onClick={() => window.location.href = URLS.resumescreener}
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
}
