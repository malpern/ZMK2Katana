
import React, { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp, Settings } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';

const HowItWorks = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <section id="howitworks" className="py-20 bg-keyboard-dark/50 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block bg-keyboard-highlight/10 px-4 py-1.5 rounded-full mb-6">
            <span className="text-keyboard-highlight text-sm font-medium">How It Works</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Under the Hood
          </h2>
          
          <p className="text-lg text-keyboard-text/80 leading-relaxed">
            The converter works as a comprehensive translation layer between two different computational models.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Collapsible 
            open={isExpanded} 
            onOpenChange={setIsExpanded}
            className="w-full"
          >
            {/* Collapsed State - "Glass Card" with illustration */}
            <CollapsibleTrigger className="w-full">
              <div className={`glass-card p-6 transition-all duration-300 hover:shadow-lg hover:border-keyboard-primary/30 ${isExpanded ? 'mb-8 border-keyboard-primary/40' : ''}`}>
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-full md:w-1/3 flex justify-center">
                    <div className="relative w-48 h-48 overflow-hidden rounded-lg">
                      <div className="absolute inset-0 bg-gradient-to-br from-keyboard-primary/20 to-keyboard-secondary/10 rounded-lg"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Settings className="w-20 h-20 text-keyboard-primary opacity-80 animate-float" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-keyboard-dark/90 to-transparent"></div>
                    </div>
                  </div>
                  
                  <div className="w-full md:w-2/3 text-left">
                    <h3 className="text-2xl font-semibold mb-2">Discover How the Converter Works</h3>
                    <p className="text-keyboard-text/70 mb-4">
                      Our conversion process transforms ZMK keymap files into Kanata configurations through a series of precise transformations.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-keyboard-highlight text-sm">See the technical details</span>
                      <div className="h-8 w-8 rounded-full bg-keyboard-primary/10 flex items-center justify-center text-keyboard-primary">
                        {isExpanded ? <ChevronUp /> : <ChevronDown />}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CollapsibleTrigger>
            
            {/* Expanded State - Full Timeline Content */}
            <CollapsibleContent className="overflow-hidden transition-all duration-500">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-keyboard-primary/30 transform md:translate-x-px"></div>
                
                {/* Step 1 */}
                <div className="mb-16 md:mb-24 relative z-10">
                  <div className="flex flex-col md:flex-row items-start md:items-center">
                    <div className="flex-1 order-2 md:order-1 md:text-right md:pr-10 mt-6 md:mt-0">
                      <h3 className="text-xl font-semibold mb-2">Parse ZMK Configuration</h3>
                      <p className="text-keyboard-text/70 leading-relaxed">
                        The converter reads your ZMK .keymap file (Device Tree Source) or configuration generated through the ZMK GUI and builds an in-memory representation.
                      </p>
                    </div>
                    <div className="bg-keyboard-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold order-1 md:order-2 z-20">
                      1
                    </div>
                    <div className="flex-1 order-3 md:pl-10 mt-6 md:mt-0">
                      <div className="glass-card p-4 h-full">
                        <pre className="text-xs md:text-sm text-keyboard-text font-mono overflow-x-auto">
                          <code>
{`/ {
  behaviors {
    mt: tap_hold {
      compatible = "zmk,behavior-hold-tap";
      tapping-term-ms = <200>;
      bindings = <&kp>, <&kp>;
    };
  };
};`}
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="mb-16 md:mb-24 relative z-10">
                  <div className="flex flex-col md:flex-row items-start md:items-center">
                    <div className="flex-1 order-2 md:order-1 md:text-right md:pr-10 mt-6 md:mt-0">
                      <div className="glass-card p-4 h-full md:ml-auto">
                        <pre className="text-xs md:text-sm text-keyboard-text font-mono overflow-x-auto">
                          <code>
{`{
  type: "hold_tap",
  params: {
    tapping_term_ms: 200,
    bindings: ["kp", "kp"]
  }
}`}
                          </code>
                        </pre>
                      </div>
                    </div>
                    <div className="bg-keyboard-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold order-1 md:order-2 z-20">
                      2
                    </div>
                    <div className="flex-1 order-3 md:pl-10 mt-6 md:mt-0">
                      <h3 className="text-xl font-semibold mb-2">Normalize to IR</h3>
                      <p className="text-keyboard-text/70 leading-relaxed">
                        Converts the ZMK structures into a normalized Intermediate Representation (IR) that can be reasoned about programmatically.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="mb-16 md:mb-24 relative z-10">
                  <div className="flex flex-col md:flex-row items-start md:items-center">
                    <div className="flex-1 order-2 md:order-1 md:text-right md:pr-10 mt-6 md:mt-0">
                      <h3 className="text-xl font-semibold mb-2">Map to Kanata DSL</h3>
                      <p className="text-keyboard-text/70 leading-relaxed">
                        Translates the normalized behaviors into their Kanata equivalents, using pattern matching to find the closest analogues.
                      </p>
                    </div>
                    <div className="bg-keyboard-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold order-1 md:order-2 z-20">
                      3
                    </div>
                    <div className="flex-1 order-3 md:pl-10 mt-6 md:mt-0">
                      <div className="glass-card p-4 h-full">
                        <pre className="text-xs md:text-sm text-keyboard-text font-mono overflow-x-auto">
                          <code>
{`// Mapping process
ZMK tap-hold -> Kanata tap-hold-release
ZMK momentary layer -> Kanata layer-toggle
ZMK key-repeat -> Kanata multi-tap`}
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row items-start md:items-center">
                    <div className="flex-1 order-2 md:order-1 md:text-right md:pr-10 mt-6 md:mt-0">
                      <div className="glass-card p-4 h-full md:ml-auto">
                        <pre className="text-xs md:text-sm text-keyboard-text font-mono overflow-x-auto">
                          <code>
{`deffakekeys(
  mt_a (tap-hold-release 200 a lmet)
  mt_s (tap-hold-release 200 s lalt)
)

deflayer(base
  @mt_a @mt_s...
)`}
                          </code>
                        </pre>
                      </div>
                    </div>
                    <div className="bg-keyboard-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold order-1 md:order-2 z-20">
                      4
                    </div>
                    <div className="flex-1 order-3 md:pl-10 mt-6 md:mt-0">
                      <h3 className="text-xl font-semibold mb-2">Generate Kanata Config</h3>
                      <p className="text-keyboard-text/70 leading-relaxed">
                        Outputs a complete, well-formatted Kanata configuration file that preserves the behavior of your original ZMK setup.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Arrow down to output */}
                <div className="flex justify-center my-12">
                  <ArrowRight className="transform rotate-90 h-12 w-12 text-keyboard-primary/60" />
                </div>
                
                {/* Final Output */}
                <div className="max-w-3xl mx-auto glass-card overflow-hidden">
                  <div className="bg-gray-900 px-4 py-2 border-b border-gray-700 flex items-center">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="ml-4 text-xs text-gray-400">output.kbd</div>
                  </div>
                  <div className="p-6 text-left overflow-x-auto">
                    <pre className="text-sm text-keyboard-text font-mono">
                      <code>
{`;; Generated from zmk_config.keymap
;; by ZMK-to-Kanata converter

(defcfg
  process-unmapped-keys yes
)

(defsrc
  q w e r t y u i o p
  a s d f g h j k l ;
  z x c v b n m , . /
)

(deffakekeys
  mt_a (tap-hold-release 200 a lmet)
  mt_s (tap-hold-release 200 s lalt)
  mt_d (tap-hold-release 200 d lctl)
  mt_f (tap-hold-release 200 f lsft)
)

(deflayer base
  q w e r t y u i o p
  @mt_a @mt_s @mt_d @mt_f g h j k l ;
  z x c v b n m , . /
)

(deflayer nav
  _ _ _ _ _ pgup home up end _
  _ _ _ _ _ pgdn left down right _
  _ _ _ _ _ _ _ _ _ _
)`}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
