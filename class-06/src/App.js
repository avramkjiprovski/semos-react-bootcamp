import React, {useEffect, useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import {About} from './components/About';
import {Contact} from './components/Contact';
import {Info} from './components/Info';
import {ClassRoute} from './components/ClassRoute';
import {Nav} from './components/Nav';
import {Home} from './components/Home';
import {NotFound} from './components/NotFound';
import { ChildComponent } from './components/ChildComponent';
import {Users} from './components/Users';

export const App = () => {

  const [users, setUsers] = useState([]);


  const getUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    setUsers(data);
    console.log(data);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return(
    <div>
      <h1>App</h1>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} >
          <Route path="us" element={<ChildComponent />} />
        </Route>
        <Route path="/info" element={<Info />} />
        <Route path="/about/class" element={<ClassRoute />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/users" element={<Users userList={users}/>} />
          
      </Routes>
    </div>
  );
}


{/* <Switch>
  <Route exact path="/about" component={About} />
  <Route exact path="/contact" component={Contact} />
  <Route exact path="/info" component={Info} />
  <Route exact path="/class-route" component={ClassRoute} />
</Switch> */}