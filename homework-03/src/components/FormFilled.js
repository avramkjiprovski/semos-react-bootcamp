import React from 'react';
import './FormFilled.scss';

export const FormFilled = (props) => {

    return (
        <div className="FormFilled">
            <h1> You've signed up </h1>
            <p>Here is your new account information:</p>
            
            <table className="table">
                <tbody>
                    <tr>
                        <td>First Name:</td>
                        <td>{props.name}</td>
                    </tr>
                    <tr>
                        <td>Last Name:</td>
                        <td>{props.surname}</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>{props.email}</td>
                    </tr>
                    <tr>
                        <td>Password:</td>
                        <td>{props.password}</td>
                    </tr>
                </tbody>
            </table>


        </div>
    )
}