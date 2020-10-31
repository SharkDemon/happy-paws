import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import MainRouter from '../Components/MainRouter';
import Copyright from '../Components/Copyright';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <header className='appHeader'>
                <Link to='/'><h1>Happy Paws</h1></Link>
                <MainRouter />
                <Copyright />
        </header>
      </div>
    );
  }
}

export default App;

