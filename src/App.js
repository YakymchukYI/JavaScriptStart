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
  let str6='This is nice document nice';
  let str7='    to    ';
  
  
  
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
  let v2=str6.replaceAll('nice', 'good');
  let v3=str2.padEnd(50 , '123');
  let v4=str2.padStart(50 , '123');
  let v5=str7.trim();
  console.log(str7.length);
  console.log(v5.length);
  let v6=str7.trimEnd();
  console.log(v6.length);
  let v7=str7.trimStart();
  console.log(v7);
  console.log(v7.length);

  // const name1="yaroslav";
  // function ucFirst(name){
  //   return name[0].toUpperCase()+name.slice(1);
  // }
  //const upName=name1.charAt(0).toUpperCase()+name1.substring(1);
  
  const ucFirst = () =>{
    const name='yaroslav';
    return name[0].toUpperCase()+name.slice(1);
  }

  const checkSpam = () => {
    const vSpam='ViAgRa and XXX';
    const vSpamtLC=vSpam.toLowerCase();
    return vSpamtLC.includes('viagra') || vSpamtLC.includes('xxx');
  }
  console.log(checkSpam());
  
  const maxlength=10;
  function truncate(str5, maxlength){
    if(str5.length>=maxlength){
      return str5.slice(0, maxlength-3)+'...';
    }
    return str5;
  }// цю функцію наваяв вже без гугла.

  function extractCurrencyValue(){
    let val='$150';
    let val1=parseInt(val.substring(1));
    return val1;
  }
 console.log(typeof extractCurrencyValue());



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
        <p>{v2}</p>
        <p>{v3}</p>
        <p>{v4}</p>
        <p>{v5}</p>

        <p>{ucFirst()}</p>
        {/* <p>{upName}</p> */}
        <p>{checkSpam()}</p>
        <p>{truncate(str5, maxlength)}</p>
        <p>{extractCurrencyValue()}</p>
      </header>
    </div>
  );
}

export default App;
