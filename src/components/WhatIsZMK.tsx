
import React from "react";
import { Keyboard, Command, Key } from "lucide-react";

const WhatIsZMK = () => {
  return (
    <section className="py-20 bg-keyboard-dark" id="keymap-intro">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-keyboard-primary/10 px-4 py-1.5 rounded-full mb-6">
              <span className="text-keyboard-primary text-sm font-medium">
                Understanding Keymaps
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              What is a keymap and why should I care?
            </h2>
          </div>

          <div className="glass-card p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="flex items-center justify-center flex-col gap-3 mb-6">
                  <Keyboard className="h-20 w-20 text-keyboard-primary" strokeWidth={1.5} />
                  <Command className="h-10 w-10 text-keyboard-secondary" strokeWidth={1.5} />
                  <Key className="h-10 w-10 text-keyboard-accent" strokeWidth={1.5} />
                </div>
              </div>
              
              <div className="md:w-2/3 text-left">
                <h3 className="text-2xl font-bold mb-4 text-left">
                  Your keyboard, reimagined
                </h3>
                
                <p className="mb-4 text-keyboard-text/80 leading-relaxed text-left">
                  A <span className="font-semibold">keymap</span> is the configuration that determines what happens when you press each key on your keyboard. On programmable keyboards, it's the software blueprint that customizes your typing experience.
                </p>
                
                <p className="mb-6 text-keyboard-text/80 leading-relaxed text-left">
                  Imagine transforming your keyboard into a powerful command center where every key does exactly what you want, where you want it.
                </p>
                
                <h4 className="text-xl font-semibold mb-2 text-left">
                  With custom keymaps, you can:
                </h4>
                
                <ul className="list-disc pl-5 text-keyboard-text/80 space-y-2 mb-6 text-left">
                  <li>Create intuitive shortcuts that are easy to remember and reach</li>
                  <li>Launch applications with a single keypress</li>
                  <li>Control window management and screen arrangement</li>
                  <li>Type frequently used text snippets with a keystroke</li>
                  <li>Change keyboard behavior based on what program you're using</li>
                  <li>Access multiple "layers" of keys to fit more functionality</li>
                </ul>
                
                <p className="mb-4 text-keyboard-text/80 leading-relaxed text-left">
                  Until now, these powerful customizations were mainly available to people with expensive programmable keyboards and the technical know-how to flash firmware.
                </p>
                
                <p className="text-keyboard-text/80 leading-relaxed text-left">
                  <strong className="text-keyboard-primary">That changes today.</strong> This converter lets you bring advanced keymap features to your everyday keyboard without special hardware or programming skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsZMK;
