
import React from "react";
import { Zap, ArrowRight, Terminal, Apple, FileText, Download, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const WhatToolDoes = () => {
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-2 relative">
              {/* Step 1 */}
              <Card className="bg-white/10 backdrop-blur-md border border-keyboard-primary/20 rounded-xl shadow-xl overflow-visible group hover:border-keyboard-primary transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-keyboard-primary/10 flex items-center justify-center mb-4 border border-keyboard-primary/30 group-hover:border-keyboard-primary transition-colors">
                    <Edit className="h-8 w-8 text-keyboard-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Edit ZMK Layout</h3>
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
                  <h3 className="text-xl font-semibold mb-2">Convert to Kanata</h3>
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
                  <h3 className="text-xl font-semibold mb-2">Use Instantly</h3>
                  <p className="text-keyboard-text/90 mb-4">
                    Run your keyboard layout on macOS or Linux with Kanata
                  </p>
                  <div className="flex-grow"></div>
                  <div className="text-sm text-keyboard-text/70 mt-2">
                    No firmware flashing required
                  </div>
                </CardContent>
              </Card>

              {/* Mobile arrows */}
              <div className="flex md:hidden justify-center w-full my-2">
                <ArrowRight className="h-8 w-8 text-keyboard-primary" />
              </div>
              <div className="flex md:hidden justify-center w-full my-2">
                <ArrowRight className="h-8 w-8 text-keyboard-primary" />
              </div>
            </div>

            {/* Feature highlight */}
            <div className="mt-12 text-center">
              <div className="bg-keyboard-primary/20 text-keyboard-primary font-semibold px-6 py-3 rounded-lg inline-block">
                No need to build and flash custom firmware with each change
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button className="bg-keyboard-primary hover:bg-keyboard-primary/90 text-white px-8 py-6 text-lg">
              <span>Get Started</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatToolDoes;
