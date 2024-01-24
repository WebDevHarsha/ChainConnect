import Footer from "../components/Footer"
import Navbar from '../components/Navbar';
import { reviews } from "../components/Carousel/components/data";
import ReviewCard from "../components/Carousel/components/ReviewCard";

function Home() {

  const mainStyle = {
    backgroundImage:`url('src/assets/bg-gif.gif')`,
    backgroundSize: '5x1',
    backgroundPosition: 'center',
  };

  return (
    <div className="bg-black text-white">
    <Navbar />
    <main className="container mx-auto px-4 py-20 text-center " style={mainStyle}>
      <h1 className="text-5xl font-bold mb-4">Connect Through Chain Connect</h1>
      <p className="text-xl mb-10">Talents at your fingertips</p>
      <div className="flex justify-center space-x-4 mb-10">
        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-green-600 h-10 px-4 py-2 bg-white text-black rounded-full">
          Hire a Freelancer
        </button>
        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-green-600 h-10 px-4 py-2 bg-white text-black rounded-full">
          Start Freelancing
        </button>
      </div>
      <div className="mt-10 text-left">
        <h3 className="text-5xl font-bold">Access a worldwide</h3>
        <h3 className="text-5xl font-light">Pool of exceptional talent</h3>
      </div>
      <div className="mt-10 text-center">
        <div className="mt-10 text-left">
          <h1 className="text-4xl font-bold mb-4">"Create the future."</h1>
        </div>
      </div>
      <div className="flex justify-between items-center">
      <div className="mt-10 text-left grid grid-cols-1  md:grid-cols-2 gap-8 w-1/2">
        <div className="bg-gray-300 bg-opacity-25 rounded-2xl p-4 hover:scale-110 transition-all duration-100 ease-in-out">
          <h3 className="text-2xl font-bold mb-4">Publish your job opportunity</h3>
          <p className="text-lg">
          Experience a cost-free and straightforward process! Receive numerous competitive proposals tailored to your budget within minutes. Begin turning your dreams into reality
          </p>
        </div>
        <div className="bg-gray-300 bg-opacity-25 rounded-2xl p-4 hover:scale-110 transition-all duration-100 ease-in-out">
          <h3 className="text-2xl font-bold mb-4">Select skilled professionals</h3>
          <p className="text-lg">
          No task is too large or intricate. Our freelancers cover a wide range of skills, accommodating projects of any size or budget. Let our talented individuals breathe life into your ideas
          </p>
        </div>
        <div className="bg-gray-300 bg-opacity-25 rounded-2xl p-4 hover:scale-110 transition-all duration-100 ease-in-out">
          <h3 className="text-2xl font-bold mb-4">Ensure secure payments</h3>
          <p className="text-lg">
            Embrace Web 3.0 and blockchain tech. Pay securely, only when 100% satisfied. Our milestone system ensures protection every step, aligning with the decentralized future
          </p>
        </div>
        <div className="bg-gray-300 bg-opacity-25 rounded-2xl p-4 hover:scale-110 transition-all duration-100 ease-in-out">
          <h3 className="text-2xl font-bold mb-4">We stand ready to assist you</h3>
          <p className="text-lg">
          Maximize your time's value with our team of skilled recruiters and co-pilots, streamlining talent discovery and even managing your projects when necessary
          </p>
        </div>
      </div>
      <div className="w-1/2">
        <img src="src/assets/bg-category.jpg" alt="" />
      </div>
      </div>
      <div className="mt-10 text-left">
        <h1 className="text-4xl font-bold mb-4">Forge The Future</h1>
        <a className="text-lg text-gray-400 font-semibold hover:font-bold underline" href="#">
          Get Started now &gt;&gt;&gt;
        </a>
        <div className="mt-10 text-left">
          <h3 className="text-5xl font-bold">Effortlessly accomplish tasks</h3>
          <h3 className="text-5xl font-light">Across a diverse range of categories</h3>
        </div>
        <div className="flex justify-between">
          <div className="mt-10 text-left grid grid-cols-1 md:grid-cols-2 gap-8 w-1/2">
          <div className="bg-gray-300 bg-opacity-25 rounded-2xl p-4 hover:scale-110 transition-all duration-100 ease-in-out">
            <h3 className="text-2xl font-bold mb-4">Transparent Earnings with Smart Contracts</h3>
            <p className="text-lg">
            Ensure secure and predictable payments through our smart contract system powered by Solidity. Experience financial stability with clearly defined payment milestones.

            </p>
          </div>
          <div className="bg-gray-300 bg-opacity-25 rounded-2xl p-4 hover:scale-110 transition-all duration-100 ease-in-out">
            <h3 className="text-2xl font-bold mb-4">Direct Connect, Better Projects:</h3>
            <p className="text-lg">
            Communicate directly with employers to understand project intricacies. Forge meaningful relationships and shape your freelance career with seamless, peer-to-peer interactions.

            </p>
          </div>
          <div className="bg-gray-300 bg-opacity-25 rounded-2xl p-4 hover:scale-110 transition-all duration-100 ease-in-out">
            <h3 className="text-2xl font-bold mb-4">Global Opportunities at Your Fingertips

</h3>
            <p className="text-lg">
            Access a world of freelance opportunities on our decentralized platform. Connect with employers globally, diversify your portfolio, and expand your professional horizons

            </p>
          </div>
          <div className="bg-gray-300 bg-opacity-25 rounded-2xl p-4 hover:scale-110 transition-all duration-100 ease-in-out">
            <h3 className="text-2xl font-bold mb-4">Fair Compensation in a Trustworthy Space</h3>
            <p className="text-lg">
            Trust in a platform designed for fairness. Benefit from our commitment to cryptocurrency transactions, cryptographic trust, and a minimal 5% service charge, ensuring a reliable and secure freelancing ecosystem.
            </p>
          </div>
          </div>
          <div className="w-1/2">
            <img className="" src="src/assets/secondassetimage.jpg" alt="" />
          </div>
        </div>
        <h2 className="text-4xl mt-10 font-bold mb-4 flex justify-center items-center">Reviews</h2>
      <div className="grid grid-cols-3 gap-6">
      {
          reviews.map((review, index) => (
            <ReviewCard desc={review.desc} first={review.first} last={review.last} key={index} />
          ))
        }
      </div>
      </div>  
      <div className="dark  bg-gray-900 text-white" style={mainStyle}>
  <header className="flex justify-center py-8">
    <h1 className="text-4xl font-bold">Choose Your Plan</h1>
  </header>
  <main className="flex flex-col items-center justify-center h-full gap-8 p-4 md:flex-row md:gap-16">
    <div className="flex flex-col bg-gray-800 rounded-lg shadow-lg w-full max-w-md p-6 space-y-4">
      <h2 className="text-2xl font-bold">Free Plan</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Access to basic features</li>
        <li>24/7 customer support</li>
        <li>Decentralized Advertisements</li>
      </ul>
      <div className="flex flex-col items-center space-y-2">
        <span className="text-4xl font-bold">$0/month</span>
        <a
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-700 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-500"
          href="#"
        >
          Ditch the basics, Go Fremium
        </a>
      </div>
    </div>
    <div className="flex flex-col bg-gray-800 rounded-lg shadow-lg w-full max-w-md p-6 space-y-4">
      <h2 className="text-2xl font-bold">Fremium Plan</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Access to all premium features</li>
        <li>More Exposure Towards Client</li>
        <li>Free Credits Every Week</li>
      </ul>
      <div className="flex flex-col items-center space-y-2">
        <span className="text-4xl font-bold">$15/month</span>
        <a
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-700 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-500"
          href="#"
        >
          Start Your Free Trial Now
        </a>
      </div>
    </div>
  </main>
</div>
    </main>
    <Footer />
  </div>
  )
}

export default Home