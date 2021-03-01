import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './Player.css';

const Player = (props) => {
    const {name, club, image, salary} = props.player;
    const handleAddplayer = props.handleAddplayer;

    return (
        
        <div className='players-deteles'>        
            <h4>Player name: {name}</h4>
            <h5>Club name: {club}</h5>       
            <p><small>salary: {salary}</small></p>
            <img src={image} alt=""/>
            <br/>
            <Button variant="info" onClick={() => handleAddplayer(props.player)}><FontAwesomeIcon icon={faFutbol} />  Add Country</Button>{' '}           
                       
          
        </div>
    );
};

export default Player;
