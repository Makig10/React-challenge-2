/*Discharge a bot from their service forever, by clicking the red button marked
  "x", which would delete the bot both from the backend and from the
  `YourBotArmy` on the frontend. */

function YourBotArmy({added,handleRelease,handleDischarge}){
    
        
      const addedBot = added.map((added) => {
        return(
        <>
        <h2>Your Bot Army</h2>
        <li key={added.catchphrase}>
          <div>
          <img src={added.avatar_url}></img>
                    
                    {added.name}
                    {added.health}
                    {added.damage}
                    
                    
            
            <button onClick={handleRelease}>Release Bot</button>
            <button onClick={handleDischarge}>x</button>
          </div>
        </li>
        </>
        );})
      
    
    

}

export default YourBotArmy;