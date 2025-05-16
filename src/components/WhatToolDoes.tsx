import React, { useCallback } from "react";
import { Zap, ArrowRight, Terminal, Apple, Download, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const WhatToolDoes = () => {
  const handleUserGuideClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <section className="py-20 bg-keyboard-dark" id="what-this-tool-does">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-10">
            <Zap className="h-6 w-6 text-keyboard-accent" />
            <span className="text-xl font-bold text-keyboard-accent">
              What This Tool Does
            </span>
          </div>

          <div className="flow-diagram mb-16">
            {/* Visual workflow diagram */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-2 relative">
              {/* Step 1 */}
              <Card className="bg-white/10 backdrop-blur-md border border-keyboard-primary/20 rounded-xl shadow-xl overflow-visible group hover:border-keyboard-primary transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-keyboard-primary/10 flex items-center justify-center mb-4 border border-keyboard-primary/30 group-hover:border-keyboard-primary transition-colors">
                    <Edit className="h-8 w-8 text-keyboard-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Edit ZMK Layout</h3>
                  <p className="text-keyboard-text/90 mb-4">
                    Design your keyboard layout using Nick's Keymap Editor web tool
                  </p>
                  <div className="flex-grow"></div>
                  <div className="text-sm text-keyboard-text/70 mt-2">
                    No coding required
                  </div>
                </CardContent>
              </Card>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center">
                <ArrowRight className="h-10 w-10 text-keyboard-primary" />
              </div>

              {/* Step 2 */}
              <Card className="bg-white/10 backdrop-blur-md border border-keyboard-primary/20 rounded-xl shadow-xl overflow-visible group hover:border-keyboard-primary transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-keyboard-secondary/10 flex items-center justify-center mb-4 border border-keyboard-secondary/30 group-hover:border-keyboard-secondary transition-colors">
                    <Download className="h-8 w-8 text-keyboard-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Convert to Kanata</h3>
                  <p className="text-keyboard-text/90 mb-4">
                    Upload your ZMK file and instantly convert it to Kanata config
                  </p>
                  <div className="flex-grow"></div>
                  <div className="text-sm text-keyboard-text/70 mt-2">
                    Preserves all your keyboard logic
                  </div>
                </CardContent>
              </Card>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center">
                <ArrowRight className="h-10 w-10 text-keyboard-primary" />
              </div>

              {/* Step 3 */}
              <Card className="bg-white/10 backdrop-blur-md border border-keyboard-primary/20 rounded-xl shadow-xl overflow-visible group hover:border-keyboard-primary transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-keyboard-highlight/10 flex items-center justify-center mb-4 border border-keyboard-highlight/30 group-hover:border-keyboard-highlight transition-colors">
                    <div className="flex space-x-2">
                      <Apple className="h-7 w-7 text-keyboard-highlight" />
                      <Terminal className="h-7 w-7 text-keyboard-highlight" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Use Instantly</h3>
                  <p className="text-keyboard-text/90 mb-4">
                    Run your keyboard layout on macOS or Linux with Kanata
                  </p>
                  <div className="flex-grow"></div>
                  <div className="text-sm text-keyboard-text/70 mt-2">
                    No firmware flashing required
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Feature highlight */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center justify-center gap-2 p-3 rounded-lg bg-keyboard-dark/80 border border-keyboard-primary/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-keyboard-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                <span className="text-keyboard-text/80 font-medium">
                  No need to build and flash custom firmware with each change
                </span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link to="/user-guide" onClick={handleUserGuideClick}>
              <Button className="bg-keyboard-primary hover:bg-keyboard-primary/90 text-white px-8 py-6 text-lg group">
                <span>Get Started</span>
                <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-200 group-hover:translate-x-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatToolDoes;
