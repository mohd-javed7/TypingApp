.container { 

  padding: 20px; 

  display: flex; 

  flex-direction: column; 

  justify-content: center; 

  align-items: center; 

} 

 

.timerBtns { 

  display: flex; 

  gap: 10px; 

  justify-content: center; 

  margin: 20px 0; 

} 

 

.timeOptions { 

  padding: 8px 16px; 

  font-size: 16px; 

} 

 

 

.wordBox { 

  display: flex; 

  flex-wrap: wrap; 

  gap: 10px; 

  margin-top: 10px; 

  margin-bottom: 10px; 

  border: none; 

  padding: 20px; 

  width: 50%; 

  justify-content: center; 

  border-radius: 8px; 

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);

  background-color: var(--bg-color); 

  color: var(--text-color); 

 

 

  max-height: 3em; 

  line-height: 1.5em; 

  overflow: hidden; 

} 

 

 

.word { 

  font-size: 20px; 

} 

 

.active { 

  border-bottom: 2px solid black; 

} 

 

.correct { 

  color: rgb(0, 194, 0); 

} 

 

.wrong { 

  color: red; 

} 

 

 

.active-wrong { 

  color: red; 

} 

 

.inputDiv { 
  width: 44%; 
  display: flex; 
  gap: 10px; 
  background: var(--bg-color);
  padding: 8px 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 10px;

} 

 

.inputBox { 

  width: 70%; 

  font-size: 18px; 

  padding: 5px 10px; 

  outline: none; 

  border-radius: 8px; 
  color: var(--input-color);
  background-color: var(--bg-Btn-input-timer);
  border: 1px solid #bbb;

} 

.timer { 
 
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);

  background-color: var(--bg-color); 

  color: var(--text-color); 
 
  border-radius: 6px; 

  padding: 2px; 

  display: flex; 

  justify-content: center; 

  align-items: center; 

} 

 

.resetBTN { 
  padding: 5px 12px; 
  font-size: 20px; 
  border: none;
  border-radius: 8px; 
  background-color: var(--bg-Btn-input-timer); 
  cursor: pointer; 
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
} 

.resetBTN:hover{
  background-color:  #ebebeb;
}
.resetBTN:active{
  background-color:#fffcfc ;
}

.Btn { 
  border: none; 
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  background-color: var(--bg-Btn-input-timer); 
  color: var(--text-color); 
  border: 1px solid white; 
  border-radius: 8px; 
  cursor: pointer; 
  transition: all 0.3s ease; 
} 

.Btn:hover { 
  background-color: #666; 
  color: white; 
} 

.Btn:active { 
  background-color: #fffcfc; 
  color: var(--text-color);
} 