import React from 'react';
import { useVideoStore } from './store/store'
import Map from './components/Map'
import Menu from './components/Menu'
import Video from './components/Video'


function App() {
  const selectedVideo = useVideoStore((state) => state.selectedVideo)
  
  return (
    <div className="App w-full h-screen flex justify-center items-center">
      <div className="w-full h-full relative z-0">
        <Menu />
        <Map />
        {selectedVideo && <Video {...selectedVideo} />}
      </div>
    </div>
  );
}

export default App;
