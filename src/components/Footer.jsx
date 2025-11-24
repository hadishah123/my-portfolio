import { ArrowUp,Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      {" "}
      <p className="text-sm text-muted-foreground mb-4 md:mb-0 flex items-center gap-1">
        {" "}
        &copy; {new Date().getFullYear()} Hadi Shah 
        <Heart size={14} strokeWidth={2} className="text-red-500 transition-all duration-300
             hover:brightness-150 
             hover:drop-shadow-[0_0_10px_red,0_0_20px_red,0_0_30px_red]" />All rights reserved.
      </p>
      <a
        href="#home"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors animate-bounce"
      >
        <ArrowUp size={25} />
      </a>
    </footer>
  );
};
