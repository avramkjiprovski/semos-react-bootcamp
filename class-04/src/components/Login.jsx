import React, {useState, useEffect} from 'react';
import {Input} from './Input';

export const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        console.log('username', username);
        console.log('password', password);
    }, [username, password]);

// https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css%22/%3E
    return (
        <div id="login">
            <form>
                <Input 
                    type={"text"}
                    placeholder={"Username"}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    name={"username"}
                />
                <Input 
                    type={"password"}
                    placeholder={"Password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name={"password"}
                />
            </form>
        </div>

    )
}