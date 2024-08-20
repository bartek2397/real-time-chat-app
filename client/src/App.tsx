import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import Heading from './components/Heading';
import axios from 'axios';
import { login } from './api';
import { redirect } from 'react-router-dom';

function App() {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');


  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = await login({ email, password });
      console.log('Login successful', data);
      redirect('/dashboard')
    } catch (error) {
      console.error('Login failed', error);
    }
  };

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
        <form onSubmit={handleLogin} className='signUpForm'>
          <Input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
          <Input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
          <Button label='Sign Up' type='submit' />
        </form>
        <p className='underFormText'>Don't have an account? <a href="/signUp" className='link'>Sign Up</a> here!</p>
      </div>
    </div>
  );
}

export default App;
