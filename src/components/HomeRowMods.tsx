import React, { useState, useRef, useEffect } from "react";
import { Command, Option } from "lucide-react";

const HomeRowMods = () => {
  const [screenText, setScreenText] = useState("Try typing or holding keys...");
  const [pressedKeys, setPressedKeys] = useState<Record<string, boolean>>({});
  const [heldKeys, setHeldKeys] = useState<Record<string, boolean>>({});
  const [flashingKeys, setFlashingKeys] = useState<Record<string, boolean>>({});
  const timeoutRefs = useRef<Record<string, NodeJS.Timeout>>({});

  // Add a mapping from mod symbol to display name
  const modDisplay = {
    "⌘": "Command",
    "⎇": "Option",
    "⇧": "Shift",
    "⬆": "Shift",
    "⌃": "Control",
  };

  // Clear screen text after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (screenText !== "Try typing or holding keys...") {
        setScreenText("Try typing or holding keys...");
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [screenText]);

  // Define keyboard layout with key labels and modifiers
  const keyboardLayout = [
    // Row 1
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    // Row 2 - Home Row
    [
      { key: "A", mod: "⌘", modIcon: <Command className="h-3 w-3 mr-1" /> },
      { key: "S", mod: "⎇", modIcon: <Option className="h-3 w-3 mr-1" /> },
      { key: "D", mod: "⇧", modIcon: null },
      { key: "F", mod: "⌃", modIcon: null },
      { key: "G", mod: null, modIcon: null },
      { key: "H", mod: null, modIcon: null },
      { key: "J", mod: "⌃", modIcon: null },
      { key: "K", mod: "⇧", modIcon: null },
      { key: "L", mod: "⎇", modIcon: <Option className="h-3 w-3 mr-1" /> },
      { key: ";", mod: "⌘", modIcon: <Command className="h-3 w-3 mr-1" /> },
    ],
    // Row 3
    ["Z", "X", "C", "V", "B", "N", "M", ",", ".", "/"],
  ];

  // Play a keyboard click sound (allow overlapping by creating a new Audio instance each time)
  const playClickSound = () => {
    if (typeof window !== "undefined") {
      const audio = new Audio("/click-short.mp3");
      audio.currentTime = 0;
      audio.play();
    }
  };

  // Play a celebratory two-note beep (high then low)
  const playBeep = () => {
    if (typeof window !== 'undefined') {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const g = ctx.createGain();
      g.gain.value = 0.08;
      g.connect(ctx.destination);
      // First note: high
      const o1 = ctx.createOscillator();
      o1.type = 'sine';
      o1.frequency.value = 1046; // C6
      o1.connect(g);
      o1.start();
      o1.stop(ctx.currentTime + 0.12);
      // Second note: low
      const o2 = ctx.createOscillator();
      o2.type = 'sine';
      o2.frequency.value = 784; // G5
      o2.connect(g);
      o2.start(ctx.currentTime + 0.16);
      o2.stop(ctx.currentTime + 0.28);
      o2.onended = () => ctx.close();
    }
  };

  const handleKeyDown = (key: string, mod: string | null) => {
    // Set key as pressed
    setPressedKeys((prev) => ({ ...prev, [key]: true }));
    playClickSound();

    // Setup hold detection
    if (mod) {
      timeoutRefs.current[key] = setTimeout(() => {
        setHeldKeys((prev) => ({ ...prev, [key]: true }));
        // Show both symbol and name
        const symbol = mod === "⇧" ? "⬆" : mod;
        setScreenText(`Holding: ${symbol} ${modDisplay[symbol] || ""}`);
        // Flash the key brightly
        setFlashingKeys((prev) => ({ ...prev, [key]: true }));
        setTimeout(() => {
          setFlashingKeys((prev) => ({ ...prev, [key]: false }));
        }, 200);
        // Play celebratory beep
        playBeep();
      }, 500); // Hold for 500ms to activate modifier
    }
  };

  const handleKeyUp = (key: string) => {
    setPressedKeys((prev) => ({ ...prev, [key]: false }));

    // Clear hold timeout and state
    if (timeoutRefs.current[key]) {
      clearTimeout(timeoutRefs.current[key]);
      delete timeoutRefs.current[key];
    }

    // If the key was held, just clear the hold state
    if (heldKeys[key]) {
      setHeldKeys((prev) => ({ ...prev, [key]: false }));
    } else {
      // If it wasn't held, it's a tap, so show the character
      setScreenText(`Typed: ${key}`);
    }
  };

  // Handle leaving the keyboard area
  const handleMouseLeave = () => {
    setPressedKeys({});
    setHeldKeys({});
    Object.values(timeoutRefs.current).forEach((timeout) =>
      clearTimeout(timeout),
    );
    timeoutRefs.current = {};
  };

  const renderKey = (
    keyData:
      | string
      | { key: string; mod: string | null; modIcon: React.ReactNode },
    rowIndex: number,
    keyIndex: number,
  ) => {
    if (typeof keyData === "string") {
      // Regular key
      const isPressed = pressedKeys[keyData] || false;
      return (
        <div
          key={`${rowIndex}-${keyIndex}`}
          className={`key col-span-1 ${isPressed ? "bg-keyboard-primary/30 transform scale-95" : ""} cursor-pointer`}
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
          className={`key col-span-1 flex flex-col transition-all duration-200 cursor-pointer \
            ${isHeld ? 'ring-2 ring-keyboard-highlight' : ''} \
            ${flashingKeys[key] ? 'flash-bright' : ''} \
            ${isPressed && mod ? 'bg-yellow-200/80 text-keyboard-dark' : ''} \
            ${isPressed && !mod ? 'bg-keyboard-primary/30 transform scale-95' : ''} \
            ${!isPressed ? 'bg-keyboard-primary/20' : ''} \
            ${!mod ? 'justify-start' : ''} \
            hover:bg-keyboard-primary/20 hover:shadow-lg`}
          onMouseDown={() => handleKeyDown(key, mod)}
          onMouseUp={() => handleKeyUp(key)}
          onMouseLeave={() => isPressed && handleKeyUp(key)}
          role="button"
          tabIndex={0}
          aria-label={mod ? `${key} ${modDisplay[mod === '⇧' ? '⬆' : mod] || ''}` : key}
          onKeyDown={e => {
            if (e.key === ' ' || e.key === 'Enter') {
              handleKeyDown(key, mod);
            }
          }}
          onKeyUp={e => {
            if (e.key === ' ' || e.key === 'Enter') {
              handleKeyUp(key);
            }
          }}
        >
          <span>{key}</span>
          {/* Always render the mod container for alignment, but only show symbol if mod exists */}
          <span
            className={`text-xs text-keyboard-primary flex items-center justify-center ${mod ? "mt-0.5 min-h-[0.75em]" : ""}`}
          >
            {mod === "⇧" ? (
              <span className="font-bold text-xl leading-none">⬆</span>
            ) : mod === "⌃" ? (
              <span className="font-extrabold text-2xl leading-none">⌃</span>
            ) : mod === "⌘" ? (
              <span className="font-bold text-xl leading-none">⌘</span>
            ) : mod === "⎇" ? (
              <span className="font-bold text-xl leading-none">⎇</span>
            ) : mod ? (
              <span className="font-bold">{mod}</span>
            ) : null}
          </span>
        </div>
      );
    }
  };

  return (
    <section id="home-row-mods" className="py-16 bg-keyboard-dark/80">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-keyboard-primary/10 px-4 py-1.5 rounded-full mb-6">
            <span className="text-keyboard-primary text-sm font-medium">Features & Benefits</span>
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

                  <div
                    className="keyboard-container grid grid-cols-10 gap-2 mb-8"
                    onMouseLeave={handleMouseLeave}
                  >
                    {/* Keyboard Illustration */}
                    <div className="col-span-10 text-center mb-2">
                      <span className="text-sm text-keyboard-text/60">
                        Interactive QWERTY Layout with Home Row Mods
                      </span>
                    </div>

                    {/* Render each row of the keyboard */}
                    {keyboardLayout.map((row, rowIndex) => (
                      <React.Fragment key={`row-${rowIndex}`}>
                        {row.map((keyData, keyIndex) =>
                          renderKey(keyData, rowIndex, keyIndex),
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                  <p className="text-sm text-keyboard-text/70 text-center">
                    Tap for letters, hold for modifiers (Click and hold with
                    mouse)
                  </p>
                </div>
              </div>

              <div className="md:w-1/2 text-left">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-keyboard-text via-keyboard-primary to-keyboard-secondary bg-clip-text text-transparent">
                  Use Home Row Mods on Your Mac
                </h3>
                <p className="mb-4 text-keyboard-text/80 leading-relaxed">
                  You don't need a custom mechanical keyboard to enjoy the
                  ergonomic benefits of home row mods. Using Kanata, you can
                  transform your built-in Mac keyboard into an ergonomic
                  powerhouse.
                </p>
                <h4 className="text-xl font-semibold mb-2 text-keyboard-text">
                  What are Home Row Mods?
                </h4>
                <p className="mb-4 text-keyboard-text/80 leading-relaxed">
                  Home row mods are a powerful keyboard customization technique
                  that assigns modifier keys (Ctrl, Shift, Alt, GUI/Command) to
                  the home row keys when held down, while preserving their
                  normal behavior when tapped. This keeps your fingers on the
                  home row, reducing hand movement and strain.
                </p>
                <div className="bg-keyboard-highlight/10 p-4 rounded-lg mb-4">
                  <h5 className="font-semibold text-keyboard-highlight mb-2">
                    Benefits:
                  </h5>
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
        </div>
      </div>
    </section>
  );
};

export default HomeRowMods;
