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
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>{text.toUpperCase()}</p>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control type="text" placeholder="name@example.com" onChange={handleForm}/>
        </Form.Group>
        <p>{value}</p>
        <Button as="a" variant="primary" onClick={handleClick}>
          ADD
        </Button>
        <Button as="a" variant="secondary" onClick={() => setValue(0)}>
          reset
        </Button>
      </header>
    </div>
  );
}

export default App;
