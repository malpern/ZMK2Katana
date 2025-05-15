
import React from 'react';
import { Command, Option } from 'lucide-react';

const HomeRowMods = () => {
  return (
    <section id="home-row-mods" className="py-16 bg-keyboard-dark/80">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-keyboard-primary/10 px-4 py-1.5 rounded-full mb-6">
            <span className="text-keyboard-primary text-sm font-medium">Mac Users Guide</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Home Row Mods for Mac Users
          </h2>

          <div className="glass-card p-8 mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <div className="bg-keyboard-dark/60 rounded-lg p-6 border border-keyboard-primary/20">
                  <div className="grid grid-cols-10 gap-2 mb-8">
                    {/* Keyboard Illustration */}
                    <div className="col-span-10 text-center mb-2">
                      <span className="text-sm text-keyboard-text/60">Standard QWERTY Layout with Home Row Mods</span>
                    </div>
                    
                    {/* Row 1 */}
                    <div className="key col-span-1">Q</div>
                    <div className="key col-span-1">W</div>
                    <div className="key col-span-1">E</div>
                    <div className="key col-span-1">R</div>
                    <div className="key col-span-1">T</div>
                    <div className="key col-span-1">Y</div>
                    <div className="key col-span-1">U</div>
                    <div className="key col-span-1">I</div>
                    <div className="key col-span-1">O</div>
                    <div className="key col-span-1">P</div>
                    
                    {/* Row 2 - Home Row */}
                    <div className="key col-span-1 bg-keyboard-primary/20 flex flex-col">
                      <span>A</span>
                      <span className="text-xs text-keyboard-primary mt-1 flex items-center justify-center">
                        <Command className="h-3 w-3 mr-1" /> GUI
                      </span>
                    </div>
                    <div className="key col-span-1 bg-keyboard-primary/20 flex flex-col">
                      <span>S</span>
                      <span className="text-xs text-keyboard-primary mt-1 flex items-center justify-center">
                        <Option className="h-3 w-3 mr-1" /> Alt
                      </span>
                    </div>
                    <div className="key col-span-1 bg-keyboard-primary/20 flex flex-col">
                      <span>D</span>
                      <span className="text-xs text-keyboard-primary mt-1">Shift</span>
                    </div>
                    <div className="key col-span-1 bg-keyboard-primary/20 flex flex-col">
                      <span>F</span>
                      <span className="text-xs text-keyboard-primary mt-1">Ctrl</span>
                    </div>
                    <div className="key col-span-1">G</div>
                    <div className="key col-span-1">H</div>
                    <div className="key col-span-1 bg-keyboard-primary/20 flex flex-col">
                      <span>J</span>
                      <span className="text-xs text-keyboard-primary mt-1">Ctrl</span>
                    </div>
                    <div className="key col-span-1 bg-keyboard-primary/20 flex flex-col">
                      <span>K</span>
                      <span className="text-xs text-keyboard-primary mt-1">Shift</span>
                    </div>
                    <div className="key col-span-1 bg-keyboard-primary/20 flex flex-col">
                      <span>L</span>
                      <span className="text-xs text-keyboard-primary mt-1 flex items-center justify-center">
                        <Option className="h-3 w-3 mr-1" /> Alt
                      </span>
                    </div>
                    <div className="key col-span-1 bg-keyboard-primary/20 flex flex-col">
                      <span>;</span>
                      <span className="text-xs text-keyboard-primary mt-1 flex items-center justify-center">
                        <Command className="h-3 w-3 mr-1" /> GUI
                      </span>
                    </div>
                    
                    {/* Row 3 */}
                    <div className="key col-span-1">Z</div>
                    <div className="key col-span-1">X</div>
                    <div className="key col-span-1">C</div>
                    <div className="key col-span-1">V</div>
                    <div className="key col-span-1">B</div>
                    <div className="key col-span-1">N</div>
                    <div className="key col-span-1">M</div>
                    <div className="key col-span-1">,</div>
                    <div className="key col-span-1">.</div>
                    <div className="key col-span-1">/</div>
                  </div>
                  <p className="text-sm text-keyboard-text/70 text-center">
                    Tap for letters, hold for modifiers
                  </p>
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-keyboard-text via-keyboard-primary to-keyboard-secondary bg-clip-text text-transparent">
                  Use Home Row Mods on Your Mac
                </h3>
                <p className="mb-4 text-keyboard-text/80 leading-relaxed">
                  You don't need a custom mechanical keyboard to enjoy the ergonomic benefits of home row mods. Using Kanata, you can transform your built-in Mac keyboard into an ergonomic powerhouse.
                </p>
                <h4 className="text-xl font-semibold mb-2 text-keyboard-text">What are Home Row Mods?</h4>
                <p className="mb-4 text-keyboard-text/80 leading-relaxed">
                  Home row mods are a powerful keyboard customization technique that assigns modifier keys (Ctrl, Shift, Alt, GUI/Command) to the home row keys when held down, while preserving their normal behavior when tapped. This keeps your fingers on the home row, reducing hand movement and strain.
                </p>
                <div className="bg-keyboard-highlight/10 p-4 rounded-lg mb-4">
                  <h5 className="font-semibold text-keyboard-highlight mb-2">Benefits:</h5>
                  <ul className="list-disc pl-5 text-keyboard-text/80 space-y-1">
                    <li>Reduces finger travel distance</li>
                    <li>Minimizes hand fatigue</li>
                    <li>Increases typing efficiency</li>
                    <li>Works with your existing Mac keyboard</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <a 
                    href="https://precondition.github.io/home-row-mods" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-keyboard-primary hover:text-keyboard-secondary transition-colors"
                  >
                    Learn more about Home Row Mods →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-keyboard-dark/40 p-6 rounded-lg border border-keyboard-primary/10">
            <h4 className="text-xl font-semibold mb-4 text-center text-keyboard-text">Getting Started with Kanata for Mac</h4>
            <div className="code-block mb-4">
              <p className="text-sm text-keyboard-text/80 mb-2"># Install Kanata via Homebrew</p>
              <p className="font-mono text-keyboard-highlight">brew tap jtroo/kanata</p>
              <p className="font-mono text-keyboard-highlight">brew install kanata</p>
            </div>
            <p className="text-keyboard-text/80 mb-4 text-center">
              Once installed, create a simple configuration file with home row mods:
            </p>
            <div className="code-block">
              <p className="text-sm text-keyboard-text/80 mb-2"># Basic home row mods configuration</p>
              <p className="font-mono text-keyboard-highlight">
                (defsrc a s d f g h j k l ;)<br />
                (deflayer home-row<br />
                  &nbsp;&nbsp;(tap-hold 200 100 a lcmd)<br />
                  &nbsp;&nbsp;(tap-hold 200 100 s lalt)<br />
                  &nbsp;&nbsp;(tap-hold 200 100 d lsft)<br />
                  &nbsp;&nbsp;(tap-hold 200 100 f lctl)<br />
                  &nbsp;&nbsp;g h<br />
                  &nbsp;&nbsp;(tap-hold 200 100 j rctl)<br />
                  &nbsp;&nbsp;(tap-hold 200 100 k rsft)<br />
                  &nbsp;&nbsp;(tap-hold 200 100 l ralt)<br />
                  &nbsp;&nbsp;(tap-hold 200 100 ; rcmd)<br />
                )
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeRowMods;
