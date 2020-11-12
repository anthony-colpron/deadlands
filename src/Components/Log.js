import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { logSelector } from '../Redux/selectors';

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const Log = () => {
  const logs = useSelector(logSelector);
  const prevLength = usePrevious(logs.length);

  useEffect(() => {
    logs.slice((prevLength || 0) - logs.length).forEach((log) => alert(log));
  }, [logs.length]);

  return null;
};

export default Log;
