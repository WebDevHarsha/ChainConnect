import { useState } from "react";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex  items-center justify-between opacity-90   z-20  fixed  w-screen bg-white border-gray-400 p-4 px-6 ">
      <a className="flex items-center" href="/">
        <img
          className="h-[75px] p-0 m-0 rounded-full"
          src="src/assets/logo3.jpeg"
          alt="logo"
        />
        <h3 className="font-bold text-2xl p-2 text-black">CHAIN⫘⫘CONNECT</h3>
      </a>

      {/* mobile navbar */}
      <nav>
        <section className="flex lg:hidden">
          <div
            className=" space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col text-black items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/about">Hire Freelancer</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/portfolio">Post a job</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/contact">Browse jobs</a>
              </li>
              <li>
              <a href="/signup">
            <button className="border-2 border-light-purple px-4 py-1.5 rounded-lg bg-dark-purple text-white hover:ring-2 hover:ring-dark-purple hover:ring-offset-2 transition-all duration-300">
                Sign Up
            </button>
            </a>
          </li>
          <li className="mt-4">
          <a href="/">
            <button className="border-2 border-light-purple px-4 py-1.5 rounded-lg bg-dark-purple text-white hover:ring-2 hover:ring-dark-purple hover:ring-offset-2 transition-all duration-300">
                Login
            </button>
            </a>
              </li>
            </ul>
          </div>
        </section>

        {/* desktop navbar */}

        <ul className="items center hidden text-xl space-x-8 text-black lg:flex">
          <li className="mt-2">
            <a href="/about">Hire Freelancer</a>
          </li>
          <li className="mt-2">
            <a href="/portfolio">Post a job</a>
          </li>
          <li className="mt-2">
            <a href="/contact">Browse jobs</a>
          </li>
          <li>
            <a href="/signup">
            <button className="border-2 border-light-purple px-4 py-1.5 rounded-lg bg-dark-purple text-white hover:ring-2 hover:ring-dark-purple hover:ring-offset-2 transition-all duration-300">
                Sign Up
            </button>
            </a>
          </li>
          <li >
          <a href="/">
            <button className="border-2  border-light-purple px-4 py-1.5 rounded-lg bg-dark-purple text-white hover:ring-2 hover:ring-dark-purple hover:ring-offset-2 transition-all duration-300">
                Login
            </button>
            </a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}