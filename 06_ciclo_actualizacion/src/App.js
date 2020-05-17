import React from 'react';
import './App.css';
import UpdateLifeCycleExample from './sections/life-cycle/UpdateLifeCycleExample'
import ComponentWillUnmountExample from './sections/life-cycle/ComponentWillUnmountExample'

function App() {
  return (
    <div className="App">
      <UpdateLifeCycleExample></UpdateLifeCycleExample>
      <hr/>
      <ComponentWillUnmountExample></ComponentWillUnmountExample>
      
    </div>

  );
}

export default App;
