import { createContext, useState } from "react";

let UserContext = createContext()

export const UserProvider = ({children})=>{
    let [username, setUsername] = useState("Maha");
     return(
        <UserContext.Provider value={{username, setUsername}}>
            {children}
        </UserContext.Provider>

     )
}





export default UserContext;