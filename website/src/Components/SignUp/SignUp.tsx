import { JSX } from "react"
import { Link } from "react-router-dom"
import AuthHero from "../Auth/AuthHero"

function SignUp(): JSX.Element {
    return (
        <div className="flex">
            <div>
                <AuthHero title="Join Nex" subtitle="Create your account" />
            </div>
            <div>
                <div>
                    <Link to={"/register"}>Register</Link>
                    <Link to={"/login"}>Login</Link>
                </div>
            </div>
        </div>
    )
}

export default SignUp