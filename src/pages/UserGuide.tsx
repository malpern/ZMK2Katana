import React from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  Info,
  Terminal,
  Code,
  Keyboard,
  Github,
  CheckCircle,
  Copy,
  LayoutGrid,
  RefreshCcw
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const UserGuide = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  // ZMK Example code
  const zmkExample = `/ {
    combos {
        compatible = "zmk,combos";
        combo_esc {
            timeout-ms = <50>;
            key-positions = <0 1>;
            bindings = <&kp ESC>;
        };
    };
    
    keymap {
        compatible = "zmk,keymap";
        
        default_layer {
            bindings = <
                &kp Q       &kp W       &kp E       &kp R       &kp T       &kp Y       &kp U       &kp I       &kp O       &kp P
                &mt LCTRL A &mt LALT S  &mt LSHFT D &mt LGUI F  &kp G       &kp H       &mt RGUI J  &mt RSHFT K &mt RALT L  &mt RCTRL SEMI
                &kp Z       &kp X       &kp C       &kp V       &kp B       &kp N       &kp M       &kp COMMA   &kp DOT     &kp FSLH
                                        &lt 1 TAB   &kp SPACE   &kp ENTER   &lt 2 BSPC
            >;
        };
        
        lower_layer {
            bindings = <
                &kp N1      &kp N2      &kp N3      &kp N4      &kp N5      &kp N6      &kp N7      &kp N8      &kp N9      &kp N0
                &kp LCTRL   &kp LALT    &kp LSHFT   &kp LGUI    &trans      &kp LEFT    &kp DOWN    &kp UP      &kp RIGHT   &trans
                &trans      &trans      &trans      &trans      &trans      &trans      &trans      &trans      &trans      &trans
                                        &trans      &trans      &trans      &trans
            >;
        };
        
        raise_layer {
            bindings = <
                &kp EXCL    &kp AT      &kp HASH    &kp DLLR    &kp PRCNT   &kp CARET   &kp AMPS    &kp ASTRK   &kp LPAR    &kp RPAR
                &trans      &trans      &trans      &trans      &trans      &trans      &trans      &trans      &trans      &trans
                &trans      &trans      &trans      &trans      &trans      &trans      &trans      &trans      &trans      &trans
                                        &trans      &trans      &trans      &trans
            >;
        };
    };
};`;

  // Kanata Example code
  const kanataExample = `(defcfg
  process-unmapped-keys yes
)

(defsrc
  esc  1    2    3    4    5    6    7    8    9    0    -    =    bspc
  tab  q    w    e    r    t    y    u    i    o    p    [    ]    \\
  caps a    s    d    f    g    h    j    k    l    ;    '    ret
  lsft z    x    c    v    b    n    m    ,    .    /    rsft
  lctl lmet lalt           spc            ralt rmet rctl
)

(deflayer base
  esc  1    2    3    4    5    6    7    8    9    0    -    =    bspc
  tab  q    w    e    r    t    y    u    i    o    p    [    ]    \\
  @esc_ctrl @a_met @s_alt @d_ctl @f_sft g    h    @j_sft @k_ctl @l_alt @semi_met '    ret
  lsft z    x    c    v    b    n    m    ,    .    /    rsft
  lctl lmet lalt           @spc_fn         ralt rmet rctl
)

(deflayer fn
  _    f1   f2   f3   f4   f5   f6   f7   f8   f9   f10  f11  f12  _
  _    _    _    _    _    _    _    _    _    _    _    _    _    _
  _    _    _    _    _    _    left down up   rght _    _    _
  _    _    _    _    _    _    _    _    _    _    _    _
  _    _    _              _              _    _    _
)

(defalias
  esc_ctrl (tap-hold-release 200 esc lctl)
  a_met (tap-hold-release 200 a lmet)
  s_alt (tap-hold-release 200 s lalt)
  d_ctl (tap-hold-release 200 d lctl)
  f_sft (tap-hold-release 200 f lsft)
  j_sft (tap-hold-release 200 j rsft)
  k_ctl (tap-hold-release 200 k rctl)
  l_alt (tap-hold-release 200 l lalt)
  semi_met (tap-hold-release 200 ; rmet)
  spc_fn (tap-hold-release 200 spc (layer-toggle fn))
)`;

  const faqData = [
    {
      question: "My combo or macro doesn't work in Kanata.",
      answer:
        "Only simple combos (e.g., A+B → ESC) are supported. See the relevant section above and manually define complex combos in your Kanata config.",
    },
    {
      question: "The converter gives an error about an unsupported feature.",
      answer:
        'Check this document for workarounds or see the User Guide for more help.',
    },
    {
      question: "How do I report a limitation or request support for a feature?",
      answer:
        'Open an issue on GitHub and describe your use case and ZMK config.',
    },
    {
      question: "Where can I get more help?",
      answer:
        'See the User Guide, README, or CONTRIBUTING.md.',
    },
    {
      question: "My custom home row mod is not working as expected.",
      answer:
        'Standard properties (timing, flavor, bindings) are mapped. Check the Kanata output for comments about unmapped properties and adjust manually if needed.',
    },
    {
      question: "Can I use Unicode output in my Kanata config?",
      answer:
        "Unicode output is supported on macOS via Kanata's (unicode ...) action. It is experimental on Windows and not supported on Linux. On non-macOS platforms, the converter emits a warning comment instead of Unicode output. See the Kanata documentation for more information.",
    },
  ];

  function FAQ() {
    const [openIndexes, setOpenIndexes] = React.useState<number[]>([]);

    const toggle = (idx: number) => {
      setOpenIndexes((prev) =>
        prev.includes(idx)
          ? prev.filter((i) => i !== idx)
          : [...prev, idx]
      );
    };

    return (
      <div className="space-y-4">
        {faqData.map((item, idx) => (
          <div key={idx} className="border border-keyboard-primary/20 rounded-lg overflow-hidden">
            <button
              className="w-full flex justify-between items-center px-6 py-4 bg-keyboard-dark/40 hover:bg-keyboard-primary/10 transition-colors text-left focus:outline-none"
              onClick={() => toggle(idx)}
              aria-expanded={openIndexes.includes(idx)}
              aria-controls={`faq-panel-${idx}`}
            >
              <span className="font-medium text-keyboard-primary text-lg">{item.question}</span>
              <span className={`ml-4 transition-transform ${openIndexes.includes(idx) ? 'rotate-90' : ''}`}>▶</span>
            </button>
            {openIndexes.includes(idx) && (
              <div
                id={`faq-panel-${idx}`}
                className="px-6 pb-4 pt-2 text-keyboard-text/80 bg-keyboard-dark/60 animate-fade-in"
              >
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  const kanataFeatureData = [
    {
      title: "Advanced Combo Support",
      feature: "Native support for combos that can trigger not just simple key outputs, but also layer changes, macros, or advanced logic (e.g., combos that activate a layer or run a macro).",
      benefit: "Would allow the converter to map all ZMK combos, including those with modifiers, macros, or layer actions, without manual intervention.",
      reference: (
        <>
          See <a href="https://github.com/jtroo/kanata/issues/1556" target="_blank" rel="noopener noreferrer" className="text-keyboard-primary underline">issue #1556</a> for user requests and maintainer discussion about shift-layer and remapping shifted keys to arbitrary actions.
        </>
      ),
    },
    {
      title: "Custom Behavior Extensibility",
      feature: "A plugin or scripting interface for defining custom behaviors (e.g., advanced hold-tap, retro-tap, or custom mod-tap logic) with flexible parameters.",
      benefit: "Would enable direct mapping of ZMK's custom behaviors and advanced hold-tap features, reducing the need for TODO comments and manual edits.",
      reference: (
        <>
          See <a href="https://github.com/jtroo/kanata/issues/1556" target="_blank" rel="noopener noreferrer" className="text-keyboard-primary underline">issue #1556</a> and related comments for discussion of extensible behavior needs.
        </>
      ),
    },
    {
      title: "Macro Enhancements",
      feature: "Support for complex macros, including: Conditionals (if/else logic), Delays/timing control within macros, Macro composition (macros calling other macros)",
      benefit: "Would allow the converter to fully translate ZMK macros, including those with advanced logic or timing requirements.",
      reference: (
        <>
          See <a href="https://github.com/jtroo/kanata/discussions/1578" target="_blank" rel="noopener noreferrer" className="text-keyboard-primary underline">discussion #1578</a> for user workarounds and limitations with macros and external scripting.
        </>
      ),
    },
    {
      title: "Unicode Input and Output Improvements",
      feature: "Full Unicode input/output support on all platforms (not just macOS). Consistent Unicode handling in macros and behaviors.",
      benefit: "Would enable the converter to support ZMK's Unicode features everywhere, not just on macOS.",
      reference: (
        <>
          See <a href="https://github.com/jtroo/kanata/issues/1556" target="_blank" rel="noopener noreferrer" className="text-keyboard-primary underline">issue #1556</a> and <a href="https://github.com/jtroo/kanata/discussions/1578" target="_blank" rel="noopener noreferrer" className="text-keyboard-primary underline">discussion #1578</a> for Unicode limitations and user workarounds.
        </>
      ),
    },
    {
      title: "Advanced Modifier and Sticky Modifier Support",
      feature: "More flexible modifier handling, including sticky modifiers and advanced modifier combinations. Ability to define and use custom modifier behaviors.",
      benefit: "Would allow for accurate conversion of ZMK's advanced modifier features.",
      reference: (
        <>
          See <a href="https://github.com/jtroo/kanata/issues/1556" target="_blank" rel="noopener noreferrer" className="text-keyboard-primary underline">issue #1556</a> for user requests and discussion of modifier handling.
        </>
      ),
    },
    {
      title: "Layer Switching Parity",
      feature: "Support for all ZMK layer switching semantics (e.g., momentary, toggle, one-shot, etc.) with matching syntax and behavior.",
      benefit: "Would allow the converter to map all ZMK layer actions directly, without approximation.",
      reference: (
        <>
          See <a href="https://github.com/jtroo/kanata/issues/413" target="_blank" rel="noopener noreferrer" className="text-keyboard-primary underline">issue #413</a> and <a href="https://github.com/jtroo/kanata/discussions/422" target="_blank" rel="noopener noreferrer" className="text-keyboard-primary underline">discussion #422</a> for edge cases and limitations in layer switching.
        </>
      ),
    },
    {
      title: "Error Reporting and Recovery",
      feature: "Structured error reporting and partial config loading, so that Kanata can load and report on incomplete or partially invalid configs.",
      benefit: "Would allow the converter to emit partial configs with warnings, improving the user experience during migration.",
      reference: (
        <>
          See <a href="https://github.com/jtroo/kanata#how-you-can-help" target="_blank" rel="noopener noreferrer" className="text-keyboard-primary underline">README</a> and general feedback in issues for ongoing usability improvements.
        </>
      ),
    },
    {
      title: "Config Import/Include Mechanism",
      feature: "A robust include/import system for Kanata configs, similar to C preprocessor includes in ZMK.",
      benefit: "Would allow the converter to map ZMK's modular config structure more directly.",
      reference: (
        <>No direct issue, but this is a common feature in QMK/ZMK and is missing in Kanata.</>
      ),
    },
    {
      title: "Tap-Dance Feature Parity",
      feature: "Native support for tap-vs-hold in tap-dance (not just hold-tap). Modifier-aware tap-dance actions (e.g., tap with shift = different action). Per-action timing for tap-dance actions.",
      benefit: "Would allow the converter to map all ZMK tap-dance scenarios directly, including tap-vs-hold and modifier-aware actions.",
      reference: (
        <>
          See <a href="https://github.com/jtroo/kanata/blob/master/docs/config.md#tap-dance" target="_blank" rel="noopener noreferrer" className="text-keyboard-primary underline">Kanata Tap-Dance Config Reference</a> and <a href="https://zmk.dev/docs/behaviors/tap-dance/" target="_blank" rel="noopener noreferrer" className="text-keyboard-primary underline">ZMK Tap-Dance Docs</a>.
        </>
      ),
    },
  ];

  function KanataFeatureRequests() {
    const [openIndexes, setOpenIndexes] = React.useState<number[]>([]);

    const toggle = (idx: number) => {
      setOpenIndexes((prev) =>
        prev.includes(idx)
          ? prev.filter((i) => i !== idx)
          : [...prev, idx]
      );
    };

    return (
      <div className="space-y-4">
        {kanataFeatureData.map((item, idx) => (
          <div key={idx} className="border border-keyboard-primary/20 rounded-lg overflow-hidden">
            <button
              className="w-full flex justify-between items-center px-6 py-4 bg-keyboard-dark/40 hover:bg-keyboard-primary/10 transition-colors text-left focus:outline-none"
              onClick={() => toggle(idx)}
              aria-expanded={openIndexes.includes(idx)}
              aria-controls={`kanata-feature-panel-${idx}`}
            >
              <span className="font-medium text-keyboard-primary text-lg">{item.title}</span>
              <span className={`ml-4 transition-transform ${openIndexes.includes(idx) ? 'rotate-90' : ''}`}>▶</span>
            </button>
            {openIndexes.includes(idx) && (
              <div
                id={`kanata-feature-panel-${idx}`}
                className="px-6 pb-4 pt-2 text-keyboard-text/80 bg-keyboard-dark/60 animate-fade-in"
              >
                <div className="mb-2">
                  <span className="font-semibold text-keyboard-highlight">Feature Needed: </span>{item.feature}
                </div>
                <div className="mb-2">
                  <span className="font-semibold text-keyboard-highlight">Benefit: </span>{item.benefit}
                </div>
                <div className="mb-2">
                  <span className="font-semibold text-keyboard-highlight">Reference: </span>{item.reference}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-keyboard-dark text-keyboard-text antialiased">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Back button */}
          <div className="mb-8">
            <Link to="/">
              <Button
                variant="outline"
                className="border-keyboard-primary text-keyboard-primary hover:bg-keyboard-primary/10 flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>

          {/* Title */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-keyboard-text via-keyboard-primary to-keyboard-secondary bg-clip-text text-transparent">
              User Guide: ZMK Configurator to MacBook Keyboard
            </h1>
            <p className="text-xl text-keyboard-text/70 max-w-3xl mx-auto">
              A comprehensive guide to transforming your MacBook's built-in
              keyboard with ZMK configurators and Kanata
            </p>
          </div>

          {/* Overview */}
          <section className="mb-16 glass-card p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-keyboard-primary/20 p-3 rounded-full">
                <Info className="h-6 w-6 text-keyboard-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Overview</h2>
            </div>
            <p className="text-keyboard-text/80 leading-relaxed mb-6">
              This guide outlines how to test the complete workflow from using Nick's Keymap Editor to create a keymap, converting it to Kanata format, and applying it to a MacBook's built-in keyboard. This workflow effectively turns any ZMK keymap into a MacBook keyboard configuration.
            </p>
            <div className="flex justify-center mb-8">
              <img
                src="/ZMK2Katana/lovable-uploads/89d2bddf-743c-4c33-86fa-1fdf30f12a3e.png"
                alt="Close-up of MacBook keyboard"
                className="rounded-xl shadow-xl border border-white/10 max-w-full md:max-w-2xl"
              />
            </div>

            {/* Workflow diagram */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
              <div className="glass-card p-4 flex-1 text-center flex flex-col items-center">
                <LayoutGrid className="h-10 w-10 text-keyboard-primary mb-3" />
                <p className="font-medium">Nick's Keymap Editor</p>
              </div>
              <ArrowRight className="h-6 w-6 text-keyboard-text/50 transform rotate-90 md:rotate-0" />
              <div className="glass-card p-4 flex-1 text-center flex flex-col items-center">
                <RefreshCcw className="h-10 w-10 text-keyboard-accent mb-3" />
                <p className="font-medium">ZMK to Kanata Converter</p>
              </div>
              <ArrowRight className="h-6 w-6 text-keyboard-text/50 transform rotate-90 md:rotate-0" />
              <div className="glass-card p-4 flex-1 text-center flex flex-col items-center">
                <Keyboard className="h-10 w-10 text-keyboard-secondary mb-3" />
                <p className="font-medium">MacBook Keyboard</p>
              </div>
            </div>
          </section>

          {/* Step 1 */}
          <section className="mb-16" id="step1">
            <div className="glass-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-keyboard-primary/20 p-2 rounded-full h-10 w-10 flex items-center justify-center text-keyboard-primary font-bold">
                  1
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  Create a ZMK Keymap using Nick's Keymap Editor
                </h2>
              </div>

              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <p className="text-keyboard-text/80 leading-relaxed mb-4">
                      Start by accessing Nick's Keymap Editor web interface to
                      design your custom keymap. Nick's Keymap Editor is
                      recommended for its user-friendly interface.
                    </p>
                    <h3 className="text-xl font-semibold mb-3">
                      Design a simple keymap with:
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-keyboard-text/80">
                      <li>
                        A base layer with some remapped keys (e.g., swap Caps
                        Lock and Escape)
                      </li>
                      <li>A function layer accessible via a hold action</li>
                      <li>A macro for a frequently used text string</li>
                      <li>A Unicode character binding</li>
                    </ul>
                    <div className="mt-6">
                      <a
                        href="https://nickcoutsos.github.io/keymap-editor/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-keyboard-primary hover:text-keyboard-primary/80 transition-colors"
                      >
                        <span>Access Nick's Keymap Editor</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <div className="glass-card overflow-hidden bg-gray-900/60">
                      <div className="bg-gray-900 px-4 py-2 border-b border-gray-700 flex items-center">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="ml-4 text-xs text-gray-400">
                          Nick's Keymap Editor
                        </div>
                      </div>
                      <div className="p-4">
                        <img
                          src="/ZMK2Katana/lovable-uploads/82aa7956-e3ac-462f-b29e-bfd8706c76c4.png"
                          alt="Nick's Keymap Editor Screenshot"
                          className="rounded border border-gray-700 shadow-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-keyboard-primary/10 p-4 rounded-lg border border-keyboard-primary/20 mt-8">
                  <h4 className="font-semibold text-keyboard-primary mb-2">
                    Pro Tip
                  </h4>
                  <p className="text-keyboard-text/80 text-sm">
                    Start with simple remappings before moving to complex
                    behaviors. This makes troubleshooting easier if issues arise
                    during conversion or implementation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Step 2 */}
          <section className="mb-16" id="step2">
            <div className="glass-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-keyboard-accent/20 p-2 rounded-full h-10 w-10 flex items-center justify-center text-keyboard-accent font-bold">
                  2
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  Convert the ZMK Keymap to Kanata Format
                </h2>
              </div>

              <p className="text-keyboard-text/80 leading-relaxed mb-6">
                After exporting your ZMK keymap file, use our ZMK to Kanata
                converter to transform it into a format that Kanata can
                understand.
              </p>

              <div className="bg-gray-900/60 rounded-lg p-4 mb-6 font-mono text-sm overflow-x-auto relative group">
                <button
                  className="absolute top-2 right-2 bg-keyboard-dark/50 p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() =>
                    copyToClipboard(
                      "python -m converter.cli path/to/zmk_keymap.keymap path/to/output.kbd",
                    )
                  }
                >
                  <Copy className="h-4 w-4 text-keyboard-text/70 hover:text-keyboard-text" />
                </button>
                <code className="text-keyboard-text/90">
                  python -m converter.cli path/to/zmk_keymap.keymap
                  path/to/output.kbd
                </code>
              </div>

              <h3 className="text-xl font-semibold mb-4">Code Examples</h3>
              <p className="text-keyboard-text/80 mb-6">
                Below you can see examples of both ZMK and Kanata configuration
                files for the same keyboard layout:
              </p>

              <div className="rounded-lg overflow-hidden border border-white/10 mb-8">
                <Tabs defaultValue="zmk">
                  <TabsList className="w-full bg-gray-900/80 p-0 h-12 rounded-t-lg border-b border-white/10">
                    <TabsTrigger
                      value="zmk"
                      className="flex-1 h-full data-[state=active]:bg-black/40"
                    >
                      ZMK Configuration
                    </TabsTrigger>
                    <TabsTrigger
                      value="kanata"
                      className="flex-1 h-full data-[state=active]:bg-black/40"
                    >
                      Kanata Configuration
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="zmk" className="m-0">
                    <div className="relative group">
                      <button
                        className="absolute top-2 right-2 bg-keyboard-dark/50 p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10"
                        onClick={() => copyToClipboard(zmkExample)}
                      >
                        <Copy className="h-4 w-4 text-keyboard-text/70 hover:text-keyboard-text" />
                      </button>
                      <SyntaxHighlighter
                        language="c"
                        style={atomDark}
                        showLineNumbers
                        customStyle={{
                          margin: 0,
                          borderRadius: 0,
                          fontSize: "0.9rem",
                          backgroundColor: "rgba(0, 0, 0, 0.5)",
                        }}
                      >
                        {zmkExample}
                      </SyntaxHighlighter>
                    </div>
                  </TabsContent>
                  <TabsContent value="kanata" className="m-0">
                    <div className="relative group">
                      <button
                        className="absolute top-2 right-2 bg-keyboard-dark/50 p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10"
                        onClick={() => copyToClipboard(kanataExample)}
                      >
                        <Copy className="h-4 w-4 text-keyboard-text/70 hover:text-keyboard-text" />
                      </button>
                      <SyntaxHighlighter
                        language="lisp"
                        style={atomDark}
                        showLineNumbers
                        customStyle={{
                          margin: 0,
                          borderRadius: 0,
                          fontSize: "0.9rem",
                          backgroundColor: "rgba(0, 0, 0, 0.5)",
                        }}
                      >
                        {kanataExample}
                      </SyntaxHighlighter>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="glass-card p-4 border border-white/5">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="h-5 w-5 text-keyboard-primary mr-2" />
                    <h4 className="font-semibold">Layer Definitions</h4>
                  </div>
                  <p className="text-sm text-keyboard-text/70">
                    Verify that all layers from your ZMK config are correctly
                    defined in the Kanata file.
                  </p>
                </div>

                <div className="glass-card p-4 border border-white/5">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="h-5 w-5 text-keyboard-primary mr-2" />
                    <h4 className="font-semibold">Hold-Tap Behaviors</h4>
                  </div>
                  <p className="text-sm text-keyboard-text/70">
                    Confirm that hold-tap behaviors (like home row mods) are
                    properly translated.
                  </p>
                </div>

                <div className="glass-card p-4 border border-white/5">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="h-5 w-5 text-keyboard-primary mr-2" />
                    <h4 className="font-semibold">Macros</h4>
                  </div>
                  <p className="text-sm text-keyboard-text/70">
                    Ensure that macros are correctly converted with proper
                    timing and key sequences.
                  </p>
                </div>

                <div className="glass-card p-4 border border-white/5">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="h-5 w-5 text-keyboard-primary mr-2" />
                    <h4 className="font-semibold">Unicode Bindings</h4>
                  </div>
                  <p className="text-sm text-keyboard-text/70">
                    Check that Unicode character bindings are properly formatted
                    for Kanata's syntax.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Step 3 */}
          <section className="mb-16" id="step3">
            <div className="glass-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-keyboard-secondary/20 p-2 rounded-full h-10 w-10 flex items-center justify-center text-keyboard-secondary font-bold">
                  3
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  Install and Configure Kanata on the MacBook
                </h2>
              </div>

              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold mb-3">Install Kanata</h3>
                  <p className="text-keyboard-text/80 leading-relaxed mb-4">
                    Use{" "}
                    <a
                      href="https://brew.sh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-keyboard-primary hover:text-keyboard-primary/80 underline"
                    >
                      Homebrew
                    </a>{" "}
                    to easily install{" "}
                    <a
                      href="https://github.com/jtroo/kanata"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-keyboard-primary hover:text-keyboard-primary/80 underline"
                    >
                      Kanata
                    </a>{" "}
                    on your MacBook:
                  </p>

                  <div className="bg-gray-900/60 rounded-lg p-4 mb-6 font-mono text-sm overflow-x-auto relative group">
                    <button
                      className="absolute top-2 right-2 bg-keyboard-dark/50 p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => copyToClipboard("brew install kanata")}
                    >
                      <Copy className="h-4 w-4 text-keyboard-text/70 hover:text-keyboard-text" />
                    </button>
                    <code className="text-keyboard-text/90">
                      brew install kanata
                    </code>
                  </div>

                  <h3 className="text-xl font-semibold mb-3">
                    Configure Kanata
                  </h3>
                  <p className="text-keyboard-text/80 leading-relaxed mb-4">
                    Place the converted Kanata configuration file in the appropriate location for your operating system. You may need to grant input monitoring or accessibility permissions depending on your OS. Follow any prompts or refer to the Kanata documentation for your platform.
                  </p>

                  <div className="bg-gray-900/60 rounded-lg p-4 mb-6 font-mono text-sm overflow-x-auto relative group">
                    <button
                      className="absolute top-2 right-2 bg-keyboard-dark/50 p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() =>
                        copyToClipboard(
                          "mkdir -p ~/.config/kanata\ncp path/to/output.kbd ~/.config/kanata/config.kbd",
                        )
                      }
                    >
                      <Copy className="h-4 w-4 text-keyboard-text/70 hover:text-keyboard-text" />
                    </button>
                    <code className="text-keyboard-text/90">
                      # Example for Linux/macOS:
                      mkdir -p ~/.config/kanata
                      cp path/to/output.kbd ~/.config/kanata/config.kbd
                      <br />
                      # Example for Windows (PowerShell):
                      New-Item -ItemType Directory -Path $env:APPDATA\kanata -Force
                      Copy-Item path\to\output.kbd $env:APPDATA\kanata\config.kbd
                    </code>
                  </div>
                </div>

                <div className="md:w-1/2">
                  <div className="glass-card overflow-hidden bg-gray-900/60 h-full flex flex-col">
                    <div className="bg-gray-900 px-4 py-2 border-b border-gray-700 flex items-center">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="ml-4 text-xs text-gray-400">Terminal</div>
                    </div>
                    <div className="p-4 flex-grow bg-black/50 font-mono">
                      <p className="text-green-500 mb-1">
                        $ brew install kanata
                      </p>
                      <p className="text-white/70 text-sm mb-3">
                        {"==>"} Downloading
                        https://github.com/jtroo/kanata/releases/download/v1.2.3/kanata-macos-universal
                        <br />
                        {"==>"} Downloading from
                        https://objects.githubusercontent.com/github-production-release...
                        <br />
                        {
                          "####################################################################### 100.0%"
                        }
                        <br />
                        {"==>"} Installing kanata
                        <br />
                        🍺 /usr/local/Cellar/kanata/1.2.3: 5 files, 15.2MB,
                        built in 3 seconds
                      </p>
                      <p className="text-green-500 mb-1">
                        $ mkdir -p ~/.config/kanata
                      </p>
                      <p className="text-green-500 mb-1">
                        $ cp output.kbd ~/.config/kanata/config.kbd
                      </p>
                      <p className="text-green-500 mb-1">
                        $ ls -la ~/.config/kanata
                      </p>
                      <p className="text-white/70 text-sm">
                        total 16
                        <br />
                        drwxr-xr-x 3 user staff 96 May 15 14:23 .<br />
                        drwxr-xr-x 9 user staff 288 May 15 14:23 ..
                        <br />
                        -rw-r--r-- 1 user staff 1253 May 15 14:23 config.kbd
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-keyboard-secondary/10 p-4 rounded-lg border border-keyboard-secondary/20 mt-8">
                <h4 className="font-semibold text-keyboard-secondary mb-2">
                  <strong>macOS Permissions:</strong> You will need to grant input monitoring permissions to Kanata. macOS will prompt you to enable this in System Settings. You'll need to restart Kanata after granting these permissions.
                </h4>
              </div>
            </div>
          </section>

          {/* Step 4 */}
          <section className="mb-16" id="step4">
            <div className="glass-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-keyboard-primary/20 p-2 rounded-full h-10 w-10 flex items-center justify-center text-keyboard-primary font-bold">
                  4
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  Test the Configuration
                </h2>
              </div>

              <h3 className="text-xl font-semibold mb-3">Launch Kanata</h3>
              <p className="text-keyboard-text/80 leading-relaxed mb-4">
                Start Kanata with your configuration file:
              </p>

              <div className="bg-gray-900/60 rounded-lg p-4 mb-6 font-mono text-sm overflow-x-auto relative group">
                <button
                  className="absolute top-2 right-2 bg-keyboard-dark/50 p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() =>
                    copyToClipboard("kanata -c ~/.config/kanata/config.kbd")
                  }
                >
                  <Copy className="h-4 w-4 text-keyboard-text/70 hover:text-keyboard-text" />
                </button>
                <code className="text-keyboard-text/90">
                  kanata -c ~/.config/kanata/config.kbd
                </code>
              </div>

              <h3 className="text-xl font-semibold mb-4">Test Each Feature</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="glass-card p-4 border border-white/5">
                  <h4 className="font-semibold mb-2">Basic Key Remappings</h4>
                  <p className="text-sm text-keyboard-text/70">
                    Verify that your basic key remappings work as expected, such
                    as Caps Lock to Escape.
                  </p>
                </div>

                <div className="glass-card p-4 border border-white/5">
                  <h4 className="font-semibold mb-2">Layer Switching</h4>
                  <p className="text-sm text-keyboard-text/70">
                    Test that you can access your function layer using the
                    defined hold action.
                  </p>
                </div>

                <div className="glass-card p-4 border border-white/5">
                  <h4 className="font-semibold mb-2">Macros</h4>
                  <p className="text-sm text-keyboard-text/70">
                    Execute the defined macro and verify it outputs the expected
                    text string.
                  </p>
                </div>

                <div className="glass-card p-4 border border-white/5">
                  <h4 className="font-semibold mb-2">Unicode Input</h4>
                  <p className="text-sm text-keyboard-text/70">
                    Test Unicode character binding to ensure it works correctly.
                  </p>
                </div>
              </div>

              <div className="flex items-center bg-keyboard-accent/10 p-4 rounded-lg border border-keyboard-accent/20">
                <div className="mr-4">
                  <Keyboard className="h-8 w-8 text-keyboard-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-keyboard-accent">
                    Live Debugging
                  </h4>
                  <p className="text-keyboard-text/80 text-sm">
                    Run Kanata with the{" "}
                    <code className="bg-black/20 px-1 rounded">--debug</code>{" "}
                    flag (
                    <code className="bg-black/20 px-1 rounded">
                      kanata --debug -c config.kbd
                    </code>
                    ) to see detailed logs about key events and mappings in
                    real-time.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Step 5 */}
          <section className="mb-16" id="step5">
            <div className="glass-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-keyboard-secondary/20 p-2 rounded-full h-10 w-10 flex items-center justify-center text-keyboard-secondary font-bold">
                  5
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  Iterate and Refine
                </h2>
              </div>

              <p className="text-keyboard-text/80 leading-relaxed mb-6">
                If you encounter issues during testing, determine whether
                they're related to the ZMK configuration, the conversion
                process, or the Kanata implementation. Make the necessary
                adjustments and retest.
              </p>

              <div className="flex flex-col md:flex-row gap-6 mb-8">
                <div className="glass-card p-6 md:w-1/3 border border-white/5">
                  <h3 className="font-semibold text-lg mb-3">
                    ZMK Config Issues
                  </h3>
                  <ul className="text-sm text-keyboard-text/70 space-y-2 list-disc pl-5">
                    <li>Incorrect layout or keymap structure</li>
                    <li>Unsupported behavior bindings</li>
                    <li>Misconfigured macros</li>
                  </ul>
                </div>

                <div className="glass-card p-6 md:w-1/3 border border-white/5">
                  <h3 className="font-semibold text-lg mb-3">
                    Converter Issues
                  </h3>
                  <ul className="text-sm text-keyboard-text/70 space-y-2 list-disc pl-5">
                    <li>Translation errors between formats</li>
                    <li>Missing behavior mappings</li>
                    <li>Incorrect key codes or identifiers</li>
                  </ul>
                </div>

                <div className="glass-card p-6 md:w-1/3 border border-white/5">
                  <h3 className="font-semibold text-lg mb-3">Kanata Issues</h3>
                  <ul className="text-sm text-keyboard-text/70 space-y-2 list-disc pl-5">
                    <li>Incorrect syntax in config file</li>
                    <li>Permission issues on macOS</li>
                    <li>Timing differences between key behaviors</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-keyboard-primary/20 to-keyboard-secondary/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-center">
                  The Iteration Cycle
                </h3>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4">
                  <div className="text-center flex flex-col items-center">
                    <div className="bg-keyboard-dark p-3 rounded-full mb-3">
                      <Code className="h-6 w-6 text-keyboard-primary" />
                    </div>
                    <p>Adjust ZMK Config</p>
                  </div>
                  <ArrowRight className="h-6 w-6 text-keyboard-text/50 transform rotate-90 md:rotate-0" />
                  <div className="text-center flex flex-col items-center">
                    <div className="bg-keyboard-dark p-3 rounded-full mb-3">
                      <RefreshCcw className="h-6 w-6 text-keyboard-accent" />
                    </div>
                    <p>Re-Run Converter</p>
                  </div>
                  <ArrowRight className="h-6 w-6 text-keyboard-text/50 transform rotate-90 md:rotate-0" />
                  <div className="text-center flex flex-col items-center">
                    <div className="bg-keyboard-dark p-3 rounded-full mb-3">
                      <Keyboard className="h-6 w-6 text-keyboard-secondary" />
                    </div>
                    <p>Test on Keyboard</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features & Limitations */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-keyboard-primary to-keyboard-accent bg-clip-text text-transparent">
                  Supported Features
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-keyboard-primary mr-3 mt-0.5" />
                    <span className="text-keyboard-text/80">
                      Multiple layers
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-keyboard-primary mr-3 mt-0.5" />
                    <span className="text-keyboard-text/80">
                      Hold-tap behaviors (for modifier keys, layer switching,
                      etc.)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-keyboard-primary mr-3 mt-0.5" />
                    <span className="text-keyboard-text/80">Sticky keys</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-keyboard-primary mr-3 mt-0.5" />
                    <span className="text-keyboard-text/80">Key sequences</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-keyboard-primary mr-3 mt-0.5" />
                    <span className="text-keyboard-text/80">Macros</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-keyboard-primary mr-3 mt-0.5" />
                    <span className="text-keyboard-text/80">Unicode input</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-keyboard-secondary to-red-500 bg-clip-text text-transparent">
                  Current Limitations
                </h2>
                <ul className="space-y-4 text-keyboard-text/80">
                  <li className="border-b border-white/5 pb-3">
                    No support for advanced ZMK features like combos
                  </li>
                  <li className="border-b border-white/5 pb-3">
                    Limited to standard keyboard layouts
                  </li>
                  <li className="border-b border-white/5 pb-3">
                    Some hardware-specific ZMK features have no Kanata
                    equivalent
                  </li>
                  <li>
                    RGB and backlight controls cannot be translated to software
                    equivalents
                  </li>
                </ul>
                <p className="mt-6 text-sm">
                  <a href="#kanata-feature-requests" className="text-keyboard-primary underline hover:text-keyboard-primary/80 transition-colors">
                    How Kanata could help... ↓
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Documentation */}
          <section className="mb-16" id="documentation">
            <div className="glass-card p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Documentation
              </h2>
              <p className="text-keyboard-text/80 leading-relaxed mb-8">
                Throughout the testing process, document any limitations
                discovered, workarounds for common issues, best practices for
                creating ZMK configurations that convert well to Kanata, and
                setup instructions for end users.
              </p>
              <div className="mb-6">
                <a
                  href="https://github.com/malpern/zmk-to-kanata/tree/main/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-keyboard-primary hover:bg-keyboard-primary/90 text-black font-medium px-6 py-5 flex items-center gap-2">
                    <Github className="h-5 w-5" />
                    Contribute Documentation
                  </Button>
                </a>
              </div>
              <p className="text-keyboard-text/60 text-sm italic">
                Help us improve this tool by documenting your experiences and
                sharing them with the community.
              </p>
            </div>
          </section>

          {/* FAQ & Troubleshooting */}
          <section className="mb-16" id="faq">
            <div className="glass-card p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
              <FAQ />
            </div>
          </section>

          {/* Kanata Feature Requests for Complete Conversion */}
          <section className="mb-16" id="kanata-feature-requests">
            <div className="glass-card p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                What Kanata Could Add to Enable a Better Converter
              </h2>
              <KanataFeatureRequests />
            </div>
          </section>

          {/* Next Steps */}
          <section className="mb-16">
            <div className="glass-card p-8 bg-gradient-to-b from-keyboard-dark/0 to-keyboard-primary/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                Ready to Get Started?
              </h2>

              <div className="flex flex-col md:flex-row justify-center gap-4">
                <a
                  href="https://github.com/malpern/zmk-to-kanata"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-keyboard-primary hover:bg-keyboard-primary/90 text-black font-medium px-8 py-6 text-lg w-full flex items-center gap-2">
                    <Github className="h-5 w-5" />
                    View on GitHub
                  </Button>
                </a>
                <Link to="/">
                  <Button
                    variant="outline"
                    className="border-keyboard-secondary text-keyboard-secondary hover:bg-keyboard-secondary/10 px-8 py-6 text-lg w-full"
                  >
                    <span>Back to Home</span>
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UserGuide;
