import React, { useState } from 'react';
import data from './Data';
import List from './List';

function App() {
  const [people,setPeople] = useState(data);
  return (
    <div className="App">
  <main>
    <section className="container bg-white rounded-md shadow-sm max-w-md mx-auto mt-20 text-center">
      <h3 className='text-3xl md:text-left p-2'>{people.length} birtdays today</h3>
      <div className='mb-2 border border-b bg-gray-400'></div>
      <List people={people} />
      <button className='text-xl w-10/12 h-10 text-white rounded-lg mb-4
       bg-pink-400 hover:bg-pink-500 hover:scale-105' 
        onClick={() => setPeople([])}>Clear All</button>
    </section>
  </main>
    </div>
  );
}

export default App;
