import Link from 'next/link'
import React from 'react'

const ForgotPassword = () => {
  return (
   <div className="w-full h-full flex  justify-center items-center">
      <form className="shadow-md border border-neutral-100 p-10  my-20 w-[30%] flex flex-col justify-center items-center rounded-md"
      action="">
        <h2 className="text-3xl font-bold py-3">Forgot Password </h2>
        <p>Reset your account password</p>
       
        <div className="w-full max-w-md my-2">
          <label
            htmlFor="password"
            className="block mb-1 text-sm font-medium text-gray-700 py-1"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500"
          />
        </div>

        <button className="text-white bg-emerald-500 w-full rounded-md px-4 py-2 my-5 cursor-pointer font-semibold" type="submit">
          RESEND PASSWORD
        </button>

        <div className="flex gap-3 my-3">
            <p>Already have an account? </p>
            <Link href="/signup" className="text-blue-800 cursor-pointer">Return to Sign In</Link>
        </div>
      </form>
    </div>
  )
}

export default ForgotPassword
