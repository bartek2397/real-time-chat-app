import { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import Heading from './components/Heading';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
   axios.get('http://localhost:3500/')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);
  return (
    <div className="homePage">
      <header className='header'>
        <Heading title={message} subtitle='Please sign in to contact your friends' center />
      </header>
      <div className='formContainer'>
        <form action="" className='signUpForm'>
          <Input type="email" placeholder='Email' />
          <Input type="password" placeholder='Password'/>
          <Button label='Sign Up' />
        </form>
        <p className='underFormText'>Don't have an account? <a href="" className='link'>Sign Up</a> here!</p>
      </div>
    </div>
  );
}

export default App;
