import Footer from "../components/Footer";

function About() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-4 bottom-0">
        <div className="pb-8 w-3/4 flex gap-10 mt-10">
          <div className="self-center mr-2">
            <p className="text-4xl font-bold text-pink-400 uppercase mb-5">About Us</p>
            <img
              src="/images/hero.webp"
              className="self-center rounded-md"
              alt="logo"  
            />
          </div>
          <div className="text-slate-200 bg-sky-950 p-10 rounded-lg text-xl bg-opacity-70"> 
            <p className="mt-4">Welcome to Travel Journal, the ultimate destination for travelers to share their journeys, inspire others, and relive their adventures through stunning visuals. Whether you’re exploring hidden gems, conquering breathtaking landscapes, or diving into vibrant cultures, we believe every journey deserves to be shared and celebrated.</p>

            <p className="mt-4">At Travel Journal, we are passionate about bringing together a community of explorers who love capturing the beauty of the world. Our platform allows you to post your travel photos, tell the stories behind them, and connect with like-minded travelers from around the globe.</p>

            <p className="mt-4">Join us to share your adventures, discover new destinations, and ignite your wanderlust. Let’s create a mosaic of experiences that celebrates the beauty and diversity of our world—one photo at a time.</p>

            <p className="mt-4">Happy travels,</p>
            <p className="mt-4">The Travel Journal Team</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
