import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [counter, setCounter] = useState(180);

  const format = time => {
    let seconds = time % 60;
    let minutes = Math.floor(time / 60);
    minutes = minutes.toString().length === 1 ? '0' + minutes : minutes;
    seconds = seconds.toString().length === 1 ? '0' + seconds : seconds;
    return minutes + ':' + seconds;
  };

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <>
      <h3>{format(counter)}</h3>
    </>
  );
};

export default Timer;
