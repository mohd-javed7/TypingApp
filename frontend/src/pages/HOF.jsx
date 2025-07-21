import React from 'react'
import Display from '../components/Display'
import { useAuth } from '../authContext';
import { Link } from 'react-router-dom';
import Leaderboard from './topTypers';
import { useState } from 'react';
import './hof.css'

const HOF = () => {
  const [wpm, setwpm] = useState(0)

  const {isLoggedIn,username} = useAuth()
    const hof = true;
  return isLoggedIn?(
    <div>
      <Display hof={hof} calculatedWPM={setwpm} />
      <Leaderboard wpm={wpm} username={username}/>
    </div>
  ) : (
    <div className='not-logged-in'>
    <p>You need to login first to access the Hall of fame.</p>
    <Link to="/login">Go to Login</Link>
    </div>
  )
}

export default HOF
