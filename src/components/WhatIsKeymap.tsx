import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ExternalLink } from "lucide-react";

const keyboards = [
  {
    name: "Corne Keyboard",
    image:
      "https://keebmaker.com/cdn/shop/files/customKeeb_13_11493d68-c1c4-409a-9449-132b236ddc30.png?v=1719354275&width=990",
    url: "https://keebmaker.com/products/corne-36-lp-keyboard?variant=49212633448747&currency=USD&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&srsltid=AfmBOoqKLVwuCtzRkeHfna1NybgOs9aRJD2jNtF_59wh7OALv-kRFd-6c3o&gQT=2",
  },
  {
    name: "Ferris Sweep",
    image:
      "https://kriscables.com/wp-content/uploads/2022/12/DSC05868-3-2048x637.jpg",
    url: "https://kriscables.com/ferris-sweep/",
  },
  {
    name: "Lily58",
    image: "/lovable-uploads/7928c1b7-2d65-4b21-901c-a12328629431.png",
    url: "https://typeractive.xyz",
  },
  {
    name: "Dactyl Manuform",
    image:
      "https://tuxtower.net/processed_images/dactylplaceholder.b6e998bacdab5abd.jpg",
    url: "https://tuxtower.net/blog/dactylmanuform/",
  },
];

const WhatIsKeymap = () => {
  return (
    <section className="py-20 bg-keyboard-dark/80">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-keyboard-primary/10 px-4 py-1.5 rounded-full mb-6">
            <span className="text-keyboard-primary text-sm font-medium">
              The Tools You Need
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Understand the Ecosystem
          </h2>

          {/* Nick's Keymap Editor Section */}
          <div className="glass-card p-8 mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 relative h-full">
                <a
                  href="https://nickcoutsos.github.io/keymap-editor/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src="/lovable-uploads/82aa7956-e3ac-462f-b29e-bfd8706c76c4.png"
                    alt="Nick's Keymap Editor Screenshot"
                    className="rounded-lg shadow-xl border border-white/10 w-full object-cover object-left h-64"
                  />
                </a>
                {/* Nick's photo overlapping bottom left corner */}
                <Avatar className="absolute -bottom-4 -left-4 h-16 w-16 border-4 border-keyboard-dark shadow-lg">
                  <AvatarImage
                    src="https://nickcoutsos.github.io/assets/jpg/photo.jpg"
                    alt="Nick Coutsos"
                  />
                  <AvatarFallback className="bg-keyboard-primary text-white font-medium">
                    NC
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="md:w-2/3 text-left">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-keyboard-text via-keyboard-primary to-keyboard-secondary bg-clip-text text-transparent">
                  What is Nick&apos;s Keymap Editor?
                </h3>
                <p className="mb-4 text-keyboard-text/80 leading-relaxed">
                  Nick's Keymap Editor is a visual GUI tool for designing ZMK
                  keyboard layouts without writing code. It provides an
                  intuitive interface for customizing your keyboard's behavior,
                  including layers, combos, and more.
                </p>
                <h4 className="text-xl font-semibold mb-2 text-keyboard-text">
                  Why use it?
                </h4>
                <ul className="list-disc pl-5 text-keyboard-text/80 space-y-2 text-left">
                  <li>Visual interface for configuring complex layouts</li>
                  <li>
                    No need to write Device Tree Source (DTS) files manually
                  </li>
                  <li>Export configurations to ZMK-ready format</li>
                  <li>Perfect for both beginners and power users</li>
                </ul>
                <div className="mt-4">
                  <a
                    href="https://nickcoutsos.github.io/keymap-editor/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-keyboard-primary hover:text-keyboard-secondary transition-colors"
                  >
                    Visit Nick&apos;s Keymap Editor →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Kanata Section */}
          <div className="glass-card p-8 mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 flex justify-center">
                <a
                  href="https://github.com/jtroo/kanata"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src="https://raw.githubusercontent.com/jtroo/kanata/main/assets/kanata-icon.svg"
                    alt="Kanata Logo"
                    className="w-48 h-48"
                  />
                </a>
              </div>
              <div className="md:w-2/3 text-left">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-keyboard-text via-keyboard-primary to-keyboard-secondary bg-clip-text text-transparent">
                  What is Kanata?
                </h3>
                <p className="mb-4 text-keyboard-text/80 leading-relaxed">
                  Kanata is a powerful software-based keyboard customization
                  tool for macOS and Linux. It intercepts and transforms
                  keyboard inputs at the OS level, allowing you to apply complex
                  keyboard behaviors without changing your keyboard's firmware.
                </p>
                <h4 className="text-xl font-semibold mb-2 text-keyboard-text">
                  Key features:
                </h4>
                <ul className="list-disc pl-5 text-keyboard-text/80 space-y-2 text-left">
                  <li>Live configuration changes without recompiling</li>
                  <li>
                    Works with any keyboard, including built-in laptop keyboards
                  </li>
                  <li>
                    Sophisticated key behaviors (tap-hold, layers, combos)
                  </li>
                  <li>Low latency design</li>
                  <li>Runs as a native, efficient background process</li>
                </ul>
                <div className="mt-4">
                  <a
                    href="https://github.com/jtroo/kanata"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-keyboard-primary hover:text-keyboard-secondary transition-colors"
                  >
                    Explore Kanata on GitHub →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ZMK Section */}
          <div className="glass-card p-8 mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 flex justify-center">
                <a
                  href="https://zmk.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src="https://www.zephyrproject.org/wp-content/uploads/2021/09/zmk_logo.svg"
                    alt="ZMK Logo"
                    className="w-48 h-48"
                  />
                </a>
              </div>
              <div className="md:w-2/3 text-left">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-keyboard-text via-keyboard-primary to-keyboard-secondary bg-clip-text text-transparent">
                  What is ZMK?
                </h3>
                <p className="mb-4 text-keyboard-text/80 leading-relaxed">
                  ZMK Firmware is an open source keyboard firmware built on the
                  Zephyr™ RTOS. It powers dozens of wireless, low-power split
                  keyboards and offers state-of-the-art features.
                </p>
                <h4 className="text-xl font-semibold mb-2 text-keyboard-text">
                  Key features:
                </h4>
                <ul className="list-disc pl-5 text-keyboard-text/80 space-y-1 text-left">
                  <li>
                    <span className="font-semibold">Wireless-First</span>: Built
                    from the ground up for Bluetooth LE
                  </li>
                  <li>
                    <span className="font-semibold">Power Efficient</span>:
                    Designed for long battery life
                  </li>
                  <li>
                    <span className="font-semibold">Powerful Behaviors</span>:
                    Tap-dance, combos, and more
                  </li>
                  <li>
                    <span className="font-semibold">Open Source</span>:
                    Community-driven development
                  </li>
                  <li>
                    <span className="font-semibold">Advanced Features</span>:
                    Layers, combos, hold-tap, macros
                  </li>
                </ul>
                <div className="mt-4">
                  <a
                    href="https://zmk.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-keyboard-primary hover:text-keyboard-secondary transition-colors inline-flex items-center"
                  >
                    Visit ZMK Website
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-8">
            Popular ZMK-Powered Custom Mechanical Keyboards
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
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
                      target.src =
                        "https://placehold.co/400x200/1e1e1e/fafafa?text=Keyboard+Image";
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

          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold mb-4 text-left">
              ...now you can get the same power using your basic mac keyboard
            </h3>
            <div className="overflow-hidden rounded-lg">
              <a
                href="https://www.apple.com/shop/product/MK2A3LL/A/magic-keyboard-us-english"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXK73?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=d0dMVFphZTh2YTQyb0pHekNNbjdSZ2tuVHYzMERCZURia3c5SzJFOTlPanVCdEVHeHhPSGNpL2MzN05PekJuUXJoN1hCTUVacmhJZEQrWXRXUTNKUUE"
                  alt="Apple Magic Keyboard"
                  className="w-full h-64 object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsKeymap;
