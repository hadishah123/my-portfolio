import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import { useEffect, useRef } from "react";
import AnimatedCursor from "react-animated-cursor";

function App() {
  const hasRun = useRef(false);
  const isTouchDevice = () => {
    return (
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0)
    );
  };
  const isTouch = isTouchDevice();

  useEffect(() => {
    if (!hasRun.current) {
      console.log(
        "%c  ██████╗   ██╗ █████╗  ██████╗ \n" +
          " ██╔════╝   ██║██╔══██╗██╔═══██╗\n" +
          " ██║        ██║███████║██║   ██║\n" +
          " ██║        ██║██╔══██║██║   ██║\n" +
          " ╚██████╗   ██║██║  ██║╚██████╔╝\n" +
          "  ╚═════╝   ╚═╝╚═╝  ╚═╝ ╚═════╝ \n" +
          "%c\nCiao! 👋\nWelcome to the console. 🚀",
        "font-weight: bold; font-size: 14px; background: linear-gradient(90deg, #3b82f6, #06b6d4); -webkit-background-clip: text; color: transparent; text-shadow: 2px 2px 5px rgba(0,0,0,0.3);",
        "font-size: 16px; color: #f59e0b; font-weight: bold; line-height: 1.5;",
      );
      console.log(
        "%c👋 Hey there, curious developer! Welcome to Hadi Shah's portfolio :)\n" +
          "💌 Want to collaborate? Shoot me an email: hadishah.work@gmail.com\n" +
          "🚀 Enjoy exploring the code and projects!",
        "color: #22d3ee; font-size: 14px; line-height: 1.5;",
      );
      hasRun.current = true; // mark as run
    }
  }, []);
  return (
    <>
      {!isTouch && (
  <AnimatedCursor
    innerSize={7}
    outerSize={26}
    color="139, 92, 246"
    outerAlpha={0.4}
    innerScale={0.9}
    outerScale={4}
    innerStyle={{
      boxShadow: "0 0 8px rgba(139,92,246,0.6)",
    }}
    outerStyle={{
      boxShadow: "0 0 25px rgba(139,92,246,0.45)",
    }}
    showSystemCursor={false}
  />
)}
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
