import React from 'react';
import './Form.scss';



export const Form = (props) => {

    const toggleEmptyFull = () => {
        props.setEmptyFull(!props.emptyFull);
    }


    return (
        <div className="Form">
            <h1>
                Sign Up
            </h1>
            <form>
                <label>First Name:</label>
                <input 
                    type="text" 
                    placeholder="First Name"
                    value={props.name}
                    onChange={(e) => props.setName(e.target.value)}
                />

                <label>Last Name:</label>
                <input 
                    type="text" 
                    placeholder="Last Name"
                    value={props.surname}
                    onChange={(e) => props.setSurname(e.target.value)}  
                />

                <label>Email:</label>
                <input 
                    type="email" 
                    placeholder="Email"
                    value={props.email}
                    onChange={(e) => props.setEmail(e.target.value)}
                />

                <label>Password:</label>
                <input 
                    type="password" 
                    placeholder="Password"
                    value={props.password}
                    onChange={(e) => props.setPassword(e.target.value)}
                />
                
                <label>Confirm Password:</label>
                <input 
                    type="password" 
                    placeholder="Confirm Password"
                    value={props.confirmPassword}
                    onChange={(e) => props.setConfirmPassword(e.target.value)}
                />

                <button
                    type="submit"
                    onClick={toggleEmptyFull}
                >Submit</button>
            </form>
        </div>
    );
}