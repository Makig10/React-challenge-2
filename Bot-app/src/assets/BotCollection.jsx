import BotProfiles from "./BotProfiles";
import YourBotArmy from "./YourBotArmy";
import { useState } from "react";
import { useEffect } from "react";

function BotCollection(){
    const botUrl=" http://localhost:3000/bots"
    const [data,setData]=useState([])
    const [added,setAdded]=useState([])
    const [releasedBots, setReleasedBots] = useState([]);
    

    useEffect(()=>{
        fetch(botUrl)
        .then((response)=>(response.json()))
        .then((data)=>{setData (data)})
    },[])
    
    const handleAdd= (data) => {
        setAdded([...added, data])
        console.log("Add button clicked")
      };

    const handleRelease = ({added}) => {
        let updatedAdded = added.filter((added) => added.id !== added.id);
        setBotArmy(updatedAdded);
        setReleasedBots([...releasedBots, added]);
        console.log ("Release button clicked")
      };

    
    const handleDischarge = () => {
        const botToDelete = added.find((added) => added.id === added.id);
        console.log("Discharge button clicked")
        
        fetch((botUrl), {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(botToDelete),
        })
          .then((response) => {
            if (response.ok) {
               updatedAdded = added.filter((added) => added.id !== added.id);
              setAdded(updatedAdded);
            } else {
              throw new Error('Failed to delete item from server');
            }
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
    


    return (
        <>
        <div>
        <BotProfiles handleAdd={handleAdd} data={data} added={added}/>
        </div>
        <div>
        <YourBotArmy added={added} handleRelease={handleRelease} handleDischarge={handleDischarge}/>
        </div>
        </>
    )

}
export default BotCollection;