import React from 'react';

const PlayerName = (props) => {
  console.log(props.name)
  
    const {name, salary} = props.name;

    
    return (
       <div className="name">                  
            <h6>{name} </h6>  
            
       </div>         
      
    );
};

export default PlayerName;