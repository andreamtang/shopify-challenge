import React from 'react';
import ImageCardList from './components/ImageCardList/ImageCardList.js'
import Header from './components/Header/Header.js'
import './App.css';

function App() {
    return (
      <div className="App">
        <Header />
        <ImageCardList/>
      </div>
    );
}

export default App;
