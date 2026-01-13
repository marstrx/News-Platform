import { JSX } from "react"
import { useContext } from "react"
import { AuthContext } from "../../Context/AuthContext"
import { log } from "node:console";

function Profile() :JSX.Element {
  const {user} = useContext(AuthContext);
  console.log(user?.name);
  console.log(user?.email);
  
  return (
    <div>
    </div>
  )
}

export default Profile