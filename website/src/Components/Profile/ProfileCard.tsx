import { JSX, useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../Context/AuthContext";

function ProfileCard(): JSX.Element {
    const { logout } = useContext(AuthContext);
    return (
        <div className="flex flex-col items-end">
            <div className="absolute bg-[#132440] text-[#FDB5CE] w-52 p-4 text-lg font-mono rounded-bl-md">
                <div>
                    <Link to={"/profile"}>Profile</Link>
                </div>
                <div>
                    <button className="hover:underline" onClick={logout}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard