import { useState, useEffect } from "react";

const Counter = (props) => {
  //mounted, rendered: onComponentDidMount
  //updated: onComponentDidUpdate
  //unmounted => destroyed: onComponentWillUnmount

  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    //mounted + updated
    console.log("mounted + updated");
  });

  useEffect(() => {
    //mounted
    console.log("mounted");
    //api request
    return () => {
      //unmounted
      //cancel => abort
      console.log("unmounted");
    };
  }, []);

  useEffect(() => {
    //mounted + count
    console.log("mounted + count", count);

    return () => {
      //unmounted
      console.log("unmounted");
    };
  }, [count]);

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="counter-container">
      <button onClick={handleDecrement}>-</button>
      <div>{count}</div>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Counter;
