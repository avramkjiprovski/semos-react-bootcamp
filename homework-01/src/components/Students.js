import React from 'react';
import {Student} from './Student';

export const Students = ({ students }) => {
    let studentsList = []
    students.map(student => {
        studentsList.push(student)
    })
    return (
        <div>
            <h1>Students</h1>
            {
                studentsList.map(student => 
                    <div>
                        <Student key={student.index} student={student} />
                        <br/>
                    </div>
                    
                )
            }
        </div>
    );

}
