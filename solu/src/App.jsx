import React from "react";

import Navbar from "./SolluuuTask/Navbar";
import WhisperCard from "./SolluuuTask/WhisperCard";
import MoodFilterBar from "./SolluuuTask/MoodFilterBar";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <MoodFilterBar/>
      
        <WhisperCard />
     
    </div>
  );
}

export default App;