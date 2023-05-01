
    

function  BotProfiles({data,handleAdd,added}){
    
    return(
        <ul>
            
            {data.map((data) => {
  return (
    <li key={data.id} >
      <img src={data.avatar_url} alt={data.name} />
      
      {data.name}
      {data.health}
      {data.damage}
      
      <button onClick={handleAdd}>Add Bot</button>
    </li>
  );
})}
    
             
        </ul>
    )

}

export default BotProfiles;