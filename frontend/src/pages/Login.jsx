import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { FaEye, FaEyeSlash } from "react-icons/fa"

export default function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [show, setShow] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0519]">

    <div className="w-[420px] bg-[#110a20] border border-[#2b1f45] rounded-2xl p-8 shadow-2xl">

      {/* Logo */}
      <h1 className="text-pink-500 text-2xl font-bold text-center mb-6">
        SafeNest
      </h1>

      <h2 className="text-3xl font-semibold text-white text-center mb-1">
        Welcome back
      </h2>

      <p className="text-white text-center mb-8">
        Log in to your account
      </p>

      {/* Email */}
      <div className="mb-5">

        <label className="text-white text-sm">
          Email
        </label>

        <input
          type="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full mt-2 text-white bg-[#1a1230] border border-[#2a203c] rounded-lg px-4 py-3 outline-none focus:border-pink-500"
        />

      </div>

      {/* Password */}
      <div className="mb-6">

        <label className="text-white text-sm">
          Password
        </label>

        <div className="relative">

          <input
            type={show ? "text" : "password"}
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full mt-2 text-white bg-[#1a1230] border border-[#2a203c] rounded-lg px-4 py-3 outline-none focus:border-pink-500"
          />

          <button
            type="button"
            onClick={()=>setShow(!show)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
          >
            {show ? <FaEyeSlash/> : <FaEye/>}
          </button>

        </div>

      </div>

      {/* Login Button */}
      {/* <button className="w-full bg-pink-500 hover:bg-pink-600 transition font-semibold py-3 rounded-lg">
        Log In
      </button> */}
      <NavLink
       to="/profile"
       className="w-full bg-pink-500 hover:bg-pink-600 transition font-semibold py-3 rounded-lg"
      >
        Log In
      </NavLink>

      <p className="text-center text-white mt-6">
        Don't have an account?

        <Link
          to="/signup"
          className="text-pink-500 ml-1"
        >
          Sign up
        </Link>

      </p>

    </div>
    </div>

  )

}