import React, { useEffect, useState } from 'react';
import './customWords.css';
import ResultCard from '../components/resultCard';
import resetIcon from '../assets/reset-svgrepo-com.svg';

const CustomWords = () => {
  const [userInput, setUserInput] = useState('');
  const [words, setWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [typedWord, setTypedWord] = useState('');
  const [result, setResult] = useState([]);
  const [correctCharacters, setCorrectCharacters] = useState(0);
  const [totalKeystrokes, setTotalKeystrokes] = useState(0);
  const [hasAttempted, setHasAttempted] = useState(false);
  const [customInputMode, setCustomInputMode] = useState(true);

  const [lastResult, setLastResult] = useState({
    CorrectWords: 0,
    CorrectCharacters: 0,
    wWords: 0,
    Keystrokes: 0,
    Wpm: 0,
  });

  const handleCustomSubmit = () => {
    const trimmed = userInput.trim();
    if (trimmed.length === 0) return;
    const wordsArray = trimmed.split(/\s+/);
    setWords(wordsArray);
    setCustomInputMode(false);
    resetTest();
  };

  const resetTest = () => {
    setCurrentWordIndex(0);
    setTypedWord('');
    setResult([]);
    setCorrectCharacters(0);
    setTotalKeystrokes(0);
    setHasAttempted(false);
    setSpaceCount(0)
  };

  const handleResetToInput = () => {
    setWords([]);
    setUserInput('');
    setCustomInputMode(true);
    resetTest();
  };

  const handleInput = (e) => {
    const input = e.target.value;

    if (input.endsWith(' ')) {
      const trimmed = input.trim();
      const current = words[currentWordIndex];

      if (trimmed.length > 0) {
        const isCorrect = trimmed === current;
        setResult([...result, isCorrect ? 'correct' : 'wrong']);

        let correctCount = 0;
        for (let i = 0; i < current.length; i++) {
          if (trimmed[i] === current[i]) {
            correctCount++;
          }
        }

        setCorrectCharacters((prev) => prev + correctCount);
        setCurrentWordIndex((prev) => prev + 1);
      }

      setTypedWord('');
    } else {
      setTypedWord(input);
    }
  };

  const handleKeyDown = (e) => {
    const ignoredKeys = ['Shift', 'Tab', 'CapsLock', 'Control', 'Alt', 'Meta'];
    if(e.key===' '){
        return;
    }
    if (!ignoredKeys.includes(e.key)) {
      setTotalKeystrokes((prev) => prev + 1);
    }
  };

  const totalWords = 22;
  const startIndex = Math.floor(currentWordIndex / totalWords) * totalWords;
  const visibleWords = words.slice(startIndex, startIndex + totalWords);

  useEffect(() => {
    if (!customInputMode && currentWordIndex >= words.length) {
      const correct = result.filter((item) => item === 'correct').length;
      const wrong = result.filter((item) => item === 'wrong').length;
      const finalWpm = Math.round((correctCharacters / 5)); // estimate
      setLastResult({
        CorrectWords: correct,
        wWords: wrong,
        CorrectCharacters: correctCharacters,
        Keystrokes: totalKeystrokes,
        Wpm: finalWpm,
      });

      setHasAttempted(true);
    }
  }, [currentWordIndex, words.length]);

  return (
    <div className="container">
      {customInputMode ? (
        <div className="customInputSection">
          <textarea
            className="customInputBox"
            rows="4"
            placeholder="Enter your custom words or phrases here..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          ></textarea>
          <button onClick={handleCustomSubmit} className="Btn">Start Test</button>
        </div>
      ) : (
        <>
          <div className="wordBox">
            {visibleWords.map((word, idx) => {
              let className = '';
              const actualIndex = startIndex + idx;

              if (actualIndex < currentWordIndex) {
                className = result[actualIndex] === 'correct' ? 'correct' : 'wrong';
              } else if (actualIndex === currentWordIndex) {
                const isWrongSoFar = !word.startsWith(typedWord) && typedWord.length > 0;
                className = isWrongSoFar ? 'active-wrong' : 'active';
              }

              return (
                <span key={actualIndex} className={`word ${className}`}>
                  {word}
                </span>
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
              disabled={currentWordIndex >= words.length}
              className="inputBox"
            />
            <button onClick={handleResetToInput} className="resetBTN">
              <img src={resetIcon} alt="Reset" width="16px" />
            </button>
          </div>
        </>
      )}

      {hasAttempted && (
        <ResultCard
          wpm={lastResult.Wpm}
          correct={lastResult.CorrectWords}
          wrong={lastResult.wWords}
          correctCharacters={lastResult.CorrectCharacters}
          totalKeystrokes={lastResult.Keystrokes}
        />
      )}
    </div>
  );
};

export default CustomWords;
