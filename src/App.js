import logo from './logo.svg';
import './App.css';
import Add from './components/Add';
import Alert from './components/Alert';
import React,{useState} from 'react';
import { studentData } from './data';
import List from './components/List';
import Header from './components/Header';

function App() {
  const [alert, setAlert] = useState(null);
  const[students,setStudents] = useState(Object.values(studentData));
  const [isAdding,setIsAdding] = useState(false);
  const showAlert = (msg,key) => {
    setAlert({
      msg :msg,
      key : key
    })

  }
  const dataAdd=(data)=>{
    setStudents(data);
  }
  const handleIsAdding=(add)=>{
    setIsAdding(add);
  }
  return (
    <>
      {isAdding && (        
      <Add showAlert={showAlert} students={students} dataAdd={dataAdd} handleIsAdding={handleIsAdding}></Add>)}
      {!isAdding && (
        <>
        <Header handleIsAdding={handleIsAdding}></Header>
        <List students={students} ></List>
        </>
      )}
      <Alert alert={alert}></Alert>
    </>
  );
}

export default App;
