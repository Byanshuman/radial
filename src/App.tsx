import { useState } from "react";
import {
  Users,
  Workflow,
  Briefcase,
  BookOpen,
  HelpCircle,
  Info,
  Sparkles,
  Home,
  Layers,
  MessageSquare,
  Menu as MenuIcon,
  Github,
  Code2,
  Play,
  RotateCw,
  Compass,
} from "lucide-react";
import { RadialMenu } from "./RadialMenu";
import type { RadialMenuItem } from "./RadialMenu/types";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [customRadius, setCustomRadius] = useState<number | undefined>(undefined);
  const [customPodSize, setCustomPodSize] = useState<number | undefined>(undefined);
  const [originType, setOriginType] = useState<"dock" | "center" | "bottom-right">("dock");

  const sampleItems: RadialMenuItem[] = [
    {
      id: "solutions",
      title: "Solutions",
      subtitle: "Who We Build For",
      icon: Users,
      angle: 270, // 12 o'clock
      iconColor: "text-orange-500",
      badge: "New",
    },
    {
      id: "process",
      title: "7 Stages",
      subtitle: "Our Framework",
      icon: Workflow,
      angle: 330, // 2 o'clock
      iconColor: "text-blue-500",
    },
    {
      id: "services",
      title: "Services",
      subtitle: "What We Do Best",
      icon: Briefcase,
      angle: 30, // 4 o'clock
      iconColor: "text-pink-500",
    },
    {
      id: "resources",
      title: "Resources",
      subtitle: "Guides & Insights",
      icon: BookOpen,
      angle: 90, // 6 o'clock
      iconColor: "text-emerald-500",
    },
    {
      id: "faqs",
      title: "FAQs",
      subtitle: "Questions & Support",
      icon: HelpCircle,
      angle: 150, // 8 o'clock
      iconColor: "text-amber-500",
    },
    {
      id: "about",
      title: "About",
      subtitle: "Our Philosophy",
      icon: Info,
      angle: 210, // 10 o'clock
      iconColor: "text-purple-500",
    },
  ];

  const getOrigin = () => {
    switch (originType) {
      case "dock":
        return { x: 90, y: 240 };
      case "center":
        return { x: 0, y: 0 };
      case "bottom-right":
        return { x: 180, y: 280 };
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-orange-500 selection:text-white">
      {/* Top Navigation */}
      <header className="border-b border-slate-800/80 bg-slate-900/50 backdrop-blur-md sticky top-0 z-30 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
            <Compass className="w-5 h-5 animate-spin-slow" />
          </div>
          <div>
            <h1 className="font-extrabold text-lg text-white leading-tight">Radial Revolver Menu</h1>
            <p className="text-xs text-slate-400">Trig-based Circular Motion System</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Byanshuman/radial"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold transition-colors border border-slate-700/60 shadow-sm"
          >
            <Github className="w-4 h-4" />
            <span>Star on GitHub</span>
          </a>
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-sm shadow-md shadow-orange-500/25 transition-transform active:scale-95"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Open Menu</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-6 py-12 flex-1 w-full space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            Motion & Trigonometry Choreography
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight max-w-2xl mx-auto">
            Interactive Radial Navigation with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
              Counter-Rotation
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto">
            Six orbital pods revolving around a central hub while keeping every icon and label upright.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setIsOpen(true)}
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 hover:opacity-95 text-white font-extrabold text-base shadow-xl shadow-orange-500/25 transition-transform active:scale-95 flex items-center gap-2"
            >
              <RotateCw className="w-5 h-5" />
              <span>Launch Radial Menu Demo</span>
            </button>
          </div>
        </section>

        {/* Architecture Breakdown Diagram */}
        <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3">
            <Code2 className="w-5 h-5 text-orange-400" />
            <h3 className="text-xl font-bold text-white">Component Architecture</h3>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 font-mono text-xs">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <span className="text-orange-400 font-bold block text-sm">1. Coordinate Geometry</span>
              <p className="text-slate-400 font-sans leading-relaxed">
                Uses trigonometric functions (<code className="text-orange-300">cos θ</code> and <code className="text-orange-300">sin θ</code>) in CSS <code className="text-orange-300">calc()</code> to position pods without fixed pixel offsets.
              </p>
            </div>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <span className="text-orange-400 font-bold block text-sm">2. Ferris Wheel Spin</span>
              <p className="text-slate-400 font-sans leading-relaxed">
                The parent wheel rotates <code className="text-orange-300">-360°</code> while each child pod counter-rotates <code className="text-orange-300">+360°</code> to keep labels upright.
              </p>
            </div>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <span className="text-orange-400 font-bold block text-sm">3. Dynamic Origin</span>
              <p className="text-slate-400 font-sans leading-relaxed">
                Springs forward directly from the trigger button coordinates using cubic-bezier easing <code className="text-orange-300">[0.16, 1, 0.3, 1]</code>.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Controls Playground */}
        <section className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 sm:p-8 space-y-6">
          <h3 className="text-xl font-bold text-white">Configure Demo Parameters</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300 block">
                Radius: {customRadius ? `${customRadius}px` : "Responsive (Default)"}
              </label>
              <input
                type="range"
                min="100"
                max="240"
                value={customRadius || 125}
                onChange={(e) => setCustomRadius(Number(e.target.value))}
                className="w-full accent-orange-500 cursor-pointer"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300 block">
                Pod Size: {customPodSize ? `${customPodSize}px` : "Responsive (Default)"}
              </label>
              <input
                type="range"
                min="70"
                max="140"
                value={customPodSize || 88}
                onChange={(e) => setCustomPodSize(Number(e.target.value))}
                className="w-full accent-orange-500 cursor-pointer"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300 block">Entrance Origin</label>
              <select
                value={originType}
                onChange={(e) => setOriginType(e.target.value as any)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-orange-500"
              >
                <option value="dock">Bottom Dock (x: 90, y: 240)</option>
                <option value="center">Center (x: 0, y: 0)</option>
                <option value="bottom-right">Bottom Right (x: 180, y: 280)</option>
              </select>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Bottom Nav Dock (Mimicking WebFoxx UX) */}
      <aside className="fixed bottom-4 left-4 right-4 z-40 max-w-[400px] mx-auto pointer-events-none">
        <nav
          className="pointer-events-auto bg-slate-900/90 backdrop-blur-xl border border-slate-800/90 shadow-2xl rounded-full h-16 px-4 flex items-center justify-between"
          aria-label="Floating Navigation Bar"
        >
          <button
            onClick={() => setActiveTab("home")}
            className={`flex flex-col items-center justify-center flex-1 transition-colors ${
              activeTab === "home" ? "text-orange-400 font-bold" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Home className="w-5 h-5" />
            <span className="text-[11px] mt-0.5">Home</span>
          </button>

          <button
            onClick={() => setActiveTab("services")}
            className={`flex flex-col items-center justify-center flex-1 transition-colors ${
              activeTab === "services" ? "text-orange-400 font-bold" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Layers className="w-5 h-5" />
            <span className="text-[11px] mt-0.5">Services</span>
          </button>

          <button
            onClick={() => setActiveTab("contact")}
            className={`flex flex-col items-center justify-center flex-1 transition-colors ${
              activeTab === "contact" ? "text-orange-400 font-bold" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <MessageSquare className="w-5 h-5" />
            <span className="text-[11px] mt-0.5">Contact</span>
          </button>

          {/* Trigger Button that launches the Radial Revolver Menu */}
          <button
            onClick={() => setIsOpen(true)}
            className="flex flex-col items-center justify-center flex-1 text-orange-400 hover:text-orange-300 font-bold transition-transform active:scale-95"
            aria-label="Open Radial Menu"
          >
            <div className="w-8 h-8 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center">
              <MenuIcon className="w-4 h-4 text-orange-400" />
            </div>
            <span className="text-[11px] mt-0.5">Menu</span>
          </button>
        </nav>
      </aside>

      {/* The Radial Menu Modal */}
      <RadialMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        items={sampleItems}
        radius={customRadius}
        podSize={customPodSize}
        origin={getOrigin()}
        headerTitle="Websites Engineered for Business Growth"
        headerSubtitle="We design, engineer, and build modern digital experiences."
        centerContent={
          <span className="font-black text-xl tracking-wider uppercase">HUB</span>
        }
        footerContent={
          <div className="flex items-center justify-between text-xs text-slate-300 px-4">
            <span className="font-bold tracking-wider">RADIAL SYSTEM</span>
            <button
              onClick={() => setIsOpen(false)}
              className="px-3 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-colors"
            >
              Close Menu
            </button>
          </div>
        }
      />

      {/* Simple Footer */}
      <footer className="text-center py-6 text-xs text-slate-500 border-t border-slate-900 pb-24">
        Radial Revolver Menu • Built by{" "}
        <a
          href="https://github.com/Byanshuman"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-400 hover:underline font-semibold"
        >
          @Byanshuman
        </a>
      </footer>
    </div>
  );
}
