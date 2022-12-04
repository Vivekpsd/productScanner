import React, { useState } from 'react';
import {Container, Typography} from '@mui/material'

function LoginForm(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [allRecords, setAllRecords] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    const newRecord = { email: email, password: password, gender: gender };
    setAllRecords([...allRecords, newRecord]);
    props.history.push({
      pathname: '/home',
      state: allRecords,
    });
  };

  return (
    <Container style={{marginTop:'50px', textAlign:'center'}} >
      <Typography variant='h3' align='center' style={{marginBottom:'50px'}}>Login In</Typography>
      <div class="form">
      <form action="" onSubmit={submitForm}>
        <div>
          <lable htmlFor="email">Email</lable>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <lable htmlFor="password">Password</lable>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button class="button" type="submit">
          Sign Up
        </button>
      </form>
    </div>
    </Container>
  );
}

export default LoginForm;
