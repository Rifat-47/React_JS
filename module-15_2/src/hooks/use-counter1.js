import { useState, useEffect } from 'react';

const useCounter1 = (forwardingFunc) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() =>
            setCounter(counter => forwardingFunc(counter)), 1000);
        
        return () => { clearInterval(interval) }
    }, [forwardingFunc]);

    return counter;
}

export default useCounter1;