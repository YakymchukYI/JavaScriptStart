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
  const str1='Hello';
  const str2='World';
  const str3='World Hello World';
  let str4=' Darck-Night';
  let str5='This is nice document';
  let name='yaroslav';
  
  
  let arr1=str4.split('-',);
  let arr2=str1.split('');
  let arr3=str1.repeat(4);
  console.log(str5.includes('Hello'));
  console.log(str5.includes('Darck'));
  console.log(str5.includes('is'));
  console.log(str5.includes('if'));

  console.log(str5.indexOf('nice'));
  console.log(str5.indexOf('This'));
  console.log(str5.indexOf('this'));
  console.log(str5.indexOf('m'));

  console.log(str5.lastIndexOf('i'));

  console.log(str5.endsWith('s', 4));
  console.log(str5.endsWith('T'));

  console.log(str5.startsWith('T'));
  console.log(str5.startsWith('n', 7));

  console.log(str5.search('is'));
  console.log(str5.search('nice'));
  console.log(str5.search('to'));

  console.log(str5.slice(0, 4));
  console.log(str5.slice(8, 11));

  console.log(str5.substring(8, str5.length-1));  

  let v1=str5.replace('document', str2);

  const name1="yaroslav";
  function ucFirst(name){
    return name[0].toUpperCase()+name.slice(1);
  }
  const upName=name1.charAt(0).toUpperCase()+name1.substring(1);


  const vSpam='ViAgRa and XXX';
  function checkSpam(vSpam){
    let vSpamtLC=vSpam.toLowerCase();
    if(vSpamtLC.includes('viagra') || vSpamtLC.includes('xxx')){
      return 0;
    }
    return 1;
  }
  const maxlength=10;
  function truncate(str5, maxlength){
    if(str5.length>=maxlength){
      return str5.slice(0, maxlength-3)+'...';
    }
    return str5;
  }// цю функцію наваяв вже без гугла.


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
        <p>{str1+str2}</p>
        <p>{str1+' '+str2}</p>
        <p>{str3.slice(0,5)}</p>
        <p>{str3.slice(6,11)}</p>
        <p>{arr1+' '}</p>
        <p>{arr2+' '}</p>
        <p>{arr3}</p>
        <p>{str1.charAt(0)+" "+str1.charAt(4)}</p>
        <p>{str5.substring(8, str5.length-1)}</p>
        <p>{str5.substr(2, 10)}</p>
        <p>{v1}</p>
        <p>{ucFirst(name)}</p>
        <p>{upName}</p>
        <p>{checkSpam(vSpam)}</p>
        <p>{truncate(str5, maxlength)}</p>
      </header>
    </div>
  );
}

export default App;
