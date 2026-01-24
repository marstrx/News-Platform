import { Link, useNavigate } from "react-router-dom";
import AuthHero from "../Auth/AuthHero";
import { JSX, useState } from "react";
import Api from "../../Services/api";
import * as React from "react";

function Login(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handelSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await Api.post("/auth/login", {
        email,
        password,
      });

      navigate("/");
    } catch (error: any) {
      console.log(error);
      setError(error.response?.data?.message || "Login failed");
    }
  };
  return (
    <div className="min-h-screen flex">
      <AuthHero title="Nex is here" subtitle="For you" />

      <div className="flex-1 flex flex-col justify-center items-center px-8">
        {/* Navigation Tabs */}
        <div className="flex gap-8 mb-12">
          <Link
            to="/register"
            className="text-gray-600 hover:text-gray-900 pb-2"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="text-gray-900 border-b-2 border-[#36656B] pb-2 font-medium"
          >
            Login
          </Link>
        </div>

        {/* Login Form */}
        <form onSubmit={handelSubmit} className="w-full max-w-md">
          <div className="flex flex-col gap-6 mb-6">
            <input
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:border-[#36656B]"
              type="text"
              placeholder="Username or email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:border-[#36656B]"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-4 mb-8">
            <button
              type="submit"
              className="bg-[#36656B] text-white py-3 rounded-lg font-medium hover:bg-[#2d5259] transition-colors"
            >
              Sign in
            </button>
            <Link
              to="/404"
              className="text-sm text-[#36656B] hover:underline text-center"
            >
              Forgot password?
            </Link>
          </div>

          {/* Social Login */}
          <div className="text-center">
            <p className="text-gray-600 mb-4">Or sign in with:</p>
            <div className="flex gap-4">
              <button
                type="button"
                className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                >
                  <g fill="none" fillRule="evenodd" clipRule="evenodd">
                    <path
                      fill="#F44336"
                      d="M7.209 1.061c.725-.081 1.154-.081 1.933 0a6.57 6.57 0 0 1 3.65 1.82a100 100 0 0 0-1.986 1.93q-1.876-1.59-4.188-.734q-1.696.78-2.362 2.528a78 78 0 0 1-2.148-1.658a.26.26 0 0 0-.16-.027q1.683-3.245 5.26-3.86"
                      opacity=".987"
                    />
                    <path
                      fill="#FFC107"
                      d="M1.946 4.92q.085-.013.161.027a78 78 0 0 0 2.148 1.658A7.6 7.6 0 0 0 4.04 7.99q.037.678.215 1.331L2 11.116Q.527 8.038 1.946 4.92"
                      opacity=".997"
                    />
                    <path
                      fill="#448AFF"
                      d="M12.685 13.29a26 26 0 0 0-2.202-1.74q1.15-.812 1.396-2.228H8.122V6.713q3.25-.027 6.497.055q.616 3.345-1.423 6.032a7 7 0 0 1-.51.49"
                      opacity=".999"
                    />
                    <path
                      fill="#43A047"
                      d="M4.255 9.322q1.23 3.057 4.51 2.854a3.94 3.94 0 0 0 1.718-.626q1.148.812 2.202 1.74a6.62 6.62 0 0 1-4.027 1.684a6.4 6.4 0 0 1-1.02 0Q3.82 14.524 2 11.116z"
                      opacity=".993"
                    />
                  </g>
                </svg>
                <span className="text-sm font-medium">Google</span>
              </button>

              <button
                type="button"
                className="flex-1 flex items-center justify-center gap-2 bg-[#1877F2] text-white py-3 rounded-lg hover:bg-[#166fe5] transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="#FFF"
                    d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.307 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.347-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.958 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
                  />
                </svg>
                <span className="text-sm font-medium">Facebook</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
