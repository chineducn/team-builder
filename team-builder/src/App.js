import React, { useState } from 'react';
import './App.css';
import uuid from uuid;


const team = [
  {
    id: uuid(),
    name: 'John',
    specialty: 'HTML',
  }, 
  {
    id: uuid(),
    name: 'Doe',
    specialty: 'Semantic HTML'
  }, 
  {
    id: uuid(),
    name: 'Jane',
    specialty: 'CSS',
  },
  {
    id: uuid(),
    name: 'Doewess',
    specialty: 'Mixins',
  }

]
function App() {

  const [teamState, setTeam] = useState([]);
  const [memberState, setMember] = useState('');
  return (
    <div className="App">      
      Bloody React      
    </div>
  );
}

export default App;
