import { useState, useCallback, useEffect } from "react";


function useConter(intialvalue = 0) {
  const [count, setCount] = useState(intialvalue);

  // const increment = useCallback(() => {
  //   setCount((prev) => prev + 1);
  // }, []);

  const increment = useCallback(() => {
    // setCount(count + 1);
    setCount((prev) => prev + 1);
  }, []);

  
  // console.log(increment, "----------------------->");
  // const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(intialvalue);

  return { count, increment, decrement, reset };
}

export default useConter;
