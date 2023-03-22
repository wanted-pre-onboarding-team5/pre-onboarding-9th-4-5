import React from 'react';
import { useRevalidator } from 'react-router-dom';

const useIntervalTrigger = (delay: number) => {
  const [trigger, setTrigger] = React.useState(false);

  React.useEffect(() => {
    const id = setInterval(() => setTrigger((prev) => !prev), delay);
    return () => clearInterval(id);
  }, [delay]);

  return trigger;
};

const useIntervalRevalidate = (intervalTime: number) => {
  const revalidator = useRevalidator();
  const intervalTrigger = useIntervalTrigger(intervalTime);

  React.useEffect(() => {
    if (revalidator.state === 'idle') {
      revalidator.revalidate();
    }
  }, [intervalTrigger]);
};

export default useIntervalRevalidate;
