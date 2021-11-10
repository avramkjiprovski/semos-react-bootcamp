import React from 'react';



export const Student = (props) => {
    const { name, lastName, index, address } = props.student;
    return (
        <div className="student">
            {name !== undefined && <p>Name: {name}</p>}
            {lastName !== undefined ? <p>Last name: {lastName}</p> : null}
            {index === undefined ? null : <p>Index: {index}</p>}
            {address !== undefined && <p>Address: {address}</p>}
        </div>
    )
}