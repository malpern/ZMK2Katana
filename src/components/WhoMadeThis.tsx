
import React from 'react';
import { Twitter, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhoMadeThis = () => {
  return (
    <section id="creator" className="py-20 bg-keyboard-dark text-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-keyboard-accent/10 px-4 py-1.5 rounded-full mb-6">
            <span className="text-keyboard-accent text-sm font-medium">Who Made This?</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Meet the Creator
          </h2>
          
          <div className="glass-card p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="shrink-0">
                <img 
                  src="https://pbs.twimg.com/profile_images/1262747756457652225/Fazb0lNd_400x400.jpg" 
                  alt="Micah Alpern" 
                  className="w-40 h-40 rounded-full border-4 border-keyboard-primary/30 shadow-lg shadow-keyboard-primary/20"
                />
              </div>
              
              <div className="text-left space-y-4">
                <h3 className="text-2xl font-semibold text-center md:text-left">Micah Alpern</h3>
                
                <p className="text-keyboard-text/70 font-bold mb-2">
                  Enjoyer of custom mechanical keyboards, design, and making things.
                </p>
                
                <p className="text-keyboard-text/80 leading-relaxed">
                  Design & Product. Chief Product Officer at SmirkHealth, Prev Sr Director 
                  @Instacart, Prior: Head of Design @Venmo, @Facebook, @Medallia, @LinkedIn, 
                  @Yahoo, @eBay, @Ixda founding board, CMU
                </p>
                
                <div className="flex items-center justify-center md:justify-start space-x-4 pt-2">
                  <a 
                    href="https://github.com/malpern" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5 text-keyboard-text" />
                  </a>
                  
                  <a 
                    href="https://x.com/malpern" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5 text-keyboard-text" />
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/malpern/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5 text-keyboard-text" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoMadeThis;
