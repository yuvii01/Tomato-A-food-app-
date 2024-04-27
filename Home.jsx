import React from 'react';
import Header from '../Components/Header';
import ExploreMenu from '../Components/ExploreMenu';
import FoodDisplay from '../Components/FoodDisplay';

const Home = () => {
    return (
        <div>
              <Header/>
           
              <ExploreMenu/>
              <FoodDisplay/>
        </div>
    );
}

export default Home;
