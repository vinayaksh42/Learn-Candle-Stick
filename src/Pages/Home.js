import React from "react";
import HomeHeader from "../Components/HomeHeader/HomeHeader";
import Board from '../Components/LeaderBoard/Board';
import '../Components/LeaderBoard/Board.css';

function Home() {
  return (
    <>
      <div className="homeheaderContainer">
        <HomeHeader />
      </div>
      <div className='boardContainer'>
        <Board />
      </div>
    </>
  );
}

export default Home;