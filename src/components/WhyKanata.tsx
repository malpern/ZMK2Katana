
import React from 'react';
import { Check } from 'lucide-react';

const WhyKanata = () => {
  return (
    <section className="py-16 bg-keyboard-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-keyboard-secondary/10 px-4 py-1.5 rounded-full mb-6">
            <span className="text-keyboard-secondary text-sm font-medium">The Comparison</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Why Kanata Instead of Karabiner Elements?
          </h2>
          
          <p className="text-lg text-center text-keyboard-text/80 mb-12 leading-relaxed max-w-3xl mx-auto">
            While Karabiner Elements is a popular macOS keyboard customization tool, 
            Kanata offers several advantages for advanced users, especially those coming from ZMK.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-6 text-keyboard-text">Kanata Advantages</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-keyboard-primary/20 p-1 rounded-full mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-keyboard-primary" />
                  </span>
                  <span className="text-keyboard-text/80">
                    <strong className="text-keyboard-text">Firmware-like Syntax</strong> - Kanata's configuration syntax is similar to keyboard firmware, making it easier for enthusiasts to transition.
                  </span>
                </li>
                
                <li className="flex items-start">
                  <span className="bg-keyboard-primary/20 p-1 rounded-full mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-keyboard-primary" />
                  </span>
                  <span className="text-keyboard-text/80">
                    <strong className="text-keyboard-text">Text-based Configuration</strong> - Simple text files make it easy to version control, share, and modify configurations.
                  </span>
                </li>
                
                <li className="flex items-start">
                  <span className="bg-keyboard-primary/20 p-1 rounded-full mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-keyboard-primary" />
                  </span>
                  <span className="text-keyboard-text/80">
                    <strong className="text-keyboard-text">Consistent Cross-Platform</strong> - Works the same way on both macOS and Linux, perfect for users who switch between systems.
                  </span>
                </li>
                
                <li className="flex items-start">
                  <span className="bg-keyboard-primary/20 p-1 rounded-full mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-keyboard-primary" />
                  </span>
                  <span className="text-keyboard-text/80">
                    <strong className="text-keyboard-text">Live Reload</strong> - Configuration changes can be applied instantly without restarting the application.
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-6 text-keyboard-text">Kanata vs. Karabiner</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-keyboard-primary/20 p-1 rounded-full mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-keyboard-primary" />
                  </span>
                  <span className="text-keyboard-text/80">
                    <strong className="text-keyboard-text">Simplified Complexity</strong> - Kanata offers similar power with a more streamlined, programmer-friendly configuration system.
                  </span>
                </li>
                
                <li className="flex items-start">
                  <span className="bg-keyboard-primary/20 p-1 rounded-full mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-keyboard-primary" />
                  </span>
                  <span className="text-keyboard-text/80">
                    <strong className="text-keyboard-text">Better ZMK Translation</strong> - Kanata's behaviors map more directly to ZMK, making the transition almost seamless.
                  </span>
                </li>
                
                <li className="flex items-start">
                  <span className="bg-keyboard-primary/20 p-1 rounded-full mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-keyboard-primary" />
                  </span>
                  <span className="text-keyboard-text/80">
                    <strong className="text-keyboard-text">Active Development</strong> - Actively maintained with regular updates and improvements.
                  </span>
                </li>
                
                <li className="flex items-start">
                  <span className="bg-keyboard-primary/20 p-1 rounded-full mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-keyboard-primary" />
                  </span>
                  <span className="text-keyboard-text/80">
                    <strong className="text-keyboard-text">Resource Efficient</strong> - Lightweight and optimized for performance with minimal system impact.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyKanata;
