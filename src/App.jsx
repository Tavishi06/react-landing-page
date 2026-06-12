import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Offer from "./components/Offer";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import IntroSection from "./components/IntroSection";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";
import FinalSection from "./components/FinalSection";

function App() {
  return (
    <>
      <Navbar />
      <IntroSection />

      <section className="max-w-6xl mx-auto py-20 px-6">

  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

    <div className="backdrop-blur-md bg-white/50 border rounded-3xl p-8 text-center">
      <h2 className="text-4xl font-bold text-purple-600">500+</h2>
      <p>Projects</p>
    </div>

    <div className="backdrop-blur-md bg-white/50 border rounded-3xl p-8 text-center">
      <h2 className="text-4xl font-bold text-pink-600">200+</h2>
      <p>Clients</p>
    </div>

    <div className="backdrop-blur-md bg-white/50 border rounded-3xl p-8 text-center">
      <h2 className="text-4xl font-bold text-orange-600">98%</h2>
      <p>Satisfaction</p>
    </div>

    <div className="backdrop-blur-md bg-white/50 border rounded-3xl p-8 text-center">
      <h2 className="text-4xl font-bold text-blue-600">10+</h2>
      <p>Years</p>
    </div>

  </div>

</section>

      <Hero />
      <div className="flex justify-center py-12">
  <div className="w-40 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
</div>

      <LeftSection />
      <div className="flex justify-center py-12">
  <div className="w-40 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
</div>

      <RightSection />
      <div className="flex justify-center py-12">
  <div className="w-40 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
</div>

      <FinalSection />
      <div className="flex justify-center py-12">
  <div className="w-40 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
</div>

      <Footer />
    </>
  );
}

export default App;