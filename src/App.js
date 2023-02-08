import './App.css';
import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [text, setText] = useState("");
  const [value, setValue] = useState(0);
  const handleClick = () => {
    setValue(value + 1);
  };
  const handleForm = (e) => {
    e.preventDefault();
    setText(e.target.value)
    console.log(e.target.id, e.target.value);
  };
  const str1='Hello';
  const str2='World';
  const str3='World Hello World';
  let str4=' Darck-Night';
  let arr1=str4.split('-',);
  let arr2=str1.split('');
  let arr3=str1.repeat(4);
  console.log(str3.includes('Hello'));
  console.log(str3.includes('Darck'));
  return (
    <div className="App">
      <header className="App-header">
        <p>{text.toUpperCase()}</p>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control id='magic' type="text" placeholder="name@example.com" onChange={handleForm}/>
        </Form.Group>
        <p>{value}</p>
        <Button as="a" variant="primary" onClick={handleClick}>
          ADD
        </Button>
        <Button as="a" variant="secondary" onClick={() => setValue(0)}>
          reset
        </Button>
        <p>{str1+str2}</p>
        <p>{str1+' '+str2}</p>
        <p>{str3.slice(0,5)}</p>
        <p>{str3.slice(6,11)}</p>
        <p>{arr1+' '}</p>
        <p>{arr2+' '}</p>
        <p>{arr3}</p>
        <p>{str1.charAt(0)+" "+str1.charAt(4)}</p>
      </header>
    </div>
  );
}

export default App;
