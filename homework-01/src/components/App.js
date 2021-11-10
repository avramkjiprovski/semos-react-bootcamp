import React from 'react';
import {Students} from './Students';


export const App = () => {
    let students = [
      {
        name: "Petar",
        lastName: "Petrovic",
        index: "122105",
        // address: "ul. Mihajlo Pupin"
      },
      {
        name: "Milan",
        lastName: "Milanovic",
        index: "122106",
        address: "ul. Mihajlo Mihajlovski"
      }
    ]
    return (
        <div>
            <h1>Welcome!</h1>
            <Students students={students} />
        </div>
    );
}