import Link from "next/link";
import React from "react";

interface Props {
  // Define your component props here
}

const Page: React.FC<Props> = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl m-20">Sign in</h1>
      <div className="m-auto w-80 justify-center ">
        <label
          htmlFor="Username"
          className="m-5 h-10 relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
          <input
            type="text"
            id="Username"
            className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
            placeholder="Username"
          />

          <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
            Email
          </span>
        </label>

        <label
          htmlFor="Username"
          className="m-5 h-10 relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
          <input
            type="text"
            id="Username"
            className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
            placeholder="Username"
          />

          <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
            Password
          </span>
        </label>
      </div>
      <div>
        <p className="m-5">Don't have an account? <Link href="./signup">Sign up</Link></p>
        <a
          className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
          href="#"
        >
          Signup
        </a>
      </div>
    </div>
  );
};

export default Page;
