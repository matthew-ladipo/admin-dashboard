export default function Login() {
  return (
    <>
      <div className="flex py-10 justify-center items-center h-full w-full">
        <div className="grid gap-8">
          <section
            id="back-div"
            className=" flex gap-20 items-center  border border-gray-300  "
          >
            <div className=" border-transparent px-10  bg-white dark:bg-gray-900">
              <h1 className="text-3xl font-bold text-center cursor-default py-5 dark:text-gray-300 text-gray-900">
                Log in
              </h1>
              <form action="#" method="post" className="space-y-6 py-5">
                <div>
                  <label className="block mb-2 text-lg dark:text-gray-300">
                    Email
                  </label>
                  <input
                    id="email"
                    className="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-lg dark:text-gray-300">
                    Password
                  </label>
                  <input
                    id="password"
                    className="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <a
                  href="#"
                  className="text-blue-400 text-sm transition hover:underline"
                >
                  Forget your password?
                </a>
                <button
                  className="w-full p-3 mt-4 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="submit"
                >
                  LOG IN
                </button>
              </form>
              <div className="flex flex-col mt-4 text-sm text-center dark:text-gray-300">
                <p>
                  Don't have an account?
                  <a
                    href="#"
                    className="text-blue-400 transition hover:underline"
                  >
                    Sign Up
                  </a>
                </p>
              </div>
              <div
                id="third-party-auth"
                className="flex justify-center gap-4 mt-5"
              >
                <button className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg">
                  <img
                    className="w-6 h-6"
                    loading="lazy"
                    src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
                    alt="Google"
                  />
                </button>
                <button className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg">
                  <img
                    className="w-6 h-6"
                    loading="lazy"
                    src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/"
                    alt="LinkedIn"
                  />
                </button>
                <button className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg">
                  <img
                    className="w-6 h-6 dark:invert"
                    loading="lazy"
                    src="https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/"
                    alt="GitHub"
                  />
                </button>
                <button className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg">
                  <img
                    className="w-6 h-6"
                    loading="lazy"
                    src="https://ucarecdn.com/6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9/"
                    alt="Facebook"
                  />
                </button>
                <button className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg">
                  <img
                    className="w-6 h-6"
                    loading="lazy"
                    src="https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/"
                    alt="Twitter"
                  />
                </button>
                <button className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg">
                  <img
                    className="w-6 h-6"
                    loading="lazy"
                    src="https://ucarecdn.com/3277d952-8e21-4aad-a2b7-d484dad531fb/"
                    alt="Apple"
                  />
                </button>
              </div>
              <div className="mt-4 text-center py-5 text-sm text-gray-500">
                <p>
                  By signing in, you agree to our
                  <a
                    href="#"
                    className="text-blue-400 transition hover:underline"
                  >
                    Terms
                  </a>
                  and
                  <a
                    href="#"
                    className="text-blue-400 transition hover:underline"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="mx-auto px-10 w-full max-w-xs relative flex flex-col items-center justify-center text-center overflow-visible">
              <h3 className="text-3xl font-bold">Get Started Now</h3>
              <div className="w-full relative flex flex-col items-center justify-center">
                <div className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm"></div>
                <div className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full"></div>
                <div className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-purple-400 to-transparent h-[5px] w-1/2 blur-sm"></div>
                <div className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-purple-400 to-transparent h-px w-1/2"></div>
                <div
                  
                  className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(50%_200px_at_top,transparent_20%,white)]"
                ></div>
              </div>
              <p className="mt-6 text-sm">
                Be part of millions people around the world using modern User
                Interfaces.
              </p>

              <span className="absolute -z-[1] backdrop-blur-sm inset-0 w-full h-full flex before:content-[''] before:h-3/4 before:w-full before:bg-gradient-to-r before:from-black before:to-purple-600 before:blur-[90px] after:content-[''] after:h-1/2 after:w-full after:bg-gradient-to-br after:from-cyan-400 after:to-sky-300 after:blur-[90px]"></span>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
