
import React, { useState } from 'react';
import { Check, X, Code, Layers, Puzzle, Brain, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";

const WhyKanata = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="why-kanata" className="py-20 bg-keyboard-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="w-full"
          >
            <Card className="glass-card overflow-hidden border-0 bg-gray-900/80 backdrop-blur-sm hover:bg-gray-800/80 transition-colors duration-300">
              <CollapsibleTrigger className="w-full text-left">
                <div className="p-6 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-keyboard-secondary/20 p-3 rounded-full">
                      <Code className="h-6 w-6 text-keyboard-secondary" />
                    </div>
                    <div>
                      <div className="inline-block bg-keyboard-secondary/10 px-4 py-1.5 rounded-full">
                        <span className="text-keyboard-secondary text-sm font-medium">The Comparison</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
                        Why Kanata Instead of Karabiner-Elements?
                      </h2>
                    </div>
                  </div>
                  <div className="text-white">
                    {isOpen ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
                  </div>
                </div>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <CardContent className="px-6 pb-6 pt-0">
                  <p className="text-lg text-center text-white mb-12 leading-relaxed max-w-3xl mx-auto">
                    Karabiner-Elements is a great tool for simple remapping on macOS—but it's fundamentally limited.
                    Here's why our converter targets Kanata, and why Karabiner simply can't support this kind of translation:
                  </p>
                  
                  <div className="space-y-10">
                    <Card className="glass-card overflow-hidden border-0 bg-gray-900/80 backdrop-blur-sm">
                      <CardContent className="p-0">
                        <div className="flex flex-col md:flex-row">
                          <div className="bg-red-900/30 p-6 md:w-16 flex md:flex-col items-center justify-center">
                            <X className="h-8 w-8 text-red-400" />
                            <span className="md:hidden ml-3 font-bold text-red-400">PROBLEM</span>
                            <span className="hidden md:block mt-2 font-bold text-red-400 [writing-mode:vertical-lr] rotate-180">PROBLEM</span>
                          </div>
                          <div className="p-6">
                            <div className="flex items-center mb-4">
                              <Code className="h-6 w-6 text-keyboard-primary mr-3" />
                              <h3 className="text-xl font-bold text-white">Karabiner Isn't a Programming Language</h3>
                            </div>
                            <p className="text-white mb-4">
                              Karabiner-Elements uses static JSON. There's no logic, no functions, no abstraction. 
                              You can't define reusable behaviors, dynamic layers, or generate rules. 
                              Every mapping must be written out by hand.
                            </p>
                            <p className="text-white">
                              ZMK, by contrast, is a logic-driven firmware. Translating its power to the desktop 
                              requires a remapping engine that supports composition and control flow—and Karabiner has none.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="glass-card overflow-hidden border-0 bg-gray-900/80 backdrop-blur-sm">
                      <CardContent className="p-0">
                        <div className="flex flex-col md:flex-row">
                          <div className="bg-red-900/30 p-6 md:w-16 flex md:flex-col items-center justify-center">
                            <X className="h-8 w-8 text-red-400" />
                            <span className="md:hidden ml-3 font-bold text-red-400">PROBLEM</span>
                            <span className="hidden md:block mt-2 font-bold text-red-400 [writing-mode:vertical-lr] rotate-180">PROBLEM</span>
                          </div>
                          <div className="p-6">
                            <div className="flex items-center mb-4">
                              <Layers className="h-6 w-6 text-keyboard-primary mr-3" />
                              <h3 className="text-xl font-bold text-white">Karabiner Fakes Layers with Variables</h3>
                            </div>
                            <p className="text-white mb-4">
                              ZMK has true layer support. So does Kanata.
                              Karabiner doesn't. You simulate layers with hacky conditions and variables, 
                              resulting in dozens or hundreds of repetitive blocks. You can't programmatically 
                              switch, stack, or toggle behaviors in a clean way.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 bg-keyboard-dark p-4 rounded-lg">
                              <div className="border border-green-500/20 p-4 rounded bg-green-950/20">
                                <h4 className="text-green-400 font-mono font-semibold mb-2">Kanata gives you:</h4>
                                <pre className="font-mono text-sm text-green-300">
                                  (deflayer base ...)<br />
                                  (deflayer nav ...)
                                </pre>
                              </div>
                              <div className="border border-red-500/20 p-4 rounded bg-red-950/20">
                                <h4 className="text-red-400 font-mono font-semibold mb-2">Karabiner gives you:</h4>
                                <p className="font-mono text-sm text-red-300">200+ lines of JSON per "layer"</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="glass-card overflow-hidden border-0 bg-gray-900/80 backdrop-blur-sm">
                      <CardContent className="p-0">
                        <div className="flex flex-col md:flex-row">
                          <div className="bg-red-900/30 p-6 md:w-16 flex md:flex-col items-center justify-center">
                            <X className="h-8 w-8 text-red-400" />
                            <span className="md:hidden ml-3 font-bold text-red-400">PROBLEM</span>
                            <span className="hidden md:block mt-2 font-bold text-red-400 [writing-mode:vertical-lr] rotate-180">PROBLEM</span>
                          </div>
                          <div className="p-6">
                            <div className="flex items-center mb-4">
                              <Puzzle className="h-6 w-6 text-keyboard-primary mr-3" />
                              <h3 className="text-xl font-bold text-white">Complex Behaviors? Not in Karabiner</h3>
                            </div>
                            <p className="text-white mb-6">
                              Want tap-dance, one-shot modifiers, or combos with three keys?
                            </p>
                            <div className="grid grid-cols-3 gap-4 mb-6">
                              <div className="flex flex-col items-center">
                                <div className="bg-keyboard-dark/60 p-3 rounded-full mb-3">
                                  <Check className="h-5 w-5 text-green-500" />
                                </div>
                                <span className="text-center font-semibold text-white">ZMK does it</span>
                              </div>
                              <div className="flex flex-col items-center">
                                <div className="bg-keyboard-dark/60 p-3 rounded-full mb-3">
                                  <Check className="h-5 w-5 text-green-500" />
                                </div>
                                <span className="text-center font-semibold text-white">Kanata does it</span>
                              </div>
                              <div className="flex flex-col items-center">
                                <div className="bg-keyboard-dark/60 p-3 rounded-full mb-3">
                                  <X className="h-5 w-5 text-red-500" />
                                </div>
                                <span className="text-center font-semibold text-white">Karabiner? No shot.</span>
                              </div>
                            </div>
                            <p className="text-white">
                              You'd have to break and re-simulate every behavior—manually—while hoping 
                              Karabiner's rigid schema doesn't block you. Kanata just runs your logic.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="glass-card overflow-hidden border-0 bg-gray-900/80 backdrop-blur-sm">
                      <CardContent className="p-0">
                        <div className="flex flex-col md:flex-row">
                          <div className="bg-green-900/30 p-6 md:w-16 flex md:flex-col items-center justify-center">
                            <Check className="h-8 w-8 text-green-500" />
                            <span className="md:hidden ml-3 font-bold text-green-500">SOLUTION</span>
                            <span className="hidden md:block mt-2 font-bold text-green-500 [writing-mode:vertical-lr] rotate-180">SOLUTION</span>
                          </div>
                          <div className="p-6">
                            <div className="flex items-center mb-4">
                              <Brain className="h-6 w-6 text-keyboard-primary mr-3" />
                              <h3 className="text-xl font-bold text-white">Kanata Is Code</h3>
                            </div>
                            <p className="text-white mb-6">
                              That's the difference. Kanata is a language, not a static config format.
                            </p>
                            <ul className="space-y-3">
                              <li className="flex">
                                <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-white">You can translate ZMK's logic directly</span>
                              </li>
                              <li className="flex">
                                <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-white">You can define behaviors once and reuse them</span>
                              </li>
                              <li className="flex">
                                <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-white">You can iterate fast, reload instantly, and scale without clutter</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="mt-12 p-6 border border-keyboard-primary/20 rounded-lg bg-gray-900/80 backdrop-blur-sm">
                    <h3 className="text-xl font-bold mb-4 flex items-center text-white">
                      <Brain className="h-6 w-6 text-keyboard-primary mr-3" /> TL;DR
                    </h3>
                    <p className="text-white mb-6">
                      You can't build a serious ZMK converter on top of Karabiner-Elements.
                    </p>
                    <p className="text-white mb-4">
                      It's not expressive enough. It's not programmable enough. And it was never meant to be.
                    </p>
                    <p className="font-semibold text-white">
                      Kanata is. That's why this project exists.
                      <br />
                      <span className="text-keyboard-primary">Code-level remapping. Declarative firmware. Bridged.</span>
                    </p>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Card>
          </Collapsible>
        </div>
      </div>
    </section>
  );
};

export default WhyKanata;
