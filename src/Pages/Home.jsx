import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="m-0 p-0  h-screen">
      <div className="text-white relative justify-center items-center">
        <Navbar></Navbar>
        <img
          className="w-screen h-screen "
          src="src/assets/home_bg.gif"
          alt=""
        />
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
          <h1 className="text-5xl font-bold font-[oswald] m-2">
            Connect Through Chain Connect
          </h1>
          <h1 className="text-2xl font-bold font-[oswald] m-2">
            Talents at your fingertips
          </h1>
        </div>
      </div>
      <div className="bg-gradient-to-b  from-black to-[#410061]"></div>
    </div>
  );
}

export default Home;
