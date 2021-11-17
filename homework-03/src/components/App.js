import React, {useState} from 'react';
import {Form} from './Form';
import {FormFilled} from './FormFilled';


export const App = () => {
    const [emptyFull, setEmptyFull] = useState(false);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    return (
        <div>
            {emptyFull ? <FormFilled 
                name={name}
                surname={surname}
                email={email}
                password={password}
                confirmPassword={confirmPassword}
            /> : <Form 
                name={name}
                surname={surname}
                email={email}
                password={password}
                confirmPassword={confirmPassword}
                setName={setName}
                setSurname={setSurname}
                setEmail={setEmail}
                setPassword={setPassword}
                setConfirmPassword={setConfirmPassword}     
                setEmptyFull={setEmptyFull}           
            />}
        </div>
    );
}