import { JSX, useEffect, useState } from "react"
import { useContext } from "react"
import { AuthContext } from "../../Context/AuthContext"
import Api from "../../Services/api";


function Profile(): JSX.Element {
  const { user, setUser } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user])

  const handelSaveProfile = async () => {
    try {
      const res = await Api.put("/auth/update", {
        name,
        email,
      });

      // Update auth context
      setUser(res.data.user);

      setIsEditing(false);
    } catch (error: any) {
      alert(error.response?.data?.message || "Update failed");
    }
  };


  const handleCancel = () => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
    setIsEditing(false);
  };

  return (
    <div className="h-screen px-5 py-14 bg-blend-multiply">
      <h2 className="text-4xl font-mono ">Profile information</h2>
      {!isEditing ? (
        // Display user data
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-start gap-5 px-20 py-28">
            <div className="flex items-center gap-10">
              <p className="text-2xl text-emerald-900 font-mono">Full name :</p>
              <p className="text-2xl text-emerald-900 font-mono">{user?.name || "-"}</p>
            </div>
            <div className="flex items-center gap-10">
              <p className="text-2xl text-emerald-900 font-mono">Email :</p>
              <p className="text-2xl text-emerald-900 font-mono">{user?.email || "-"}</p>
            </div>
            <button onClick={() => setIsEditing(true)} className="bg-[#a43100] rounded text-white p-2 w-full mt-20 font-mono cursor-pointer">Edit My Information</button>
          </div>
        </div>
      ) :
        (
          <div className="flex justify-center items-center w-full">
            <div className="flex flex-col gap-5 px-20 py-28 w-full max-w-md">
              <div className="flex flex-col">
                <label htmlFor="fullName">Full name</label>
                <input
                  id="fullName"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border px-3 py-2 rounded-md"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border px-3 py-2 rounded-md"
                />
              </div>

              <div className="flex justify-evenly items-center gap-3">
                <button onClick={handelSaveProfile} className="bg-[#a43100] rounded text-white p-2 font-mono cursor-pointer w-full">Save</button>
                <button onClick={handleCancel} className="bg-[#a43100] rounded text-white p-2 font-mono cursor-pointer w-full">Cancel</button>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )

}

export default Profile