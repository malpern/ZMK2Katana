
import React from "react";
import { Check, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const FeatureItem = ({
  feature,
  supported = true,
}: {
  feature: string;
  supported?: boolean;
}) => (
  <li
    className={cn(
      "flex items-start gap-2 p-3 rounded-md transition-all duration-300 hover:bg-keyboard-primary/10 group",
      supported ? "text-keyboard-text" : "text-keyboard-text/80"
    )}
  >
    {supported ? (
      <Check className="h-5 w-5 text-keyboard-highlight flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
    ) : (
      <AlertCircle className="h-5 w-5 text-keyboard-secondary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
    )}
    <span>{feature}</span>
  </li>
);

const KeyFeatures = () => {
  const fullySupported = [
    "Basic keycodes",
    "Layers (standard switching: &mo, &to, &lt, etc.)",
    "Home row mods (hold-tap, mod-tap, &mt, &hold-tap)",
    "Simple combos (A+B → key)",
    "Tap-dance (multiple tap actions)",
    "Sticky keys (one-shot)",
    "Transparent/none keys",
    "Key repeat",
    "Caps word",
  ];

  const partiallySupported = [
    "Advanced combos (simple combos only)",
    "Custom hold-tap/mod-tap properties (standard timing/flavor/bindings)",
    "Tap-dance (basic tap actions only)",
    "Macros (simple key sequences)",
    "Unicode output (macOS only)",
    "Conditional layers (basic conditions)",
    "Sticky modifiers (simple one-shot)",
    "Custom behaviors (if similar to standard features)",
  ];

  return (
    <section id="key-features" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-glow z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-keyboard-primary/10 px-4 py-1.5 rounded-full mb-6">
            <span className="text-keyboard-primary text-sm font-medium">
              Feature Support
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Key Features
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="glass-card p-6 h-full transition-transform hover:translate-y-[-4px]">
            <h3 className="text-xl font-semibold mb-4 text-left text-keyboard-highlight">
              Fully Supported Features
            </h3>
            <ul className="space-y-1 text-left">
              {fullySupported.map((feature, index) => (
                <FeatureItem key={index} feature={feature} />
              ))}
            </ul>
          </div>

          <div className="glass-card p-6 h-full transition-transform hover:translate-y-[-4px]">
            <h3 className="text-xl font-semibold mb-4 text-left text-keyboard-secondary">
              Partially Supported Features
            </h3>
            <ul className="space-y-1 text-left">
              {partiallySupported.map((feature, index) => (
                <FeatureItem key={index} feature={feature} supported={false} />
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center gap-2 p-3 rounded-lg bg-keyboard-dark/80 border border-keyboard-primary/20">
            <img
              src="/lovable-uploads/d297019f-86e6-4cc0-bbca-fd86db385dc9.png"
              alt="Keymap illustration"
              className="w-8 h-8 object-contain"
            />
            <span className="text-keyboard-text/80">
              Continuous updates expanding supported features
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
