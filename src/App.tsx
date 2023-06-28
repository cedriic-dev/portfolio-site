import React from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import './index.css';

function App() {
    return (
        <div>
            <div className="background" />
            <Header />
            <Home />
        </div>
    );
}

export default App;
