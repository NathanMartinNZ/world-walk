import React from 'react';
import { useVideoStore } from './store/store'
import Map from './components/Map'
import Menu from './components/Menu'
import Video from './components/Video';


function App() {
  const videoIdToShow = useVideoStore((state) => state.videoIdToShow)

  return (
    <div className="App w-full h-screen flex justify-center items-center">
      <div className="w-full h-full relative z-0">
        <Menu />
        <Map />
        {videoIdToShow !== undefined && (
          <Video />
        )}
      </div>
    </div>
  );
}

export default App;
