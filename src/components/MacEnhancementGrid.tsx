
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const macTools = [
  {
    name: 'Raycast',
    description: 'Powerful launcher that lets you control your tools with a few keystrokes',
    image: 'https://upload.wikimedia.org/wikipedia/en/f/f4/Raycast_App_Icon.png',
    url: 'https://www.raycast.com/',
    icon: 'mouse-pointer'
  },
  {
    name: 'Leaderkey',
    description: 'Turn any key into a commander for your keyboard shortcuts',
    image: '/lovable-uploads/a8ab1077-0446-4fc1-827e-e2609c40cd0b.png',
    url: 'https://www.youtube.com/watch?v=EQYakLsYSAQ',
    icon: 'key'
  },
  {
    name: 'Homerow',
    description: 'Keyboard-driven UI navigation for macOS. Reduce your dependency on the mouse.',
    image: 'https://www.homerow.app/_next/image?url=%2Fapp-icon.png&w=640&q=100',
    url: 'https://www.homerow.app/',
    icon: 'keyboard'
  },
  {
    name: 'Keyboard Maestro',
    description: 'Powerful macro tool for automating your daily tasks',
    image: 'https://www.keyboardmaestro.com/img/v11/overview-dark@2x.png',
    url: 'https://www.keyboardmaestro.com/',
    icon: 'keyboard'
  },
  {
    name: 'Karabiner Elements',
    description: 'A powerful keyboard customizer for macOS',
    image: 'https://karabiner-elements.pqrs.org/images/logo.png',
    url: 'https://karabiner-elements.pqrs.org/',
    icon: 'settings'
  },
  {
    name: 'Hammerspoon',
    description: 'A tool for powerful automation of macOS',
    image: 'https://www.hammerspoon.org/images/hammerspoon.png',
    url: 'https://www.hammerspoon.org/',
    icon: 'code'
  },
  {
    name: 'Mode Design',
    description: 'Premium keyboards designed to enhance your typing experience',
    image: 'https://modedesigns.com/cdn/shop/files/sixtyfive-2024-stacked-header.jpg?v=1722901512&width=1540',
    url: 'https://shop.modedesigns.com/',
    icon: 'layout-grid'
  },
  {
    name: 'Tiny Keyboard Shop',
    description: 'San Jose, CA — Quality keyboard parts and accessories',
    image: 'https://www.mercurynews.com/wp-content/uploads/2023/12/SJM-L-KEYBOARD-4.jpg?w=620',
    url: 'https://www.instagram.com/tinykeyboardshop/?hl=en',
    icon: 'shopping-cart'
  }
];

const MacEnhancementGrid = () => {
  return (
    <section id="mac-enhancements" className="py-20 bg-keyboard-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block bg-keyboard-primary/10 px-4 py-1.5 rounded-full mb-6">
            <span className="text-keyboard-primary text-sm font-medium">More Resources</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Superpower Your Mac Keyboard
          </h2>
          
          <p className="text-keyboard-text/80 max-w-2xl mx-auto mb-12">
            Looking for more ways to enhance your Mac keyboard experience? Check out these powerful tools and resources.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {macTools.map((tool, index) => (
              <a 
                href={tool.url}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="group relative bg-gray-900/60 rounded-lg overflow-hidden border border-white/10 hover:border-keyboard-primary/50 transition-all h-full">
                  <div className="aspect-video overflow-hidden bg-gray-800">
                    <img
                      src={tool.image}
                      alt={`${tool.name} screenshot`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://placehold.co/400x200/1e1e1e/fafafa?text=" + encodeURIComponent(tool.name);
                      }}
                    />
                  </div>
                  
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-lg text-keyboard-text">{tool.name}</h3>
                      <ExternalLink className="h-4 w-4 text-keyboard-text/50 group-hover:text-keyboard-primary transition-colors" />
                    </div>
                    <p className="text-sm text-keyboard-text/70">{tool.description}</p>
                  </div>
                  
                  <div className="absolute top-3 right-3">
                    <Button 
                      size="sm" 
                      variant="secondary" 
                      className="bg-black/40 hover:bg-keyboard-primary backdrop-blur-md text-xs"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MacEnhancementGrid;
