import React, { useContext, useState } from 'react'
import UserContext from './UserContext'

function Profile() {
    const [name, setName] = useState("asdfg")
    const context = useContext(UserContext)
    
    let changeProfile =()=>{
  context.setUsername(name)
    }
  return (
   <div className="container">
    <div className="row">
        <div className="col-lg-12">
            <label htmlFor="">Username</label>
            <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} name="name" id=""/>
            <button onClick={changeProfile} className="btn bt-sm btn-primary mt-2">Save</button>

        </div>
    </div>
   </div>
  )
}

export default Profile