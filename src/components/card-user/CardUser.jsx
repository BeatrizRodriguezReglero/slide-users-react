import { useState } from "react"
import { USERS } from "../../constants/users"

const CardUser =()=>{
    const [user,setUser]=useState(0)
    const isDisablePrevious =user===0
    const isDisableNext= user===USERS.length-1
    return(

        <>
            <img src={USERS[user].profileImage} alt="" />
            <p>Name: {USERS[user].name}</p>
            <p>Username: {USERS[user].username}</p>
            <p>Email: {USERS[user].email}</p>
            <button  disabled = {isDisablePrevious} onClick={()=>setUser(user-1)}>Previous</button>
            <button disabled = {isDisableNext} onClick={()=>setUser(user+1)}>Next</button>
        </>
    )
}

export default CardUser