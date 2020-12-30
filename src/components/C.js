import React, { useContext } from 'react';
import './C.css';
import { CContext } from '../store/Store';
function C() {
    const c = useContext(CContext);
    console.log('state of c: ',c);
    const handleClick = (event) => {
        c.dispatch({type:'TOGGLE_ON'});
    }
    return (
        <div>
            <button disabled={!c.state.enabled} className={c.state.on && "c-red"} onClick={handleClick}>Button C</button>
        </div>
    )
}

export default C
