import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";


function App() {
  const sections = [Hero, Services, Portfolio, Testimonial, Contact];

  return (
    <div className="bg-gray-100 text-gray-900 max-w-[60vw] m-auto">
      <Header />
      {sections.map((Section) => (
        <section>
          <Section />
        </section>
      ))}
      <Footer />
    </div>
  );
}

export default App;
