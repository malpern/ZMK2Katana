
import React from 'react';
import { Check, Clock } from 'lucide-react';

const RoadmapItem = ({ 
  title, 
  description, 
  status 
}: { 
  title: string; 
  description: string; 
  status: 'completed' | 'inprogress' | 'planned' 
}) => {
  const statusClasses = {
    completed: "bg-green-500/20 text-green-400",
    inprogress: "bg-blue-500/20 text-blue-400",
    planned: "bg-gray-500/20 text-gray-400"
  };
  
  const statusText = {
    completed: "Completed",
    inprogress: "In Progress",
    planned: "Planned"
  };
  
  const StatusIcon = status === 'completed' ? Check : Clock;
  
  return (
    <div className="glass-card p-6 flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <span className={`px-2 py-1 rounded-full text-xs flex items-center ${statusClasses[status]}`}>
          <StatusIcon className="h-3 w-3 mr-1" />
          <span>{statusText[status]}</span>
        </span>
      </div>
      <p className="text-keyboard-text/70 leading-relaxed">{description}</p>
    </div>
  );
};

const Roadmap = () => {
  return (
    <section id="roadmap" className="py-20 bg-keyboard-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-code-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block bg-keyboard-highlight/10 px-4 py-1.5 rounded-full mb-6">
            <span className="text-keyboard-highlight text-sm font-medium">What's Next</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Project Roadmap
          </h2>
          
          <p className="text-lg text-keyboard-text/80 leading-relaxed">
            We're just getting started with this project. Here's where we're headed next.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <RoadmapItem 
            title="Parser & Emitter Modules" 
            description="Open-sourcing the core modules that parse ZMK configurations and emit Kanata configurations." 
            status="completed"
          />
          
          <RoadmapItem 
            title="Basic Layout Conversion" 
            description="Support for converting basic ZMK layouts, including layers and simple behaviors like tap-hold." 
            status="completed"
          />
          
          <RoadmapItem 
            title="Advanced Behaviors" 
            description="Support for combos, macros, tap-dance, one-shot modifiers, and other complex ZMK behaviors." 
            status="inprogress"
          />
          
          <RoadmapItem 
            title="Nested Layers" 
            description="Support for ZMK's complex layer dependencies and inheritance in Kanata's layer system." 
            status="inprogress"
          />
          
          <RoadmapItem 
            title="Live Reloading" 
            description="Real-time reloading of configurations for rapid iteration without reflashing ZMK firmware." 
            status="planned"
          />
          
          <RoadmapItem 
            title="Reverse Conversion" 
            description="Kanata to ZMK conversion to help prototype firmware logic using Kanata's expressive DSL." 
            status="planned"
          />
          
          <RoadmapItem 
            title="Web UI" 
            description="A web interface for uploading ZMK configs, tweaking behaviors, and downloading Kanata configs." 
            status="planned"
          />
          
          <RoadmapItem 
            title="Community Library" 
            description="A shared repository of behavior definitions, macros, and layout techniques for both platforms." 
            status="planned"
          />
          
          <RoadmapItem 
            title="Documentation & Tutorials" 
            description="Comprehensive guides on leveraging both ZMK and Kanata together for maximum productivity." 
            status="planned"
          />
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
