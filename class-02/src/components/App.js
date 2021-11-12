import React from 'react';
import {Headline} from './Headline';
import { Hotel } from './Hotel';
import { FruitList } from './FruitList';
import { Comments } from './Comments';
import {Cars } from './Cars';

export const App = () => {

  const Header = {
    title: 'New Headline',
    author: 'John Doe',
    content: 'This is the story behind...'
  }

  const Fruits = [
    "banana",
    "kiwi",
    "apple"
  ]

  const komentari = [
    {
      author: "John Doe",
      content: "John's comment",
      date: "9-10-2021"
    },
    {
      author: "Dragan",
      content: "Dragan's comment",
      date: "9-10-2021"
    },
    {
      author: "Avram",
      content: "Avram's comment",
      date: "9-10-2021"
    },
  ]

  const registracija = [
    {
      oznaka: "SK-0001-AA"
    },
    {
      oznaka: "SK-0002-AB"
    },
    {
      oznaka: "SK-0003-AC"
    },
  ]

  const cars = [
    {
      brand: "BMW",
      model: "X5",
      year: 2020,
      tablici: registracija[0]
    },
    {
      brand: "Opel",
      model: "Astra",
      year: 2008,
      tablici: registracija[1]
    },
    {
      brand: "Kia",
      model: "Sportage",
      year: 2018,
      tablici: registracija[2]
    },

  ]

  return (
    <div id="App">
      <h1>Hello World</h1>
      {/* npm paket prop-types za kontrola na prop types */}
      <Headline 
        cifra={5} 
        datum={"11-11-2021"} 
        naslov={Header}
      />
      <hr />
      <Hotel 
        name={"Hotel 1"}
        capacity={100}
        reservations={100}
        vacancy={false}
      />
      <hr/>

      <FruitList 
        listaNaOvosje={Fruits}
      />

      <Comments 
        listOfComments={komentari}
      />

      <Cars
        cars={cars}
      />

    </div>
  );
}