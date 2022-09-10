import logo from './logo.svg';
import './App.css';
import Main from './components/main';
import { createContext } from 'react';

import { useEffect } from 'react';


const Theme = createContext();
function App() {

  useEffect(()=>{
    const themeStatus =  localStorage.getItem("theme");
    if (themeStatus === 'light') {
      document.body.className = 'light';
    } else{
      document.body.className = 'dark';
      
    }
    
  },[])
 
  return (
    <>
    <div className='App'>
      <Theme.Provider value={'dark'}>
        
        <Main />
      </Theme.Provider>
      </div>
    </>
  );
}

export default App;
export {Theme}