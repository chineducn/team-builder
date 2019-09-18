import React, { useState } from 'react';
import './App.css';
import uuid from 'uuid';
import TeamList from './components/TeamList';


const teamReact = [
  {
    id: uuid(),
    name: 'John',
    email: 'john@bloodyreact.com',
    specialty: 'HTML',
  }, 
  {
    id: uuid(),
    name: 'Doe',
    email: 'doe@bloodyreact.com',
    specialty: 'Semantic HTML'
  }, 
  {
    id: uuid(),
    name: 'Jane',
    email: 'jane@bloodyreact.com',
    specialty: 'CSS',
  },
  {
    id: uuid(),
    name: 'Dewy',
    email: 'dewy@bloodyreact.com',
    specialty: 'Mixins',
  }

]
function App() {

  const [teamState, setTeam] = useState(teamReact);
  const [memberState, setMember] = useState('');
  return (
    <div className="App">      
      Bloody React
      <TeamList teamArray={teamState}/>
    </div>
  );
}

export default App;
