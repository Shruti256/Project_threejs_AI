import React from 'react';
import Canvas from './canvas';
import Customizer from './pages/Customizer';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <main className='app transition-all ease-in' style={{ backgroundColor: '#ffffff !important' }}>
        <Home />
        <Canvas />
        <Customizer />
      </main>
    </div>
  );
}

export default App;
