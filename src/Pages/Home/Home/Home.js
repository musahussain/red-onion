import React from 'react';
import Header from '../../SharedComponent/Header/Header';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="banner">
                <div className="search-field">
                    <h1>Best food waiting for you</h1>
                    <input type="text" placeholder='Search food items' />
                    <input type="button" value="Search" />
                </div>
            </div>
        </div>
        
    );

};

export default Home;