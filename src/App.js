import { useState } from 'react';
import data from './data';
import List from './List';
import './App.css';

function App() {

  const [people, setPeople] = useState(data)

  return (
      <section className="container">
        <h3>0 birthdays today</h3>
        <List />
        <button onClick={() => console.log('you clicked me')}>clear all</button>
      </section>
  );
}

export default App;
