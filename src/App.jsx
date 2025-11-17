import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import { useEffect,useRef } from "react";

function App() {
  const hasRun = useRef(false);

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
            "font-size: 16px; color: #f59e0b; font-weight: bold; line-height: 1.5;"
          );
          console.log(
            "%c👋 Hey there, curious developer! Welcome to Hadi Shah's portfolio :)\n" +
            "💌 Want to collaborate? Shoot me an email: hadishah.work@gmail.com\n" +
            "🚀 Enjoy exploring the code and projects!",
            "color: #22d3ee; font-size: 14px; line-height: 1.5;"
          );
      hasRun.current = true; // mark as run
    }
  }, []);
  return (
    <>
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
