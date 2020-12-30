import React, { useContext } from "react";
import { BContext, CContext } from "../store/Store";
import "./B.css";
function B() {
  const b = useContext(BContext);
  const c = useContext(CContext);
  console.log('state of b: ',b);
  const handleClick = event => {
    b.dispatch({type:"TOGGLE_ON"});
    c.dispatch({type:"TOGGLE_ENABLED"});
  };
  return (
    <div>
      <button className={b.state.on && "b-red"} onClick={handleClick}>
        Button B
      </button>
    </div>
  );
}

export default B;
