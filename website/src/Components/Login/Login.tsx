import { Link } from "react-router-dom"
import AuthHero from "../Auth/AuthHero"
import { JSX } from "react"
function Login() :JSX.Element {
  return (
    <div className="flex">
      <div>
        <AuthHero title="Nex is here" subtitle="For you" />
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

export default Login