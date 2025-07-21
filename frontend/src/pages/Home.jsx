import React from 'react'
import logo0 from '../assets/logo2.png';
import { Link } from 'react-router-dom';
import './home.css'

const Home = () => {
  return (
    <>
      <div className="welcome-box">
        <div className="Logo-typer">
          <img src={logo0} alt="Typer" />
        </div>
        <div className="seplogo"></div>
        <div className="about-logo">
          <p className='tagline'>Practice. Compete. Improve.</p>
          <p className='tagline'>Typer makes you faster at the keyboard</p>
          <p className='tagline'>One word at a time.</p>
        </div>
        <div className="seplogo"></div>
        <div >
          <button className='home-btn-options'><Link to="/normal-mode">Normal Mode</Link></button>
          <button className='home-btn-options'><Link to="/hall-of-fame">Hall Of Fame</Link></button>
        </div>
      </div>
      <div className="other-sections">
        <div className='other-sections-cards'>
          <h2>Typing test</h2>
          <p>Take a typing test to check your speed, accuracy, and focus.</p>
          <p>Choose from different time modes and get real-time stats like WPM, correct words, and accuracy.</p>
          <p>It's a smooth, distraction-free experience to help you type better with every try.</p>
          <br />
          <p>One major benefit of using our typing app is that the more you practice, the faster and more accurate you'll become.</p>
          <p>By training with commonly used words, you'll naturally improve your overall typing speed and confidence across everything you type.</p>
        </div>

        <div className="other-sections-cards">
          <h2>Hall Of Fame</h2>
          <p>The Hall of Fame showcases the top performers who have achieved the highest scores in typing tests.</p>
          <p>Only the best results make it here based on WPM, accuracy, and consistent performance across tests.</p>
          <p>It’s a motivating space where you can challenge yourself to rise through the ranks and leave your mark.</p>
          <br />
          <p>Log in, take a typing test, and if your score ranks high, you’ll earn a spot.</p>
          <p>The Hall of Fame helps build a sense of competition, progress, and recognition as you continue to improve your typing skills.</p>
        </div>

        <div className="other-sections-cards">
          <h2>Custom Typing Test</h2>
          <p>The Custom Typing Test lets you create your own typing experience using words you choose.</p>
          <p>Just enter your own words or phrases, and they’ll appear in the test exactly as you typed them.</p>
          <p>It’s perfect for practicing specific vocabulary, names, coding terms, or anything else you want to get faster at typing.</p>
          <br />
          <p>Use this mode to personalize your practice and focus on the words that matter most to you.</p>
          <p>Custom tests help you build muscle memory for real-world typing whether it's for school, work, or creative projects.</p>
        </div>


        <div className="other-sections-cards">
          <h2>Top 200 Words Typing Test</h2>
          <p>The Top 200 Words Typing Test gives you a fast-paced challenge using the most common English words.
          These core words are found in nearly every conversation and document, making them
          </p>
          <p>essential for everyday typing fluency. Practicing with this set is ideal for building your speed and accuracy where it matters most in real-world writing and communication.</p>
          <br />
          <p>Use this mode to boost your familiarity with the words you'll encounter most often at work, in school, and online while gaming, surfing the internet.</p>
          <p>By mastering these 200 words, you’ll develop greater confidence in your typing and see rapid improvement in your overall typing performance.</p>
        </div>


      </div>
    </>
  )
}

export default Home
