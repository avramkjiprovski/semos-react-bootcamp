import React from 'react';
import {Student} from './Student';

export const Students = ({ students }) => {
    return (
        <div>
            <h1>Students</h1>
            {
                students.map(student => 
                    <div>
                        <Student key={student.index} student={student} />
                        <br/>
                    </div>
                    
                )
            }
        </div>
    );

}
