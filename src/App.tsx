import React from 'react';
import './App.scss';
import AppBar from './components/AppBar';
import VideoContainer from './components/VideoContainer';
import BottomSection from './components/BottomSection';

function App() {
  return (
    <div className='homepage'>
      <div className="homepage-container">
      <AppBar/>
      <VideoContainer/>
      <BottomSection/>

      </div>
     
    </div>
  );
}

export default App;
