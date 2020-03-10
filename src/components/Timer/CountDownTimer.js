import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';

const Timer = ({ onExpired }) => {
  const [counter, setCounter] = useState(180); // 180초 == 3분

  const format = time => {
    let seconds = time % 60;
    let minutes = Math.floor(time / 60);
    minutes = minutes.toString().length === 1 ? '0' + minutes : minutes;
    seconds = seconds.toString().length === 1 ? '0' + seconds : seconds;
    return minutes + ':' + seconds;
  };

  useEffect(() => {
    counter === 0 && onExpired();

    const timer =
      counter > 0 &&
      setInterval(() => {
        setCounter(counter - 1);
      }, 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return <Typography variant="body1">{format(counter)}</Typography>;
};

export default Timer;
