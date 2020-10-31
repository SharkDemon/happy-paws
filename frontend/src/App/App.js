import React from 'react';
import './App.css';
import MainRouter from '../Components/MainRouter';
import Copyright from '../Components/Copyright';

export default class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <header className='appHeader'> 
        <main>
            <MainRouter />
        </main>
        <footer>
            <Copyright />
        </footer>
        </header>
      </div>
    );
  }
}

