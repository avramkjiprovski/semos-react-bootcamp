import React, {useEffect, useState} from 'react';
// constants
import {API_URL} from './config/ApiConstants';
// components
import {Table} from './components/Table';


const App = () => {

  const [todos, setTodos] = useState([]);


  useEffect( () => {
    fetch(`${API_URL}/todos`)
      .then(response => response.json())
      .then(data => setTodos(data))
      .catch(error => console.log(error));

    console.log(todos);
  });





  return (
    <div className="App">
      <h1>App:</h1>

      <Table 
        todos={todos} 
        setTodos={setTodos}
      />


    </div>
  );
}

export default App;