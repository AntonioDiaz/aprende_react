import React from 'react';
import './App.css';
import UpdateLifeCycleExample from './sections/life-cycle/UpdateLifeCycleExample'
import ComponentWillUnmountExample from './sections/life-cycle/ComponentWillUnmountExample'
import ComponentDidCatchExample from './sections/life-cycle/ComponentDidCatchExample'

function App() {
  return (
    <div className="App">
      <UpdateLifeCycleExample></UpdateLifeCycleExample>
      <hr/>
      <ComponentWillUnmountExample></ComponentWillUnmountExample>
      <hr/>
      <ComponentDidCatchExample></ComponentDidCatchExample>
    </div>

  );
}

export default App;
