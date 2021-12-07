import React, {useState, useEffect} from 'react';

// icons
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import AddIcon from '@mui/icons-material/Add';


export const Table = ({ todos}) => {

    const [newTodo, setNewTodo] = useState('');
    const [todo, setTodo] = useState('');
    const [visibleTodos, setVisibleTodos] = useState(10);
    

    return (
        <div>
            <table className="Table">
            <thead>
            <tr>
                <th>#</th>
                <th>Task</th>
                <th>Done</th>
            </tr>
            </thead>
            <tbody>
            {todos.filter(todo => {
                if(todo.completed) return false;
                return true
            })
            .slice(0, visibleTodos)
            .map( (todo, index) => (
                <tr key={todo.id}>
                    <td>{index+1}</td>
                    <td>{todo.title}</td>
                    <td>{todo.completed ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}</td>
                </tr>
            ))}
            <tr key={visibleTodos+1} onClick={() => {setVisibleTodos(visibleTodos+1)}}>
                <td>{visibleTodos+1}</td>
                <td>
                    Click on this row to add a todo
                </td>
                <td><AddIcon /></td>
                </tr>
            </tbody>
        </table>
      </div>
    )
}