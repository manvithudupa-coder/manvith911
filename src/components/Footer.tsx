import { Github, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-muted-foreground text-sm flex items-center gap-2">
            <span>© {currentYear} Manvith. Made with</span>
            <Heart className="h-4 w-4 text-primary fill-primary animate-pulse" />
            <span>and lots of coffee</span>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://github.com/Manvith911"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:contact@manvith.dev"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-4 text-xs text-muted-foreground">
          <p>Built with React, TypeScript & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
