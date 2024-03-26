import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {hello("hoge")}
    </div>
  );
}

function hello(name: string) {
  return `Hello, ${name}`;
}







export default App;
