import { Search, Moon, Sun, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [isDark, setIsDark] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight">TechThoughts</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium text-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link to="/topics" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Topics
            </Link>
          </div>

          {/* Search & Theme Toggle */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Button className="hidden md:inline-flex bg-primary hover:bg-primary/90">
              Get Started
            </Button>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="mt-4 animate-in fade-in slide-in-from-top-2">
            <Input
              type="search"
              placeholder="Search articles..."
              className="w-full max-w-2xl mx-auto"
              autoFocus
            />
          </div>
        )}
      </div>
    </nav>
  );
};
