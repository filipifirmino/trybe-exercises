import React from 'react'
import './App.css';
import Hellow from './Components/Hellow';
import Head from './Components/Head';


const title = <Hellow word = 'My First app React!'/>;
const task = (value) => {
  return (
    value.map((current) => <li>{current}</li>)
  );
}

const lecture = [
  'Install React',
  'Use React',
  'Use JSX on React',
  'Use the ReactDOM.render',
  'Use ther import'
];

function App() {
  return (
    <div className="App">
      <Head title = {title}/>
        <ul className = 'bodyRender'>{task(lecture)}</ul>
    
    </div> 
  );
}

export default App;
