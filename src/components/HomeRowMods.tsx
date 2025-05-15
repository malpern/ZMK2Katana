
import React, { useState, useRef, useEffect } from 'react';
import { Command, Option } from 'lucide-react';

const HomeRowMods = () => {
  const [screenText, setScreenText] = useState('Try typing or holding keys...');
  const [pressedKeys, setPressedKeys] = useState<Record<string, boolean>>({});
  const [heldKeys, setHeldKeys] = useState<Record<string, boolean>>({});
  const timeoutRefs = useRef<Record<string, NodeJS.Timeout>>({});

  // Clear screen text after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (screenText !== 'Try typing or holding keys...') {
        setScreenText('Try typing or holding keys...');
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [screenText]);

  // Define keyboard layout with key labels and modifiers
  const keyboardLayout = [
    // Row 1
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    // Row 2 - Home Row
    [
      { key: 'A', mod: 'GUI', modIcon: <Command className="h-3 w-3 mr-1" /> },
      { key: 'S', mod: 'Alt', modIcon: <Option className="h-3 w-3 mr-1" /> },
      { key: 'D', mod: 'Shift', modIcon: null },
      { key: 'F', mod: 'Ctrl', modIcon: null },
      { key: 'G', mod: null, modIcon: null },
      { key: 'H', mod: null, modIcon: null },
      { key: 'J', mod: 'Ctrl', modIcon: null },
      { key: 'K', mod: 'Shift', modIcon: null },
      { key: 'L', mod: 'Alt', modIcon: <Option className="h-3 w-3 mr-1" /> },
      { key: ';', mod: 'GUI', modIcon: <Command className="h-3 w-3 mr-1" /> },
    ],
    // Row 3
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/'],
  ];

  const handleKeyDown = (key: string, mod: string | null) => {
    // Set key as pressed
    setPressedKeys(prev => ({ ...prev, [key]: true }));

    // Setup hold detection
    if (mod) {
      timeoutRefs.current[key] = setTimeout(() => {
        setHeldKeys(prev => ({ ...prev, [key]: true }));
        setScreenText(`Holding: ${mod}`);
      }, 500); // Hold for 500ms to activate modifier
    }
  };

  const handleKeyUp = (key: string) => {
    setPressedKeys(prev => ({ ...prev, [key]: false }));
    
    // Clear hold timeout and state
    if (timeoutRefs.current[key]) {
      clearTimeout(timeoutRefs.current[key]);
      delete timeoutRefs.current[key];
    }
    
    // If the key was held, just clear the hold state
    if (heldKeys[key]) {
      setHeldKeys(prev => ({ ...prev, [key]: false }));
    } else {
      // If it wasn't held, it's a tap, so show the character
      setScreenText(`Typed: ${key}`);
    }
  };

  // Handle leaving the keyboard area
  const handleMouseLeave = () => {
    setPressedKeys({});
    setHeldKeys({});
    Object.values(timeoutRefs.current).forEach(timeout => clearTimeout(timeout));
    timeoutRefs.current = {};
  };

  const renderKey = (keyData: string | { key: string; mod: string | null; modIcon: React.ReactNode }, rowIndex: number, keyIndex: number) => {
    if (typeof keyData === 'string') {
      // Regular key
      const isPressed = pressedKeys[keyData] || false;
      return (
        <div 
          key={`${rowIndex}-${keyIndex}`}
          className={`key col-span-1 ${isPressed ? 'bg-keyboard-primary/30 transform scale-95' : ''} cursor-pointer`}
          onMouseDown={() => handleKeyDown(keyData, null)}
          onMouseUp={() => handleKeyUp(keyData)}
          onMouseLeave={() => isPressed && handleKeyUp(keyData)}
        >
          {keyData}
        </div>
      );
    } else {
      // Home row key with modifier
      const { key, mod, modIcon } = keyData;
      const isPressed = pressedKeys[key] || false;
      const isHeld = heldKeys[key] || false;
      
      return (
        <div
          key={`${rowIndex}-${keyIndex}`}
          className={`key col-span-1 ${isPressed ? 'bg-keyboard-primary/30 transform scale-95' : 'bg-keyboard-primary/20'} flex flex-col transition-all duration-200 cursor-pointer ${isHeld ? 'ring-2 ring-keyboard-highlight' : ''}`}
          onMouseDown={() => handleKeyDown(key, mod)}
          onMouseUp={() => handleKeyUp(key)}
          onMouseLeave={() => isPressed && handleKeyUp(key)}
        >
          <span>{key}</span>
          {mod && (
            <span className="text-xs text-keyboard-primary mt-1 flex items-center justify-center">
              {modIcon}{mod}
            </span>
          )}
        </div>
      );
    }
  };

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
                  {/* Virtual Screen */}
                  <div className="bg-keyboard-dark rounded-lg p-3 mb-6 border border-gray-700 h-16 flex items-center justify-center">
                    <p className="font-mono text-keyboard-highlight text-lg">
                      {screenText}
                    </p>
                  </div>
                  
                  <div className="keyboard-container grid grid-cols-10 gap-2 mb-8" onMouseLeave={handleMouseLeave}>
                    {/* Keyboard Illustration */}
                    <div className="col-span-10 text-center mb-2">
                      <span className="text-sm text-keyboard-text/60">Interactive QWERTY Layout with Home Row Mods</span>
                    </div>
                    
                    {/* Render each row of the keyboard */}
                    {keyboardLayout.map((row, rowIndex) => (
                      <React.Fragment key={`row-${rowIndex}`}>
                        {row.map((keyData, keyIndex) => renderKey(keyData, rowIndex, keyIndex))}
                      </React.Fragment>
                    ))}
                  </div>
                  <p className="text-sm text-keyboard-text/70 text-center">
                    Tap for letters, hold for modifiers (Click and hold with mouse)
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

      {/* Custom cursor styles */}
      <style jsx global>{`
        .keyboard-container .key {
          cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;'><text y='50%' x='10%' dominant-baseline='middle' text-anchor='middle' font-size='40'>👆</text></svg>") 20 0, auto;
        }
      `}</style>
    </section>
  );
};

export default HomeRowMods;
