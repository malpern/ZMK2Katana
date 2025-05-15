
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating API call
    setTimeout(() => {
      toast.success("You've been added to the waitlist! We'll notify you when updates are available.", {
        description: "Thank you for your interest in ZMK to Kanata Converter."
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <section className="py-20 bg-keyboard-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-glow opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Join the Waitlist</h2>
              <p className="text-keyboard-text/70 leading-relaxed">
                Be the first to know when we release new features or updates. Get early access to the converter and help shape its development.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/5 border-white/10 text-keyboard-text placeholder:text-keyboard-text/50 h-12"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button 
                  type="submit" 
                  className="bg-keyboard-primary hover:bg-keyboard-primary/90 text-white h-12 px-8 sm:w-auto w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Get Updates"}
                </Button>
              </div>
              
              <p className="text-xs text-keyboard-text/50 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
