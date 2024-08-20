import axios from "axios";
import { useState, useEffect, FormEvent } from "react";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Input from "../components/Input";
import { register } from '../api'
import { redirect } from "react-router-dom";
import { UserData } from "../lib/types";

export default function SignUp() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [message, setMessage] = useState('');

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const data = await register({ email, password })
      console.log('Registration succesfull', data)
      redirect('/dashboard')
    } catch (error) {
      console.error("Registration failed", error)
    }
  }

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
        <form onSubmit={handleRegister} className='signUpForm'>
          <Input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
          <Input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
          {/* <Input type="password" placeholder='Confirm Password'/> */}
          <Button label='Sign Up' type="submit"/>
        </form>
        <p className='underFormText'>Already have an account? <a href="/" className='link'>Sign In</a> here!</p>
      </div>
    </div>
  );
}