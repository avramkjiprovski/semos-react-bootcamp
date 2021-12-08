import React from 'react';
import { Route, Routes } from 'react-router-dom';

//components
import {Cake} from './Cake';
import { Nav } from './Nav';
import {Comments} from './Comments';
import { SingleComment } from './SingleComment';


export function App() {

  return (
        <div className="App">
            <h2>App:</h2>
            <Nav />
            
            <Routes>
                <Route path="/cake" element={<Cake />} />
                <Route path="/comments" element={<Comments />} />
                <Route path="/comment/:id" element={<SingleComment />} />
            </Routes>
        </div>
    )

}