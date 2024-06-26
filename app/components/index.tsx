'use client';

import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

type MouseMoveEvent = {
  type: 'mousemove';
  x: number;
  y: number;
};

type MouseClickEvent = {
  type: 'click';
  x: number;
  y: number;
};

type KeyPressEvent = {
  type: 'keydown';
  key: string;
  code: number;
};

const Home: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [textNotRobot, settextNotRobot] = useState('');
  const [notRobot, setNotRobot] = useState(false);
  const [mouseMoves, setMouseMoves] = useState<MouseMoveEvent[]>([]);
  const [mouseClicks, setMouseClicks] = useState<MouseClickEvent[]>([]);
  const [keyPresses, setKeyPresses] = useState<KeyPressEvent[]>([]);

  const handleLogin = () => {
    console.log('Login clicked');
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Not a robot:', notRobot);
    console.log('Mouse Move Events:', mouseMoves);
    console.log('Mouse Click Events:', mouseClicks);
    console.log('Keydown Events:', keyPresses);
  };

  const trackMouseMove = (e: MouseEvent) => {
    setMouseMoves((prev) => [
      ...prev,
      { type: 'mousemove', x: e.clientX, y: e.clientY },
    ]);
  };

  const trackClick = (e: MouseEvent) => {
    setMouseClicks((prev) => [
      ...prev,
      { type: 'click', x: e.clientX, y: e.clientY },
    ]);
  };

  const trackKeyPress = (e: KeyboardEvent) => {
    setKeyPresses((prev) => [
      ...prev,
      { type: 'keydown', key: e.key, code: e.keyCode },
    ]);
  };

  useEffect(() => {
    window.addEventListener('mousemove', trackMouseMove);
    window.addEventListener('click', trackClick);
    window.addEventListener('keydown', trackKeyPress);

    return () => {
      window.removeEventListener('mousemove', trackMouseMove);
      window.removeEventListener('click', trackClick);
      window.removeEventListener('keydown', trackKeyPress);
    };
  }, []);

  return (
    <>
      <h1 style={{ textAlign: 'center', fontSize: '2rem', marginTop: '0' }}>Login Page</h1>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={12} sm={6}>
          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              '& > :not(style)': { m: 1 },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="email"
              label="E-mail"
              variant="filled"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              sx={{ backgroundColor: 'white', marginBottom: '8px' }}
            />

            <TextField
              id="password"
              label="Password"
              type="password"
              variant="filled"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              sx={{ backgroundColor: 'white', marginBottom: '8px' }}
            />

            <TextField
              id="textNotRobot"
              label="Please type 'I'm not a robot'"
              variant="filled"
              value={textNotRobot}
              onChange={(e) => settextNotRobot(e.target.value)}
              fullWidth
              sx={{ backgroundColor: 'white', marginBottom: '8px' }}
            />

            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={notRobot}
                    onChange={(e) => setNotRobot(e.target.checked)}
                    color="primary"
                  />
                }
                label="I'm not a robot"
              />
            </FormGroup>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
              <Button variant="contained" onClick={handleLogin}>
                Log in
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
