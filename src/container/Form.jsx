
import React, { useState } from 'react'

const Form = () => {

   const[UserName,setUserName]=useState(" ")

   const Username = (e) =>{
      setUserName(e.target.value)
   }


   const [NewUserDeatails,setNewUserDetails]=useState('')

   const Userdetails = () =>{
      setNewUserDetails(UserName)
   }

   const Reset = () =>{
      setNewUserDetails('')
   }

  return (
    <div className='Container'>  
      <h2>{NewUserDeatails}</h2>

      <input type="text" placeholder='Enter Details'  onChange={Username}/>
      <button onClick={Userdetails}>Submit</button>
      <button onClick={Reset}>Reset</button>

    </div>
  )
}

export default Form