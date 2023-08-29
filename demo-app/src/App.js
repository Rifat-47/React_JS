import './App.css';
import AuthContext from './store/auth-context';
import React, { useContext } from 'react';

function App() {
  const ctx = useContext(AuthContext);
  return (
    <div className="App">
      {ctx.isLoggedIn && <button className='button1' >Profile</button>}
      {ctx.isLoggedIn && <button className='button1' onClick={ctx.onLogout}>Logout</button>}
      {!ctx.isLoggedIn && <button className='button1' onClick={ctx.onLogin}>Login</button>}

      <div className="checkbox-container">

        <input type="checkbox" className="hidden-checkbox" id="checkbox10" name="checkbox-group" />
        <label htmlFor="checkbox10" className="checkbox-label">Option 1</label>

        <input type="checkbox" className="hidden-checkbox" id="checkbox2" name="checkbox-group" />
        <label htmlFor="checkbox2" className="checkbox-label">Option 2</label>

        <input type="checkbox" className="hidden-checkbox" id="checkbox3" name="checkbox-group" />
        <label htmlFor="checkbox3" className="checkbox-label">Option 3</label>

      </div>
    </div>
  );
}

export default App;
