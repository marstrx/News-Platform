import { JSX, useState } from "react"
import { useContext } from "react"
import { AuthContext } from "../../Context/AuthContext"
import { log } from "node:console";

function Profile(): JSX.Element {
  const { user } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="h-screen px-5 py-14 bg-blend-multiply">
      <h2 className="text-4xl font-mono ">Profile information</h2>
      {!isEditing ? (
        // Display user data
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-start gap-5 px-20 py-28">
            <div className="flex items-center gap-10">
              <p className="text-2xl text-emerald-900 font-mono">Full name :</p>
              <p className="text-2xl text-emerald-900 font-mono">{user?.name}</p>
            </div>
            <div className="flex items-center gap-10">
              <p className="text-2xl text-emerald-900 font-mono">Email :</p>
              <p className="text-2xl text-emerald-900 font-mono">{user?.email}</p>
            </div>
            <button onClick={()=>setIsEditing(true)} className="bg-[#a43100] rounded text-white p-2 w-full mt-20 font-mono cursor-pointer">Edit My Information</button>
          </div>
        </div>
      ) :
        (<div>
          {/* Edit Mod */}

        </div>)
      }
    </div>
  )

}

export default Profile