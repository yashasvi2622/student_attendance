import React, { useState } from "react";

export default function (props) {
    return (
        <>
        <div className="contain-table" >
            <table className="striped-table" style={{"margin": "1px", "padding": "5px","width" : "70%", "border" : "1px solid"}} >
                <thead>
                    <tr>
                        <th style={{"margin": "3px", "padding": "5px ", "border": "1px solid"}}>id</th>
                        <th style={{"margin": "3px", "padding": "5px" , "border": "1px solid"}}>Roll Number</th>
                        <th style={{"margin": "3px", "padding": "5px" , "border": "1px solid"}}>First Name</th>
                        <th style={{"margin": "3px", "padding": "5px" , "border": "1px solid"}}>Last Name</th>
                        <th style={{"margin": "3px", "padding": "5px" , "border": "1px solid"}}>Check In time</th>
                        <th style={{"margin": "3px", "padding": "5px" , "border": "1px solid"}}>Check Out Time</th>
                        <th colSpan={2} className="text-center"></th>

                    </tr>
                </thead>
                <tbody style={{"margin": "3px", "padding": "5px ", "border": "1px solid"}}>
                    {props.students.length >0 ?(
                        props.students.map((student,i)=>(
                            <tr key={student.id}>
                                <td style={{"margin": "3px", "padding": "5px ", "border": "1px solid"}}>{i+1}</td>
                                <td style={{"margin": "3px", "padding": "5px ", "border": "1px solid"}}>{student.rollNumber}</td>
                                <td style={{"margin": "3px", "padding": "5px ", "border": "1px solid"}}>{student.firstName}</td>
                                <td style={{"margin": "3px", "padding": "5px ", "border": "1px solid"}}>{student.lastName}</td>
                                <td style={{"margin": "3px", "padding": "5px ", "border": "1px solid"}}>{student.checkIn}</td>
                                <td style={{"margin": "3px", "padding": "5px ", "border": "1px solid"}}>{student.checkOut}</td>
                                {/* <td className="text-left">                            
                                   <button>Delete</button>
                                </td> */}

                            </tr>
                        ))
                    ):
                    (
                        <tr>
                            <td colSpan={7}>No Students</td>
                        </tr>
                    )
                    }
                </tbody>
            </table>
        </div>
        </>
    )
}