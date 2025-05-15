
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-bg min-h-screen flex items-center pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-keyboard-primary/10 px-4 py-1.5 rounded-full mb-6">
            <span className="text-keyboard-primary text-sm font-medium">Announcing ZMK → Kanata Converter</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-keyboard-text via-keyboard-primary to-keyboard-secondary bg-clip-text text-transparent">
            Unlock Mac Keyboard Superpowers
          </h1>
          
          <p className="text-xl md:text-2xl text-keyboard-text/80 mb-10 leading-relaxed">
            A bridge between firmware and software keyboard customization, bringing your ZMK configurations to Kanata for ultimate flexibility.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button className="bg-keyboard-primary hover:bg-keyboard-primary/90 text-white px-8 py-6 text-lg w-full sm:w-auto">
              Join the Waitlist
            </Button>
            <Button variant="outline" className="border-keyboard-secondary text-keyboard-secondary hover:bg-keyboard-secondary/10 px-8 py-6 text-lg w-full sm:w-auto">
              <span>View on GitHub</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          {/* Keyboard Hero Image */}
          <div className="mb-10 relative">
            <div className="absolute inset-0 bg-keyboard-primary/20 blur-3xl rounded-full opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
              alt="Zoomed in Mac Magic Keyboard" 
              className="rounded-xl w-full max-w-2xl mx-auto shadow-2xl border border-white/10 float-element"
            />
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
