import { useEffect, useState } from "react";

const ComponentA = () => {
  const [componentName, setComponentName] = useState("Component A");
  useEffect(() => {
    console.log("mounted");
  }, []);

  useEffect(() => {
    //update
    console.log("componentName");
  }, [componentName]);

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setComponentName(event.target.value);
  };

  return (
    <div>
      <h1>{componentName}</h1>
      <input value={componentName} onChange={handleInputChange}></input>
    </div>
  );
};

export default ComponentA;
