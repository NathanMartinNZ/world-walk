import React from 'react';
import Map from './components/Map'
import Menu from './components/Menu'


function App() {
  return (
    <div className="App w-full h-screen flex justify-center items-center">
      <div className="w-full h-full relative z-0">
        <Menu />
        <Map />
      </div>
    </div>
  );
}

export default App;
