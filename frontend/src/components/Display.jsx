import React, { useEffect, useRef, useState } from 'react';
import resetIcon from '../assets/reset-svgrepo-com.svg';
import './Display.css';
import ResultCard from './resultCard';


const Display = ({hof,calculatedWPM}) => {

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const [typedWord, settypedWord] = useState('');

  const dummyWords = [

   "the", "was", "were", "being", "been", "having", "has", "had", "that", "have", "I",
  "it", "for", "not", "on", "with", "he", "as", "you", "do", "at",
  "this", "but", "his", "by", "from", "they", "we", "say", "her", "she",
  "or", "an", "will", "my", "one", "all", "would", "there", "their", "what",
  "so", "up", "out", "if", "about", "who", "get", "which", "go", "me",
  "when", "make", "can", "like", "time", "no", "just", "him", "know", "take",
  "people", "into", "year", "your", "good", "some", "could", "them", "see", "other",
  "than", "then", "now", "look", "only", "come", "its", "over", "think", "also",
  "back", "after", "use", "two", "how", "our", "work", "first", "well", "way",
  "even", "new", "want", "because", "any", "these", "give", "day", "most", "us",
  "is", "am", "are", "was", "were", "being", "been", "having", "has", "had",
  "does", "did", "shall", "should", "might", "must", "may", "many", "much", "few",
  "every", "each", "own", "such", "who", "whom", "whose", "where", "why", "when",
  "again", "never", "always", "sometimes", "often", "once", "ever", "only", "just", "still",
  "very", "right", "left", "down", "off", "here", "high", "long", "short", "old",
  "young", "big", "small", "great", "little", "large", "early", "late", "next", "last",
  "every", "each", "own", "such", "who", "whom", "whose", "where", "why", "when", "above", "below", "under",
  "without", "within", "across", "behind", "ahead", "toward", "upon", "along", "towards", "beside",
  "inside", "outside", "upon", "near", "far", "more", "less", "most", "least", "each",
  "another", "other", "does", "did", "shall", "should", "might", "must", "may", "theirs",
  "ours", "mine", "yours", "hers", "his", "someone", "something", "anyone", "anything", "everyone"

  ];

  function shuffleArray(dummyWords) {
    return dummyWords
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }
  const [words, setWords] = useState([]);

  const [result, setresult] = useState([]);

  const [timeLeft, setTimeLeft] = useState(60);

  const [timerStarted, settimerStarted] = useState(false);

  const [defaultTime, setdefaultTime] = useState('01:00');

  const [correctCharacters, setcorrectCharacters] = useState(0);

  const [totalKeystrokes, setTotalKeystrokes] = useState(0);

  const timerRef = useRef(60);
  const [totalWords, setTotalWords] = useState(22);

  const [hasAttempted, sethasAttempted] = useState(false)

  const [lastResult, setLastResult] = useState({

    CorrectWords: 0,

    CorrectCharacters: 0,

    wWords: 0,

    Keystrokes: 0,

    Wpm: 0

  });



  const handleRest = () => {
    const shuffled = shuffleArray(dummyWords);
  setWords(shuffled);
    setCurrentWordIndex(0);

    settypedWord('');

    setresult([]);

    settimerStarted(false);
    setTimeLeft(timerRef.current);

    setcorrectCharacters(0);
    
    setTotalKeystrokes(0);
  };



  const handleInput = (e) => {

    const input = e.target.value;



    if (!timerStarted) {

      settimerStarted(true);

    }



    if (input.endsWith(' ')) {

      const trimmed = input.trim();

      const current = words[currentWordIndex];



      if (trimmed.length > 0) {

        const isCorrect = trimmed === current;

        setresult([...result, isCorrect ? "correct" : "wrong"]);



        let correctCount = 0;

        for (let i = 0; i < current.length; i++) {

          if (trimmed[i] === current[i]) {

            correctCount++;

          }

        }

        setcorrectCharacters(prev => prev + correctCount);



        setCurrentWordIndex(prev => prev + 1);

      }



      settypedWord('');

    } else {

      settypedWord(input);

    }

  };



  const handleKeyDown = (e) => {

    const ignoredKeys = ["Shift", "Tab", "CapsLock", "Control", "Alt", "Meta"];

    if(e.key === ' '){
      return;
    }

    if (!ignoredKeys.includes(e.key)) {

      setTotalKeystrokes(prev => prev + 1);

    }

  };



  useEffect(() => {

    let timer;

    if (timerStarted && timeLeft > 0) {

      timer = setInterval(() => {

        setTimeLeft(prev => prev - 1);

      }, 1000);

    }



    if (timeLeft === 0) {

      settimerStarted(false);

      sethasAttempted(true)


      const correct = result.filter(item => item === "correct").length;

      const wrong = result.filter(item => item === "wrong").length;

      const finalWpm = Math.round((correctCharacters / 5) / (timerRef.current / 60));

      if (typeof calculatedWPM === 'function') {
        calculatedWPM(finalWpm);
      }

      setLastResult({

        CorrectWords: correct,

        wWords: wrong,

        CorrectCharacters: correctCharacters,

        Keystrokes: totalKeystrokes,

        Wpm: finalWpm

      });

    }



    return () => clearInterval(timer);

  }, [timerStarted, timeLeft]);



  const formatTime = (seconds) => {

    const mins = String(Math.floor(seconds / 60)).padStart(2, '0');

    const secs = String(seconds % 60).padStart(2, '0');

    return `${mins}:${secs}`;

  };



  useEffect(() => {
    const updateTotalWords = () => {
      const width = window.innerWidth;

      if (width < 600) {
        setTotalWords(4);
      } else if (width < 900) {
        setTotalWords(10);
      } else if (width < 1100) {
        setTotalWords(15);
      }
      else {
        setTotalWords(22);
      }
    };

    updateTotalWords(); // Initial call
    window.addEventListener("resize", updateTotalWords); // Listen for resize

    return () => window.removeEventListener("resize", updateTotalWords); // Cleanup
  }, []);

  const startIndex = Math.floor(currentWordIndex / totalWords) * totalWords;

  const visibleWords = words.slice(startIndex, startIndex + totalWords);

  useEffect(() => {
    setWords(shuffleArray(dummyWords));
  }, []);

  return (

    <>

      <div className="container">

      {!hof && (
        <div className="timerBtns">
          <button className="timeOptions Btn" onClick={() => { handleRest(); setTimeLeft(30); setdefaultTime(formatTime(30)); timerRef.current = 30; }}>30 sec</button>

<button className="timeOptions Btn" onClick={() => { handleRest(); setTimeLeft(60); setdefaultTime(formatTime(60)); timerRef.current = 60; }}>1 min</button>

<button className="timeOptions Btn" onClick={() => { handleRest(); setTimeLeft(300); setdefaultTime(formatTime(300)); timerRef.current = 300; }}>5 min</button>
        </div>
      )}



        <div className="wordBox">

          {visibleWords.map((word, idx) => {

            let className = '';

            const actualIndex = startIndex + idx;



            if (actualIndex < currentWordIndex) {

              className = result[actualIndex] === "correct" ? "correct" : "wrong";

            } else if (actualIndex === currentWordIndex) {

              const isWrongSoFar = !word.startsWith(typedWord) && typedWord.length > 0;

              className = isWrongSoFar ? "active-wrong" : "active";

            }



            return (

              <span key={actualIndex} className={`word ${className}`}>{word}</span>

            );

          })}

        </div>



        <div className="inputDiv">

          <input

            type="text"

            value={typedWord}

            onChange={handleInput}

            onKeyDown={handleKeyDown}

            autoFocus

            disabled={timeLeft === 0}

            className="inputBox"

          />

          <span className="timer">

            {timerStarted ? formatTime(timeLeft) : defaultTime}

          </span>

          <button onClick={handleRest} className="resetBTN"><img src={resetIcon} alt="Reset" width="16px" /></button>

        </div>

      </div>
      {hasAttempted && <ResultCard wpm={lastResult.Wpm} correct={lastResult.CorrectWords} wrong={lastResult.wWords} correctCharacters={lastResult.CorrectCharacters} totalKeystrokes={lastResult.Keystrokes} />}

    </>

  );

};



export default Display; 