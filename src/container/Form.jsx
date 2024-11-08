
import React, { useCallback, useState } from "react";

const Form = () =>{
   const[Number,setNumber]=useState(0)

   const Increse = () =>{
      setNumber(Number + 1)
   }
   const Decrse = () =>{
      setNumber(Number -1)
   }
   const Reset = () =>{
      setNumber("")
   }
   return(
        <section>
         <h1>Counter App</h1>
         <h1>{Number}</h1>
         <button onClick={Increse}>Increse</button>
         <button onClick={Decrse}>Decrese</button>
         <button onClick={Reset}>Reset</button>
        </section>
   )
}
export default Form;