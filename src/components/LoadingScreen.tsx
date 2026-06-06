import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(true);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => setPct((p) => Math.min(p + 6, 100)), 18);
    const t = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 400);
    }, 900);
    return () => { clearInterval(iv); clearTimeout(t); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0d0d0d]"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center gap-8"
          >
            <div className="flex items-center gap-1.5">
              <span className="font-mono text-[#4B5563] text-base">~/</span>
              <span className="font-sans font-bold text-xl text-white tracking-tight">rahul</span>
              <span className="font-sans font-bold text-xl tracking-tight" style={{ color: "#7c3aed" }}>.vyas</span>
            </div>
            <div className="w-32 h-px bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{
                  width: `${pct}%`,
                  background: "linear-gradient(90deg, #7c3aed, #06b6d4)",
                  transition: "width 0.04s linear",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
