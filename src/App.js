//import logo from './logo.svg';
import './App.css';

import React, {useState} from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const styles ={
  mainStyle: {
    background:'#536162',
    
  }
}
function App() {
  const [page, setPage] = useState('About Me');

  return (
    <div>
      <Header setPage={setPage}/>
      <main style={styles.mainStyle} >
        <Main page={page}/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;

/*
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

*/
