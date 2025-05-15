
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const WhatIsKeymap = () => {
  return (
    <section className="py-16 bg-keyboard-dark/80">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-keyboard-primary/10 px-4 py-1.5 rounded-full mb-6">
            <span className="text-keyboard-primary text-sm font-medium">The Tools You Need</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Understand the Ecosystem
          </h2>
          
          {/* Nick's Keymap Editor Section */}
          <div className="glass-card p-8 mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 relative h-full">
                <img 
                  src="/lovable-uploads/82aa7956-e3ac-462f-b29e-bfd8706c76c4.png" 
                  alt="Nick's Keymap Editor Screenshot" 
                  className="rounded-lg shadow-xl border border-white/10 w-full object-cover object-left h-64"
                />
                {/* Nick's photo overlapping bottom left corner */}
                <Avatar className="absolute -bottom-4 -left-4 h-16 w-16 border-4 border-keyboard-dark shadow-lg">
                  <AvatarImage src="https://nickcoutsos.github.io/assets/jpg/photo.jpg" alt="Nick Coutsos" />
                  <AvatarFallback className="bg-keyboard-primary text-white font-medium">NC</AvatarFallback>
                </Avatar>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-keyboard-text via-keyboard-primary to-keyboard-secondary bg-clip-text text-transparent">
                  What is Nick&apos;s Keymap Editor?
                </h3>
                <p className="mb-4 text-keyboard-text/80 leading-relaxed">
                  Nick's Keymap Editor is a visual GUI tool for designing ZMK keyboard layouts without writing code. 
                  It provides an intuitive interface for customizing your keyboard's behavior, including layers, 
                  combos, and more.
                </p>
                <h4 className="text-xl font-semibold mb-2 text-keyboard-text">Why use it?</h4>
                <ul className="list-disc pl-5 text-keyboard-text/80 space-y-2">
                  <li>Visual interface for configuring complex layouts</li>
                  <li>No need to write Device Tree Source (DTS) files manually</li>
                  <li>Export configurations to ZMK-ready format</li>
                  <li>Perfect for both beginners and power users</li>
                </ul>
                <div className="mt-4">
                  <a 
                    href="https://nickcoutsos.github.io/keymap-editor/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-keyboard-primary hover:text-keyboard-secondary transition-colors"
                  >
                    Visit Nick&apos;s Keymap Editor →
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Kanata Section */}
          <div className="glass-card p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 flex justify-center">
                <img 
                  src="https://raw.githubusercontent.com/jtroo/kanata/main/assets/kanata-icon.svg" 
                  alt="Kanata Logo" 
                  className="w-48 h-48"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-keyboard-text via-keyboard-primary to-keyboard-secondary bg-clip-text text-transparent">
                  What is Kanata?
                </h3>
                <p className="mb-4 text-keyboard-text/80 leading-relaxed">
                  Kanata is a powerful software-based keyboard customization tool for macOS and Linux. It
                  intercepts and transforms keyboard inputs at the OS level, allowing you to apply complex
                  keyboard behaviors without changing your keyboard's firmware.
                </p>
                <h4 className="text-xl font-semibold mb-2 text-keyboard-text">Key features:</h4>
                <ul className="list-disc pl-5 text-keyboard-text/80 space-y-2">
                  <li>Live configuration changes without recompiling</li>
                  <li>Works with any keyboard, including built-in laptop keyboards</li>
                  <li>Sophisticated key behaviors (tap-hold, layers, combos)</li>
                  <li>Low latency design</li>
                  <li>Runs as a native, efficient background process</li>
                </ul>
                <div className="mt-4">
                  <a 
                    href="https://github.com/jtroo/kanata" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-keyboard-primary hover:text-keyboard-secondary transition-colors"
                  >
                    Explore Kanata on GitHub →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsKeymap;
