'use client'
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";



const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0);

      lastYRef.current = y;
    }
  });

  return (
    <motion.div
      animate={isHidden ? "hidden" : "visible"}
      whileHover="visible"
      onFocusCapture={() => setIsHidden(false)}
      variants={{
        hidden: {
          y: "-90%",
        },
        visible: {
          y: "0%",
        },
      }}
      transition={{ duration: 0.2 }}
      className="fixed top-0 z-10 flex w-full justify-center pt-3"
    >
      <motion.nav
      
    
      className="flex bg-white justify-between gap-3 rounded-3xl bg-transparent p-5 *:rounded-xl *:border *:border-gray-200 *:px-7 *:py-2 *:transition-colors *:duration-300 hover:*:bg-gray-200 focus-visible:*:bg-gray-200">
        <Link href="#" className="bg-gray-200">
          <svg
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z"></path>
          </svg>
          <span className="sr-only">Home</span>
        </Link>
        <Link href="#">Products</Link>
        <Link href="#">Services</Link>
        <Link href="#">About</Link>
        <Link href="#">Contact</Link>
      </motion.nav>
    </motion.div>
  );
};

export default Navbar;