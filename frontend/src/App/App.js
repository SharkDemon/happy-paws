import React from 'react';
import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';
import MainRouter from '../Components/MainRouter';
import Copyright from '../Components/Copyright';

export default class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <header className='appHeader'>
          <h1>
            <BrowserRouter>
              <Link style={{ textDecoration: 'none', color: '#FFD700' }} to='/' >Happy Paws</Link>
            </BrowserRouter>
          </h1>
        </header>
        <main>
            <MainRouter />
        </main>
        <footer>
            <Copyright />
        </footer>
      </div>
    );
  }
}

