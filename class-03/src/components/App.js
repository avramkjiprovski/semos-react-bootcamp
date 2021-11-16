import React, {useState, useEffect} from 'react';
import { ClassComponent } from './ClassComponent';

export const App = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [bezDopolnitelVrednost, setBezDopolnitelnaVrednost] = useState('');
    const [counter, setCounter] = useState(0);

    function handleChangeUsername(event) {
        console.log(event.target.value);
        setUsername(event.target.value);
    }

    function handleChangePassowrd(event) {
        console.log(event.target.value);
        setPassword(event.target.value);
    }

    function prikaziVrednosti() {
        alert(`Username: ${username}\nPassword: ${password}\nCounter: ${counter}`);
    }

    useEffect(() => {
        console.log("Username:", username);
        console.log("password:", password);
        console.log("counter:", counter);
    }, [username, password, counter]);
    
    return (
        <div className="App">
            <ClassComponent 

            />
            <h3>Username: {username}</h3>
            <input 
                type="text" 
                placeholder="Vnesi tekst"
                value={username} 
                onChange={handleChangeUsername}
            />
            
            <input 
                type="password" 
                placeholder="Vnesi tekst"
                value={password} 
                onChange={handleChangePassowrd}
            />


            
            <h3>Bez dopolnitelna: {bezDopolnitelVrednost}</h3>
            <input 
                type="text" 
                placeholder="bez dopolnitelan vresdno"
                value={bezDopolnitelVrednost} 
                onChange={(event) => setBezDopolnitelnaVrednost(event.target.value)}
            />


            <img 
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                alt="google logo"
                width="100px"
                onClick={() => setCounter(counter + 1)}
            />
            <p>
                Counter: {counter}
            </p>
            

            <button 
                onClick={prikaziVrednosti}
            >
                    Prikazi vrednosti
            </button>
        </div>


    )
}