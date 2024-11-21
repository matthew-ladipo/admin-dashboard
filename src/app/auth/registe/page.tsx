import { use } from "react";
import svg from "../../../../public/illustration-mockups.svg";

export default function Register() {
  return (
    <div className="h-full w-full">
      <div className="grid gap-8">
        <section id="back-div" className="flex items-center justify-between">
          <div className="border-transparent bg-white dark:bg-gray-900">
            <div className="pl-[100px]">
              <h1 className="text-3xl font-bold cursor-default dark:text-gray-300 text-gray-900">
                Sign Out
              </h1>
              <form action="#" method="post">
                <div className="w-full max-w-md py-5 bg-white rounded-lg font-mono">
                  <label className="block text-gray-700 text-sm font-bold">
                    EMAIL
                  </label>
                  <input
                    className="text-sm w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                    placeholder="Email"
                    type="text"
                    id="email-input"
                  />
                </div>
                <div className="w-full max-w-md py-5 bg-white rounded-lg font-mono">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Password
                  </label>
                  <input
                    className="text-sm w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                    placeholder="Password"
                    type="password"
                    id="password-input"
                  />
                </div>
                <div className="w-full max-w-md py-5 bg-white rounded-lg font-mono">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Confirm Password
                  </label>
                  <input
                    className="text-sm w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                    placeholder="Confirm Password"
                    type="password"
                    id="confirm-password-input"
                  />
                </div>
                <a
                  href="#"
                  className="text-blue-400 text-sm transition hover:underline"
                >
                  Forgot your password?
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
                <button
                  className="rounded-lg hover:scale-105 transition transform duration-300 shadow-lg"
                  aria-label="Sign in with Google"
                >
                  <img
                    className="w-6 h-6"
                    loading="lazy"
                    src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
                    alt="Google"
                  />
                </button>
                <button
                  className="rounded-lg hover:scale-105 transition transform duration-300 shadow-lg"
                  aria-label="Sign in with LinkedIn"
                >
                  <img
                    className="w-6 h-6"
                    loading="lazy"
                    src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/"
                    alt="LinkedIn"
                  />
                </button>
                <button
                  className="rounded-lg hover:scale-105 transition transform duration-300 shadow-lg"
                  aria-label="Sign in with GitHub"
                >
                  <img
                    className="w-6 h-6 dark:invert"
                    loading="lazy"
                    src="https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/"
                    alt="GitHub"
                  />
                </button>
                <button
                  className="rounded-lg hover:scale-105 transition transform duration-300 shadow-lg"
                  aria-label="Sign in with Facebook"
                >
                  <img
                    className="w-6 h-6"
                    loading="lazy"
                    src="https://ucarecdn.com/6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9/"
                    alt="Facebook"
                  />
                </button>
                <button
                  className="rounded-lg hover:scale-105 transition transform duration-300 shadow-lg"
                  aria-label="Sign in with Twitter"
                >
                  <img
                    className="w-6 h-6"
                    loading="lazy"
                    src="https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/"
                    alt="Twitter"
                  />
                </button>
                <button
                  className="rounded-lg hover:scale-105 transition transform duration-300 shadow-lg"
                  aria-label="Sign in with Apple"
                >
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
                  </a>{" "}
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
          </div>
          <div className="w-[50vw] bg-black">
            <div className="h-[877px] duration-500 group overflow-hidden relative rounded bg-neutral-800 text-neutral-50 p-4 flex flex-col justify-evenly">
              {/* Decorations */}
              <div className="absolute blur duration-500 group-hover:blur-none w-72 h-72 rounded-full group-hover:translate-x-12 group-hover:translate-y-12 bg-sky-900 right-1 -bottom-24"></div>
              <div className="absolute blur duration-500 group-hover:blur-none w-72 h-72 rounded-full group-hover:translate-x-12 group-hover:translate-y-12 bg-sky-900 left-1 -bottom-24"></div>
              <div className="absolute blur duration-500 group-hover:blur-none w-12 h-12 rounded-full group-hover:translate-x-12 group-hover:translate-y-2 bg-indigo-700 right-12 bottom-12"></div>
              <div className="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-indigo-800 left-12 top-1"></div>
              <div className="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-indigo-800 right-1 -top-12"></div>
              <div className="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-sky-700 rounded-full group-hover:-translate-x-12"></div>
              <div className="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-sky-700 rounded-full group-hover:translate-x-[200px]"></div>

              <div className="z-10 flex flex-col justify-evenly w-full h-full mb-[400px]">
                {/* Card Content */}
                <div className="container text-white z-[2] relative font-nunito flex flex-col gap-[0.5em]">
                  <div className="h-fit w-full">
                    <h1 className="card_heading text-[1.5em] tracking-[.2em]">
                      STEEL BALL RUN
                    </h1>
                    <p className="text-[1.2em]">By Hirohiko Araki</p>
                  </div>

                  <div className="flex justify-left items-center h-fit w-full">
                    <button className="text-black group-hover:bg-black group-hover:text-neutral-50 group-hover:rounded-full bg-white px-[2em] py-[0.5em] rounded-none font-mono tracking-[.2em] w-fit transition ease-in-out duration-500">
                      READ
                    </button>
                  </div>
                </div>
              </div>
              <img className="absolute right-1 top-12 z-0" src={svg} alt="" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
