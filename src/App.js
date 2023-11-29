import './App.css';
import { useEffect, useState } from 'react';


function Timer(){
  const [time, setTime] = useState('5:00');
  const [isOver, setIsOver] = useState(false);
  const [doing, setDoing] = useState(false);


  //function to change the timer (mins and hours)
  function Timing(){
    if(!isOver){
      let timeTab = time.split(':').map(x=> parseInt(x));

      if(timeTab[0] !== 0 || timeTab[1] !== 0){
      let i = timeTab[0];
      let j = timeTab[1]; 

      if(j > 0) j-=1;
      else{
        i-=1;
        j=59;
      }

      setTime(i + ":" + ((j >= 10) ? j : ('0' + j))); 
    }
    }
    else return;
  }

  //btn start function
  function startTime(){
    setDoing(true);
    setIsOver(false);
  }

  // btn stop function
  function stopTimer(){
    setIsOver(true);
  }

  // btn reset function
  function resetTime(){
    setTime('5:00')
    setDoing(false);
  }

  //hook to do every second after clicking start
  useEffect(()=>{
    if(doing){
      const interval = setInterval(() => {
        Timing();
      }, 1000);
      
      return () => clearInterval(interval);
    }
  })


  return(
    <div className='time'>
      <h1>{time}</h1>
      <div className='divider'></div>
      <div className='btns'>
        <button className='btn' onClick={startTime}>START</button>
        <button className='btn' onClick={stopTimer}>STOP</button>
        <button className='btn' onClick={resetTime}>RESET</button>
      </div>
    </div>
  );
}


export default function App(){
  return (
    <div className='App'>
      <Timer />
    </div>
  );
}


