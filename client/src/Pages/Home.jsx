import Footer from "../components/Footer"
import Navbar from '../components/Navbar';

function Home() {

  const mainStyle = {
    backgroundImage: `url('')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="bg-black text-white">
    <Navbar />
    <main className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-5xl font-bold mb-4">Connect Through Chain Connect</h1>
      <p className="text-xl mb-10">Talents at your fingertips</p>
      <div className="flex justify-center space-x-4 mb-10">
        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-white text-black rounded-2xl">
          Hire a Freelancer
        </button>
        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-white text-black rounded-full">
          Start Freelancing
        </button>
      </div>
      <h2 className="text-3xl font-bold mb-4">Browse our categories</h2>
      <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-white text-black rounded-lg">
        View All
      </button>
      <div className="mt-10 text-left">
        <h3 className="text-5xl font-bold">Access a worldwide</h3>
        <h3 className="text-5xl font-light">pool of exceptional talent</h3>
      </div>
      <div className="mt-10 text-center">
        <div className="mt-10 text-left">
          <h1 className="text-4xl font-bold mb-4">"Create the future."</h1>
        </div>
      </div>
      <div className="mt-10 text-left grid grid-cols-1 md:grid-cols-2 gap-8 w-1/2">
        <div>
          <h3 className="text-2xl font-bold mb-4">Post your job</h3>
          <p className="text-lg">
            It's free and easy! Get lots of competitive bids that suit your budget
            in minutes. Start making your dreams reality.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Choose freelancers</h3>
          <p className="text-lg">
            No job is too big or complex. We've got freelancers for jobs of any
            size or budget, across 2700+ skills. Let our talent bring your ideas
            to life.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Pay safely</h3>
          <p className="text-lg">
            Only pay for work when you are 100% satisfied with the outcome. Our
            milestone payment system protects you every step of the way.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">We're here to help</h3>
          <p className="text-lg">
            Your time is precious. Let our team of expert recruiters and co-pilots
            save you time finding talent, even managing your job if needed.
          </p>
        </div>
      </div>
      <div className="mt-10 text-left">
        <h1 className="text-4xl font-bold mb-4">Forge The Future</h1>
        <a className="text-lg text-gray-400 font-semibold underline" href="#">
          Get Started &gt;&gt;&gt; now
        </a>
        <div className="mt-10 text-right">
          <h3 className="text-5xl font-bold">Accomplish tasks across</h3>
          <h3 className="text-5xl font-light">2700+ categories effortlessly.</h3>
        </div>
      </div>
    </main>
    <Footer />
  </div>
  )
}

export default Home