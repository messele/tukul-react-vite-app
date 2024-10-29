
export default function Hero() {
  return (
      <div className="container flex flex-col m-auto px-2 my-10 min-h-64"
        style={{
          backgroundImage:"url('./software_development3.jpg')",
          backgroundBlendMode:"color-burn",
          backgroundRepeat:"no-repeat",
          backgroundSize:"100% auto",
          minHeight:"40rem"
        
        }}
      >
        <h2 className="text-4xl font-bold m-auto text-slate-900 p-4"
        style={{
            backdropFilter:"contrast(60%)"
        }}>
          Transforming Businesses with Custom Software Solutions
        </h2>
        <p className="text-2xl my-0 mx-auto text-slate-900  p-2"
        style={{
          backdropFilter:"blur(60px)"
      }}>
          Driving growth and innovation.
        </p>
        <a href="#contact"
          className="bg-white text-green-600 px-6 py-3 font-semibold m-auto rounded shadow-md hover:bg-gray-100 w-fit"
        >
          Get Started
        </a>
      </div>
  );
}
