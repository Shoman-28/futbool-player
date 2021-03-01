
import React, { useState, useEffect } from 'react';

import './App.css';
import Cart from './components/Cart/Cart';
import Player from './components/Player/Player'
import footbollPlayer from './fakedata.json';


function App() {

  const [players, setPlayer] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setPlayer(footbollPlayer);

  }, [])

  const handleAddplayer = (player) =>{
    console.log(player)
    const newCart = [...cart, player]
    setCart(newCart)
  }

  
  return (
    
      <div className="player-heder">
        <h1>Bersalona footboll Team</h1>        
        <h1>Team Mamber: {players.length}</h1>
        <h2>Added Mamber: {cart.length}</h2>        
        <Cart cart={cart}></Cart>        
         {
          players.map(ply => <Player player={ply} handleAddplayer={handleAddplayer}></Player>)
          
        }
      
  
      </div>
      

     
  );
}




export default App;
