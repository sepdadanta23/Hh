/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { 
  Home, 
  Layers, 
  ShoppingCart, 
  LifeBuoy, 
  Settings, 
  User, 
  Play, 
  Flame, 
  Droplet, 
  Wind, 
  Mountain,
  ChevronDown,
  Info
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// --- Components ---

const NavBar = () => {
  const [activeTab, setActiveTab] = useState("home");
  
  const navItems = [
    { id: "home", label: "home", icon: Home },
    { id: "versions", label: "versions", icon: null },
    { id: "shop", label: "shop", icon: null },
    { id: "support", label: "support", icon: null },
    { id: "settings", label: "settings", icon: null },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50">
      <div className="glass rounded-full px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <img 
              src="https://api.dicebear.com/7.x/shapes/svg?seed=wolf&backgroundColor=ffffff" 
              alt="Wolf Logo" 
              className="w-6 h-6"
            />
          </div>
          <span className="font-display font-bold text-lg tracking-tight uppercase">Wolf Client</span>
        </div>

        {/* Center Links */}
        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`relative text-sm font-medium transition-colors hover:text-white ${
                activeTab === item.id ? "text-white" : "text-white/50"
              }`}
            >
              <div className="flex items-center gap-2">
                {item.icon && <item.icon size={16} />}
                <span className="capitalize">{item.label}</span>
              </div>
              {activeTab === item.id && (
                <motion.div 
                  layoutId="nav-active"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full"
                />
              )}
            </button>
          ))}
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-4 bg-white/5 hover:bg-white/10 transition-colors px-4 py-1.5 rounded-full cursor-pointer group">
          <span className="text-xs font-mono text-white/70 group-hover:text-white transition-colors">@Username</span>
          <div className="w-7 h-7 bg-white/10 rounded-full flex items-center justify-center overflow-hidden">
            <User size={16} className="text-white/60" />
          </div>
        </div>
      </div>
    </nav>
  );
};

const SideNav = () => {
  const [activeElement, setActiveElement] = useState("fire");

  const elements = [
    { id: "fire", icon: Flame, color: "text-orange-500", label: "Fire" },
    { id: "water", icon: Droplet, color: "text-blue-500", label: null },
    { id: "wind", icon: Wind, color: "text-slate-300", label: null },
    { id: "earth", icon: Mountain, color: "text-amber-700", label: null },
  ];

  return (
    <aside className="fixed left-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-6">
      {elements.map((el) => (
        <motion.button
          key={el.id}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveElement(el.id)}
          className={`relative group flex items-center gap-4`}
        >
          <div className={`w-12 h-12 rounded-full glass-light flex items-center justify-center transition-all ${
            activeElement === el.id ? "border-white/40 ring-2 ring-white/10" : "hover:border-white/30"
          }`}>
            <el.icon className={el.color} size={20} />
          </div>
          
          <AnimatePresence>
            {el.label && activeElement === el.id && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="text-sm font-bold uppercase tracking-wider text-white"
              >
                {el.label}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      ))}
    </aside>
  );
};

const TipBanner = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-32 left-8 z-40 max-w-sm"
    >
      <div className="glass rounded-2xl p-4 flex items-start gap-4">
        <div className="mt-1 flex-shrink-0">
          <Info size={18} className="text-white/60" />
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between items-center w-full mb-1">
            <span className="text-[10px] uppercase font-bold tracking-widest text-white/40">// Tip:</span>
            <span className="text-[10px] lowercase font-mono text-white/20 italic">wolfclient</span>
          </div>
          <p className="text-sm font-medium leading-tight text-white/80">
            Always be careful about yourself and your account security.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const LaunchBar = () => {
  const [version, setVersion] = useState("vanilla 1.8.9");
  
  return (
    <footer className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50">
      <div className="glass rounded-full px-8 py-3 flex items-center justify-between">
        {/* Left Status */}
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm font-medium text-white/60">
            Optimized for <span className="text-white font-bold">PVP</span> - ready to launch
          </span>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          {/* Version Selector */}
          <button className="flex items-center gap-3 text-white/50 hover:text-white transition-colors">
            <span className="text-sm font-mono">{version}</span>
            <ChevronDown size={16} />
          </button>

          {/* Launch Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-red hover:bg-brand-red-light px-10 py-3 rounded-full flex items-center gap-3 font-display font-bold uppercase tracking-widest shadow-xl glow-red transition-all"
          >
            <span>Launch</span>
            <Play size={18} fill="currentColor" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1200);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-black flex flex-col overflow-hidden">
      {/* Loading Screen */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center gap-6"
          >
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center overflow-hidden"
            >
              <img 
                src="https://api.dicebear.com/7.x/shapes/svg?seed=wolf&backgroundColor=ffffff" 
                alt="Wolf Logo" 
                className="w-14 h-14"
              />
            </motion.div>
            <div className="flex flex-col items-center gap-2">
              <span className="font-display font-bold text-2xl tracking-[0.3em] uppercase">Wolf Client</span>
              <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="h-full bg-white"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Image Layer with Parallax */}
      <motion.div 
        animate={{ 
          x: mousePos.x,
          y: mousePos.y,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 50 }}
        className="absolute inset-[-40px] bg-cover bg-center transition-transform duration-[10s] scale-105"
        style={{ 
          backgroundImage: `url('https://images.wallpapersden.com/image/download/minecraft-dungeons-4k-gaming-poster_a2xta2mUmZqaraWkpJRmbmdlrWZsZWU.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* UI Elements */}
      <AnimatePresence>
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative z-10 w-full h-full"
          >
            <NavBar />
            <SideNav />
            <TipBanner />
            <LaunchBar />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay Vignette */}
      <div className="fixed inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.9)] z-20" />
      
      {/* Dust Particles Effect (CSS only for perf) */}
      <div className="fixed inset-0 pointer-events-none z-15 opacity-30 select-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-repeat" />
      </div>
    </div>
  );
}
