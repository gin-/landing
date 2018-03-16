import React, {Component} from 'react';
import placeholder from './image-placeholder.svg';
import FlippImage from './flipp_large.png';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar/>
                <Footer/>
            </div>
        );
    }
}

export default App;
