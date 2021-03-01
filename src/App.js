
import React, { useState, useEffect } from 'react';

import './App.css';
import Cart from './components/Cart/Cart';
import Player from './components/Player/Player'
import PlayerName from './components/PlayerName/PlarName'
import footbollPlayer from './fakedata.json';


function App() {

  const [players, setPlayer] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setPlayer(footbollPlayer);

  }, [])

  const handleAddplayer = (player) =>{
  
    const newCart = [...cart, player]
    setCart(newCart)
  }


  return (
    <div className="player-heder">
      <h1>Bersalona footboll Team</h1>        
      <h1>Team Mamber: {players.length}</h1>
      
      <div className="players">
        <div className="left-Content">                  
          {
            players.map(ply => <Player  player={ply} handleAddplayer={handleAddplayer}></Player>)
            
          }     
        </div>
        <div className="right-content">
          <h3>Total Selected Player: {cart.length}</h3>
          
          {          
            cart.map((x)=> <PlayerName  name={x}></PlayerName>)       
          } 
          <Cart cart={cart}></Cart>
        </div>
      </div>        
    </div>  
     
  );
}




export default App;
