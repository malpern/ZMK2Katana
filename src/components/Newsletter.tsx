
import React from 'react';
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-20 bg-keyboard-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-glow opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Join Our GitHub Project</h2>
              <p className="text-keyboard-text/70 leading-relaxed">
                Contribute to the ZMK2Kanata project, report issues, or star the repository to show your support. 
                We welcome community contributions!
              </p>
            </div>
            
            <div className="flex justify-center">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  className="bg-keyboard-primary hover:bg-keyboard-primary/90 text-white h-12 px-8 flex items-center gap-2"
                >
                  <Github className="h-5 w-5" />
                  View on GitHub
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
