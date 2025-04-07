import {useState} from 'react'

function Compter () {
const [compter , setCompter] = useState(0);

const handleIncrement = () =>{
setCompter (compter + 1) ;

}
const handleDecrement = () =>{
  setCompter (compter -1) ;
  
  }
  return(
    <div>
    <h1> {compter} </h1>
    <button onClick={handleIncrement} class="text" > increment </button><br></br>
    <button onClick={handleDecrement} > decrement </button>
    </div>
  )
}

export default Compter;