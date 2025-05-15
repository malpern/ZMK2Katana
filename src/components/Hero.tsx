
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Keyboard, Github, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-bg min-h-screen flex items-center pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-keyboard-primary/10 px-4 py-1.5 rounded-full mb-6">
            <span className="text-keyboard-primary text-sm font-medium">Announcing ZMK → Kanata Converter</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-keyboard-text via-keyboard-primary to-keyboard-secondary bg-clip-text text-transparent">
            Your Layout. Your Logic. Any Keyboard.
          </h1>
          
          <p className="text-xl md:text-2xl text-keyboard-text/80 mb-10 leading-relaxed">
            Make your existing keyboard as powerful as a custom mechanical <span className="font-semibold">without</span> having to edit and flash firmware, with this ZMK to Kanata converter.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a href="https://github.com/malpern/zmk-to-kanata" target="_blank" rel="noopener noreferrer">
              <Button className="bg-keyboard-primary hover:bg-keyboard-primary/90 text-white px-8 py-6 text-lg w-full sm:w-auto flex items-center gap-2">
                <Github className="h-5 w-5" />
                View on GitHub
              </Button>
            </a>
            <Link to="/user-guide">
              <Button variant="outline" className="border-keyboard-secondary text-keyboard-secondary hover:bg-keyboard-secondary/10 px-8 py-6 text-lg w-full sm:w-auto flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                <span>User Guide</span>
              </Button>
            </Link>
          </div>
          
          {/* Keyboard Hero Image */}
          <div className="mb-10 relative">
            <div className="absolute inset-0 bg-keyboard-primary/20 blur-3xl rounded-full opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80" 
              alt="Zoomed in MacBook keyboard" 
              className="rounded-xl w-full max-w-2xl mx-auto shadow-2xl border border-white/10 float-element"
            />
            
            {/* Improved Keyboard Superpowers Indicator */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-xl backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="h-3 w-3 bg-keyboard-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-keyboard-text/90">Keyboard Superpower</span>
                </div>
                <div className="text-xs bg-white/10 px-2 py-1 rounded-full text-keyboard-primary/90 backdrop-blur-sm border border-white/10">
                  Home row mods • Layers • Tap dance • Combos
                </div>
              </div>
            </div>
          </div>
          
          {/* Nick's Keymap Editor + Kanata Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Nick's Keymap Editor */}
            <div className="glass-card overflow-hidden flex flex-col">
              <div className="bg-gray-900 px-4 py-2 border-b border-gray-700 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-xs text-gray-400">Nick's Keymap Editor</div>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <img 
                  src="/lovable-uploads/82aa7956-e3ac-462f-b29e-bfd8706c76c4.png" 
                  alt="Nick's Keymap Editor Screenshot" 
                  className="rounded border border-gray-700 shadow-lg mb-4"
                />
                <div className="text-left">
                  <h3 className="text-lg font-bold text-keyboard-text mb-2">Step 1: Create your ZMK keymap</h3>
                  <p className="text-sm text-keyboard-text/80">Design your custom keyboard layout in <a href="https://nickcoutsos.github.io/keymap-editor/" target="_blank" rel="noopener noreferrer" className="text-keyboard-primary hover:underline">Nick's Keymap Editor</a>, the visual editor for ZMK-powered keyboards.</p>
                </div>
              </div>
            </div>
            
            {/* Kanata */}
            <div className="glass-card overflow-hidden flex flex-col">
              <div className="bg-gray-900 px-4 py-2 border-b border-gray-700 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-xs text-gray-400">Kanata</div>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <div className="flex items-center justify-center flex-1 mb-4">
                  <img 
                    src="https://raw.githubusercontent.com/jtroo/kanata/main/assets/kanata-icon.svg" 
                    alt="Kanata Logo" 
                    className="h-32 w-32"
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-bold text-keyboard-text mb-2">Step 2: Run it on your Mac with Kanata</h3>
                  <p className="text-sm text-keyboard-text/80">Convert your ZMK configuration to <a href="https://github.com/jtroo/kanata" target="_blank" rel="noopener noreferrer" className="text-keyboard-primary hover:underline">Kanata</a>, the powerful keyboard customization tool that brings your favorite firmware features to macOS.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Code Preview */}
          <div className="glass-card overflow-hidden max-w-2xl mx-auto">
            <div className="bg-gray-900 px-4 py-2 border-b border-gray-700 flex items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="ml-4 text-xs text-gray-400">zmk_to_kanata.ts</div>
            </div>
            <div className="p-4 text-left overflow-x-auto">
              <pre className="text-sm text-keyboard-text font-mono">
                <code>
{`// ZMK tap-behavior converted to Kanata
const tap_hold = defcfg({
  tapping-term-ms: 200
})

defsrc(
  q w e r t y
)

deflayer(base
  @mt_a @mt_s @mt_d @mt_f g h
)

deffakekeys(
  mt_a (tap-hold-release 200 a lmet)
  mt_s (tap-hold-release 200 s lalt)
  mt_d (tap-hold-release 200 d lctl)
  mt_f (tap-hold-release 200 f lsft)
)`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
