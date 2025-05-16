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
                  A <span className="font-semibold">keymap</span> is the configuration that determines what happens when you press each key. On programmable keyboards, it's the software blueprint for customizing your typing experience.
                </p>
                <h4 className="text-xl font-semibold mb-2 text-left">
                  With custom keymaps, you can:
                </h4>
                <ul className="list-disc pl-5 text-keyboard-text/80 space-y-2 mb-6 text-left">
                  <li>Create shortcuts that are easy to remember</li>
                  <li>Launch apps with a single key</li>
                  <li>Control windows and screen layout</li>

                  <li>Change key behavior by program</li>
                  <li>Access multiple layers of functions</li>
                </ul>
                <p className="mb-4 text-keyboard-text/80 leading-relaxed text-left">
                  Historically, advanced customizations like home row mods were mostly for high-end programmable keyboards and required technical expertise.
                </p>
                <p className="text-keyboard-text/80 leading-relaxed text-left">
                  <strong className="text-keyboard-primary">This is no longer the case.</strong> With modern tools, you can now implement sophisticated keymap features on any keyboard, without needing specialized hardware or programming knowledge.
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
