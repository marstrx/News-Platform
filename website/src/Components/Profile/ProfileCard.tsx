import { JSX, useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../Context/AuthContext";

function ProfileCard(): JSX.Element {
    const { logout } = useContext(AuthContext);
    return (
        <div className="flex">
            <Link to={"/profile"}>Profile</Link>
            <button className="hover:underline" onClick={logout}>Logout</button>
        </div>
    )
}

export default ProfileCard