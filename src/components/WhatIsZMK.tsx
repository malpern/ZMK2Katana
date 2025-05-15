
import React from 'react';
import { ExternalLink } from 'lucide-react';

const keyboards = [
  {
    name: "Corne Keyboard",
    image: "https://cdn.shopify.com/s/files/1/0227/9171/6941/files/PXL_20230321_122459080_a2e70b89-2e76-4a2f-9f50-e96ac56e6708_900x.jpg",
    url: "https://typeractive.xyz"
  },
  {
    name: "Ferris Sweep",
    image: "https://github.com/davidphilipbarr/Sweep/raw/main/img/sweep.png",
    url: "https://typeractive.xyz"
  },
  {
    name: "Lily58",
    image: "https://cdn.shopify.com/s/files/1/0599/3460/5491/files/Lily58-Pro-Split-Keyboard-Kit-Keycaps-min.jpg",
    url: "https://typeractive.xyz"
  },
  {
    name: "Sofle Keyboard",
    image: "https://cdn.shopify.com/s/files/1/0227/9171/6941/files/PXL_20230321_122548178_9a6359b5-0e7d-4e0c-9655-be887c847c38_900x.jpg",
    url: "https://typeractive.xyz"
  }
];

const WhatIsZMK = () => {
  return (
    <section id="what-is-zmk" className="py-20 bg-keyboard-dark/80">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-keyboard-primary/10 px-4 py-1.5 rounded-full mb-6">
            <span className="text-keyboard-primary text-sm font-medium">The Firmware</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            What is ZMK?
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="flex-1">
              <div className="bg-gray-900/80 p-6 rounded-lg border border-white/10 backdrop-blur-sm h-full">
                <div className="flex justify-center mb-6">
                  <img 
                    src="https://www.zephyrproject.org/wp-content/uploads/2021/09/zmk_logo.svg" 
                    alt="ZMK Logo" 
                    className="h-24"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4">The Next-Gen Keyboard Firmware</h3>
                <p className="text-keyboard-text/90 mb-4">
                  ZMK Firmware is an open source keyboard firmware built on the Zephyr™ RTOS. It powers
                  dozens of wireless, low-power split keyboards and offers state-of-the-art features.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <div className="bg-keyboard-primary/20 p-1 rounded mr-3 mt-1">
                      <span className="text-keyboard-primary text-xs font-semibold">+</span>
                    </div>
                    <p className="text-keyboard-text/80 text-sm">
                      <span className="font-semibold">Wireless-First</span>: Built from the ground up for Bluetooth LE
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-keyboard-primary/20 p-1 rounded mr-3 mt-1">
                      <span className="text-keyboard-primary text-xs font-semibold">+</span>
                    </div>
                    <p className="text-keyboard-text/80 text-sm">
                      <span className="font-semibold">Power Efficient</span>: Designed for long battery life
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-keyboard-primary/20 p-1 rounded mr-3 mt-1">
                      <span className="text-keyboard-primary text-xs font-semibold">+</span>
                    </div>
                    <p className="text-keyboard-text/80 text-sm">
                      <span className="font-semibold">Powerful Behaviors</span>: Tap-dance, combos, and more
                    </p>
                  </div>
                </div>
                <a 
                  href="https://zmk.dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-keyboard-primary hover:text-keyboard-primary/80 transition-colors"
                >
                  Visit ZMK Website
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
            
            <div className="flex-1">
              <div className="bg-gray-900/80 p-6 rounded-lg border border-white/10 backdrop-blur-sm h-full">
                <h3 className="text-xl font-bold mb-4">Advanced Features for Typists</h3>
                <p className="text-keyboard-text/90 mb-6">
                  ZMK goes beyond basic keyboard functionality with powerful, customizable behaviors:
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="bg-keyboard-secondary/20 p-1 rounded-full mr-3 mt-1">
                      <span className="text-keyboard-secondary text-xs font-semibold">▶</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-keyboard-text">Layers</h4>
                      <p className="text-keyboard-text/80 text-sm">
                        Create multiple keyboard layers with different mappings
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-keyboard-secondary/20 p-1 rounded-full mr-3 mt-1">
                      <span className="text-keyboard-secondary text-xs font-semibold">▶</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-keyboard-text">Hold-Tap</h4>
                      <p className="text-keyboard-text/80 text-sm">
                        Different behavior when tapping vs holding a key
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-keyboard-secondary/20 p-1 rounded-full mr-3 mt-1">
                      <span className="text-keyboard-secondary text-xs font-semibold">▶</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-keyboard-text">Combos</h4>
                      <p className="text-keyboard-text/80 text-sm">
                        Press multiple keys together to trigger different actions
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-keyboard-secondary/20 p-1 rounded-full mr-3 mt-1">
                      <span className="text-keyboard-secondary text-xs font-semibold">▶</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-keyboard-text">Macros</h4>
                      <p className="text-keyboard-text/80 text-sm">
                        Create sequences of keystrokes triggered by a single key
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-6 text-center">Popular ZMK-Powered Keyboards</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {keyboards.map((keyboard, index) => (
              <a 
                key={index}
                href={keyboard.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-900/60 rounded-lg overflow-hidden border border-white/10 hover:border-keyboard-primary/50 transition-colors group"
              >
                <div className="h-40 overflow-hidden">
                  <img 
                    src={keyboard.image} 
                    alt={keyboard.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://placehold.co/400x200/1e1e1e/fafafa?text=Keyboard+Image";
                    }}
                  />
                </div>
                <div className="p-4 flex items-center justify-between">
                  <span className="font-medium">{keyboard.name}</span>
                  <ExternalLink className="h-4 w-4 text-keyboard-text/50 group-hover:text-keyboard-primary transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsZMK;
