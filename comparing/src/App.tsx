import React from 'react';
import './App.css';
import { Footer } from './footer/footer';

const user = {
    username: 'tester_1',
    age: '17'
};

const App = () => (
    <div className = "App">
        <h1>Test {user.username}</h1>
        <h2>Age: {user.age}</h2>
        <Footer copyright={"C++"} />
    </div>
)

export default App;
