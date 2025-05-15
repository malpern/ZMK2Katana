
import React from 'react';
import { Code, Keyboard, Repeat, Cpu, Layers, Zap } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
  <div className="glass-card p-6 flex flex-col h-full">
    <div className="bg-keyboard-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-keyboard-primary" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-keyboard-text/70 leading-relaxed">{description}</p>
  </div>
);

const Features = () => {
  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-glow z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block bg-keyboard-secondary/10 px-4 py-1.5 rounded-full mb-6">
            <span className="text-keyboard-secondary text-sm font-medium">Key Features</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bridging Firmware and Software
          </h2>
          
          <p className="text-lg text-keyboard-text/80 leading-relaxed">
            The ZMK to Kanata Converter gives you the best of both worlds - the portability of firmware with the flexibility of software remapping.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            icon={Code}
            title="Parse ZMK Keymaps"
            description="Reads ZMK keymap structures, combos, macros, dual-role keys, and layers and converts them to a Kanata-compatible format."
          />
          
          <FeatureCard 
            icon={Keyboard}
            title="Cross-Platform"
            description="Works on macOS, Linux, and Windows, allowing you to use your keyboard layouts consistently across all your devices."
          />
          
          <FeatureCard 
            icon={Repeat}
            title="Normalize & Convert"
            description="Transforms ZMK's Device Tree format into Kanata's expressive DSL with intelligent translation of behaviors."
          />
          
          <FeatureCard 
            icon={Cpu}
            title="Behavior Preservation"
            description="Carefully preserves the logic and timing of your advanced keyboard behaviors during conversion."
          />
          
          <FeatureCard 
            icon={Layers}
            title="Complex Layer Support"
            description="Handles complex layer transitions, momentary activations, and layer taps through Kanata's equivalent mechanisms."
          />
          
          <FeatureCard 
            icon={Zap}
            title="Live Reloading"
            description="Coming soon: Test and iterate on layouts without reflashing your firmware, enabling rapid prototyping."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
