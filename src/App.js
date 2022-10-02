import React,{useState} from "react"

const App=()=>{
    let [count, setCount]  = useState({gold:1,silver:2})
    
    console.log(count)
    let gold = count.gold
    let silver = count.silver

  function increaseGold(){
    setCount({gold : gold+1, silver : silver})
  }  
  function increaseSilver(){
    setCount({gold:gold,silver:silver+1})
  }  

return(
    <div>
        <h1>Gold:{gold} and Silver:{silver}</h1>
        <button onClick={increaseGold}>Increase Gold</button>
        <button onClick={increaseSilver}>Increase Silver</button>
        


    </div>
)
}
export default App