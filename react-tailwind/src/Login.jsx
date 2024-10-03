export default function Login() {
  return (
    <div className="bg-gray-100 ">
      <div className="flex justify-center items-center h-screen">
        <form className="shadow-md w-full max-w-md bg-white px-8 py-5 rounded-lg">
          <h1 className="text-2xl font-bold">Sign into your account</h1>
          <div className="flex flex-col mt-6">
            <label htmlFor="email" className="font-semibold">
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 rounded-lg mt-1 px-2 py-1 border border-gray-100 focus:border-gray-300 focus:outline-none"
              placeholder="name@company.com"
              required
            />
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="bg-gray-50 rounded-lg mt-1 px-2 py-1 border border-gray-100 focus:border-gray-300 focus:outline-none"
              placeholder="*******"
              required
            />
          </div>
          <div className="flex mt-5 justify-between">
            <div>
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className="size-4"
              />
              <label htmlFor="remember" className="ml-2 cursor-pointer">
                Remember me
              </label>
            </div>
            <a href="#">Forgot Password?</a>
          </div>
          <button className="bg-gray-600 w-full rounded-md py-1.5 text-white mt-5 hover:bg-gray-700">
            Sing in
          </button>
          <div className="mt-5">
            <span className="font-light">Don't have an account yet?</span>{" "}
            <span className="font-semibold">Sign up</span>
          </div>
        </form>
      </div>
    </div>
  );
}
