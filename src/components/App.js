import React from 'react'
import B from './B';
import C from './C';
import Store from '../store/Store';
function App() {
   return <Store>
        <div>
            <B />
            <C />
        </div>
   </Store>
}

export default App;
