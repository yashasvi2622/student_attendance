import React from "react";

export default function Header(props){
    return(
        <header>
            <h1>Student Attendance Software</h1>
            <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                <button onClick={() => props.handleIsAdding(true)} className='round-button'>Add Button</button>
            </div>
        </header>
    )
}