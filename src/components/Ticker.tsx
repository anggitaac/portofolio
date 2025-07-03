"use client";
import { motion } from "framer-motion";

export default function ChevronTicker() {
  return (
    <div className="overflow-hidden w-full h-20 bg-white">
      <motion.div
        className="w-[300%] h-full bg-[url('/img/tickers.png')] bg-repeat-x"
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
