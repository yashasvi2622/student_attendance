import React, { useState, useRef } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Add(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [rollNumber, setRollNumber] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    var id = -1;
    var newStudent = { id, rollNumber, firstName, lastName, checkIn, checkOut };

    const textInput = useRef(null);


    const handleAdd = (e) => {
        e.preventDefault();
        if (!firstName || !lastName || !rollNumber || !checkIn || !checkOut) {
            props.showAlert('Enter all the required fields', 'warning')
        }

        else {
            const studentsData = Object.values(props.students);
            console.log(studentsData);
            id = studentsData.length + 1;
            newStudent = {
                id: id,
                rollNumber: rollNumber,
                firstName: firstName,
                lastName: lastName,
                checkIn: checkIn,
                checkOut: checkOut
            }
            studentsData.push(newStudent);
            console.log(studentsData);
            props.dataAdd(Object.values(studentsData));
            props.handleIsAdding(false);
        }

    }


    return (
        <>
            <div className='container'>

                <form onSubmit={handleAdd}>

                    <div className="mb-3 ">
                        <label htmlFor="rollNumber" className="form-label">Roll Number</label>
                        <input type="text" ref={textInput} defaultValue={rollNumber} className="form-control" id="rollNumber" onChange={e => setRollNumber(e.target.value)} />
                    </div>


                    <div className="mb-3 ">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="firstName" onChange={e => setFirstName(e.target.value)} />
                        {/* <div id="emailHelp" className="form-text">Enter Student's First name</div> */}
                    </div>

                    <div className="mb-3 ">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="lastName" onChange={e => setLastName(e.target.value)} />
                        {/* <div id="emailHelp" className="form-text">Enter Student's Last name</div> */}
                    </div>

                    <div className="mb-3 ">
                        <label htmlFor="checkIn" className="form-label">Check In</label>
                        <input type="datetime-local" className="form-control" id="checkIn" onChange={e => setCheckIn(e.target.value)} />
                        {/* <div id="emailHelp" className="form-text">Enter Student's Last name</div> */}
                    </div>

                    <div className="mb-3 ">
                        <label htmlFor="checkOut" className="form-label">Check Out</label>
                        <input type="datetime-local" className="form-control" id="checkOut" onChange={e => setCheckOut(e.target.value)} />
                        {/* <div id="emailHelp" className="form-text">Enter Student's Last name</div> */}
                    </div>

                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary">Add</button>
                        <button className="btn btn-light" onClick={() => props.handleIsAdding(false)}>Cancel</button>
                    </div>
                </form>
            </div>



        </>
    )
}