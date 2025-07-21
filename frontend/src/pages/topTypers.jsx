import React from 'react';
import './topTypers.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../authContext';
import axios from 'axios';
import { useState } from 'react';
import {format} from 'date-fns'


function Leaderboard({ wpm, username }) {
  const [data, setData] = useState([]);

  const location = useLocation();
  const { isLoggedIn } = useAuth();
  const isHOFMode = location.pathname === "/hall-of-fame";

  useEffect(() => {
    if (isLoggedIn && isHOFMode && wpm) {
      sendToDatabase({ username, wpm });
    }
  }, [isLoggedIn, isHOFMode, wpm, username]);

  const sendToDatabase = async ({ username, wpm }) => {
    try {
      const response = await axios.post('http://localhost:5000/api/leaderboard', {
        username,
        wpm,
      });
      console.log('Score saved:', response.data);

    } catch (err) {
      alert("Failed to save score.")
    }

  }

  useEffect(() => {
    const recFromDatabase = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/leaderboard');
        setData(response.data); //  Array of { username, wpm, date }
      } catch (err) {
        console.error('Failed to fetch leaderboard:', err);
      }
    };

    recFromDatabase();
  }, []);


  return (
    <div className="leaderboard-container">
      <h1 className="leaderboard-title">🏆 Top Typers Leaderboard</h1>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>User</th>
            <th>WPM</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.username}</td> {/* or user.name if backend sends "name" */}
              <td>{user.wpm}</td>
              <td>{format(new Date(user.timestamp), 'dd/MM/yyyy')}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default Leaderboard;
