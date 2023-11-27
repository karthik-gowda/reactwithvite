import React from "react";

function Login() {
  return (
    <>
      <div className="flex h-screen justify-center items-center  bg-gray-50">
        <div className="innerContainer sm:min-w-[400px]  min-w-[300px] bg-white h-[300px]">
          <div className="heading flex justify-center m-2 text-lg font-bold">Login</div>
          <form
            className="p-2"
            action=""
            method="post"
          >
            <div className="inputGroup flex flex-col items-center gap-4 justify-center">
              <input
                className="outline-none block w-4/5 rounded-full border-0 py-2 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                type="email"
                name="email"
                id="emailId"
                placeholder="Enter your email address"
              />
              <input
                className="outline-none block w-4/5 rounded-full border-0 py-2 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>

            <div className=" flex justify-end mr-12 mt-2 text-blue-400 cursor-pointer">Forget Password?</div>

            <div className="btn flex justify-center w-full">
              <button
                type="submit"
                className="w-4/5 text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-sm px-4 lg:px-5 py-2 mt-8 lg:py-2.5 focus:outline-none"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
