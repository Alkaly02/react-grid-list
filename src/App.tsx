import React from 'react';
import logo from './logo.svg';
import './App.css';
import { GridList } from './lib/dist';

function App() {
  return (
    <div className="App">
      <GridList
        isLoading={false}
        resourceData={[1, 2, 5]}
        resourceName="test"
        resourceItem={() => <p>Test</p>}
        skeleton={() => <p>skeleton</p>}
        emptyComponent={() => <p>I am emty</p>}
      />
    </div>
  );
}

export default App;
