import { Link } from "react-router-dom"
function Login() {
  return (
    <div className="flex">
    <div>
      <h2>Nex is here</h2>
      <h2>for you</h2>
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