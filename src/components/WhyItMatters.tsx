import React from "react";

const WhyItMatters = () => {
  return (
    <section id="why" className="py-20 bg-keyboard-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Keep header centered */}
          <div className="text-center mb-10">
            <div className="inline-block bg-keyboard-accent/10 px-4 py-1.5 rounded-full mb-6">
              <span className="text-keyboard-accent text-sm font-medium">
                Why It Matters
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold">
              More Than Just a Converter
            </h2>
          </div>

          {/* Cards - left aligned */}
          <div className="flex flex-col space-y-6">
            <div className="gradient-border transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-keyboard-primary/20">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  You shouldn't have to pick between firmware and software
                  power.
                </h3>
                <p className="text-keyboard-text/70 leading-relaxed">
                  ZMK gives you portable, on-device logic. Kanata gives you
                  dynamic, host-aware expressiveness. This tool bridges them,
                  giving you the best of both worlds without compromise.
                </p>
              </div>
            </div>

            <div className="glass-card p-6 transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:shadow-keyboard-primary/20">
              <h3 className="text-xl font-semibold mb-3">
                Prototype before flashing
              </h3>
              <p className="text-keyboard-text/70 leading-relaxed">
                Test your keyboard layouts and behaviors directly on your system
                before committing to firmware flashing, saving time and
                preventing frustration.
              </p>
            </div>

            <div className="glass-card p-6 transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:shadow-keyboard-primary/20">
              <h3 className="text-xl font-semibold mb-3">
                Hardware independence
              </h3>
              <p className="text-keyboard-text/70 leading-relaxed">
                Port your carefully crafted layouts between different keyboards,
                or use them with any keyboard—even ones without programmable
                firmware.
              </p>
            </div>

            <div className="glass-card p-6 transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:shadow-keyboard-primary/20">
              <h3 className="text-xl font-semibold mb-3">Keymaps as code</h3>
              <p className="text-keyboard-text/70 leading-relaxed">
                Treat your keyboard layouts as what they truly are: code. Make
                them reusable, composable, and inspectable, with all the
                benefits of software development practices.
              </p>
            </div>

            <div className="glass-card p-6 transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:shadow-keyboard-primary/20">
              <h3 className="text-xl font-semibold mb-3">No learning curve</h3>
              <p className="text-keyboard-text/70 leading-relaxed">
                Join the Kanata ecosystem without having to learn a new syntax
                from scratch. Leverage your existing ZMK knowledge and
                configurations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;
