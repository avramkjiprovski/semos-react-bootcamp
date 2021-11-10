/* eslint-disable */
import React from 'react';
import {User} from './User';
import {Hello} from './Hello';

export const App = () => {
    
    var korisnik = {
        name: 'Petar',
        age: '25',
        city: 'Mavrovo'
    }


    return (
        <div id="app">
            <h1>Welcome!</h1>
            <User person={korisnik} />
            <Hello 
                greeting="Hi and welcome to my app."
                displayValue={true}
                flag={false}
            />
            
            
            
            {/* <Hello 
                greeting="Hi and welcome to my app."
                goodbye="Goodbye!"
            /> */}
        </div>
    );
}