import React from 'react';
import Hero3D from './components/Hero3D';
import GenerationsTimeline from './components/GenerationsTimeline';
import Pillars from './components/Pillars';
import Metrics from './components/Metrics';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero3D />
      <GenerationsTimeline />
      <Pillars />
      <Metrics />

      <footer className="py-12 text-center bg-black border-t border-white/10">
        <p className="text-white/70">© 2100 Natural Balance for Earth Vision — Built for unity, ecology, and human flourishing.</p>
      </footer>
    </div>
  );
}

export default App;
