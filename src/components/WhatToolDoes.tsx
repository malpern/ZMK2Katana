
import React from 'react';
import { ArrowRight, Zap, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

const WhatToolDoes = () => {
  return (
    <section className="py-20 bg-keyboard-dark/80">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Zap className="h-6 w-6 text-keyboard-accent" />
            <span className="text-xl font-bold text-keyboard-accent">What This Tool Does</span>
          </div>
          
          <div className="glass-card p-8 mb-12">
            <ul className="space-y-6">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-keyboard-primary mr-4 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-keyboard-text">Converts ZMK keymaps to Kanata configs</h3>
                  <p className="text-keyboard-text/70 mt-1">
                    Upload your ZMK (DTS or JSON) files and get Kanata-ready configs.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-keyboard-primary mr-4 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-keyboard-text">Translates advanced keyboard features</h3>
                  <p className="text-keyboard-text/70 mt-1">
                    <a href="https://zmk.dev/docs/keymaps#layers" target="_blank" rel="noopener noreferrer" className="text-keyboard-primary hover:underline">Layers</a>,{' '}
                    <a href="https://zmk.dev/docs/keymaps/combos" target="_blank" rel="noopener noreferrer" className="text-keyboard-primary hover:underline">combos</a>,{' '}
                    <a href="https://zmk.dev/docs/keymaps/behaviors/hold-tap" target="_blank" rel="noopener noreferrer" className="text-keyboard-primary hover:underline">dual-role keys</a>, and{' '}
                    <a href="https://zmk.dev/docs/keymaps/behaviors/macros" target="_blank" rel="noopener noreferrer" className="text-keyboard-primary hover:underline">macros</a>{' '}are all supported.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-keyboard-primary mr-4 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-keyboard-text">Keeps your ZMK logic intact</h3>
                  <p className="text-keyboard-text/70 mt-1">
                    No need to manually recreate your layout—everything is preserved.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-keyboard-primary mr-4 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-keyboard-text">Accepts files from Nick's Keymap Editor</h3>
                  <p className="text-keyboard-text/70 mt-1">
                    Directly use exports from the visual GUI.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-keyboard-primary mr-4 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-keyboard-text">Works with Kanata's live reload</h3>
                  <p className="text-keyboard-text/70 mt-1">
                    Instantly test changes—no firmware flashing required.
                  </p>
                </div>
              </li>
            </ul>
            
            <div className="mt-12 text-center">
              <div className="flex items-center justify-center mb-8">
                <div className="bg-keyboard-primary/10 text-keyboard-primary font-semibold px-4 py-2 rounded-lg">
                  Edit your firmware layout → Convert to Kanata → Use it instantly on macOS or Linux
                </div>
              </div>
              
              <Button className="bg-keyboard-primary hover:bg-keyboard-primary/90 text-white px-8 py-6 text-lg">
                <span>Get Started</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatToolDoes;
