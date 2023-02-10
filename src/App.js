import './App.css';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState(0);
  const handleClick = () => setValue(value + 1);
  const handleReset = () => setValue(0);
  return (
    <div className="App">
      <header className="App-header">
        <p>{value}</p>
        <Button as="a" variant="primary" onClick={handleClick}>
          ADD
        </Button>
        <Button as="a" variant="secondary" onClick={handleReset}>
          reset
        </Button>
      </header>
    </div>
  );
}

export default App;
