import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import Footer from "../components/Footer";

function HomePage() {
  const cardVariants: Variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <>
      <div className="font-Overlock w-screen h-screen overflow-hidden relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:left-0 before:z-10 before:opacity-30">
        <img
          src="/images/hero.png"
          className="absolute top-0 left-0 min-h-full w-screen"
          alt=""
        />
        <div className="relative z-20 max-w-screen-lg mx-auto grid grid-cols-12 h-full items-center">
          <div className="col-span-6">
            <span className="uppercase text-white text-4xl font-Overlock mb-2 bg-gradient-to-r from-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
              WE ARE EXPERTS ♡ ̆
            </span>
            <h1 className="text-purple-500 font-Overlock text-6xl mb-8">
              Memories we made along the way
            </h1>
            <p className="text-white mb-10 text-xl">
              Share your memories with all of fellow tearers your friends and
              show case you travel to fellow tearers.
            </p>
            <Link
              to="/sign-up"
              className="mt-10 text-white uppercase bg-pink-500 bg-opacity-70 py-4 text-base font-light px-10 border border-white hover:bg-purple-500 hover:bg-opacity-70"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>

      <div className="py-12 relative overflow-hidden bg-pink-500 bg-opacity-40">
        <div className="grid grid-cols-2 max-w-screen-lg mx-auto">
          <div className="w-full flex flex-col items-end pr-16">
            <h2 className="text-purple-200 font-Overlock text-5xl max-w-xs text-right mb-12 mt-10 decoration-4">
              Travel tips
            </h2>
            <div className="h-full mt-auto overflow-hidden relative">
              <motion.img
                initial="offscreen"
                whileInView="onscreen"
                variants={cardVariants}
                src="/images/hot-air-balloon-7776800_1280.png"
                className="h-full w-full object-contain"
                alt=""
              />
            </div>
          </div>

          <div className="py-20 relative before:absolute before:h-full before:w-screen before:bg-sky-950 before:top-0 before:left-0  before:rounded-md">
            <div className="relative z-20 pl-12">
              <h2 className="text-[#f7d0b6] font-Overlock text-5xl leading-snug mb-10">
                Share your <br />
                experiences
              </h2>
              <p className="text-white text-2xl">
                Make copies of important documents. You never know when you
                might need a copy of your passport, driver's license or another
                form of identification.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 relative overflow-hidden bg-purple-500 bg-opacity-40">
        <div className="grid grid-cols-2 max-w-screen-lg mx-auto">
          <div className="py-20 relative before:absolute before:h-full before:w-screen before:bg-[#f7d0b6] before:top-0 before:right-0 before:rounded-md">
            <div className="relative z-20 pl-12">
              <h2 className="text-sky-950 font-Overlock text-5xl leading-snug mb-10">
                Contact "Mike"
                <br />
                from Bali
              </h2>
              <p className="text-sky-950 text-2xl">
                "Mike" is the man for the job. He help me when even I need help.
                From accommodation to transportation to locations to visit. He
                know every location and every one know him. <br />
                "You are in a good hand"
              </p>
              <button className="mt-10 text-white uppercase bg-pink-500 bg-opacity-70 py-4 text-base font-light px-10 border border-white hover:bg-purple-500 hover:bg-opacity-70">
                Talk to him
              </button>
            </div>
          </div>
          <div className="w-full flex flex-col pl-16">
            <h2 className="text-purple-200 font-Overlock text-5xl max-w-xs text-right mb-12 mt-10 decoration-4">
              Share your local contacts
            </h2>
            <div className="h-full mt-auto overflow-hidden relative">
              <motion.img
                initial="offscreen"
                whileInView="onscreen"
                variants={cardVariants}
                src="/images/girl-1459248_1280.png"
                className="h-full w-full object-contain"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 relative overflow-hidden">
        <div className="grid grid-cols-2 max-w-screen-lg mx-auto">
          <div className="w-full flex flex-col items-end pr-16">
            <h2 className="text-purple-200 font-Overlock text-5xl max-w-xs text-right mb-12 mt-10 decoration-4">
              Next month I'm traveling to...
            </h2>
            <div className="h-full mt-auto overflow-hidden relative">
            <motion.img
                initial="offscreen"
                whileInView="onscreen"
                variants={cardVariants}
                src="/images/ai-generated-8131428_1280.png"
                className="h-full w-full object-contain"
                alt=""
              />
            </div>
          </div>

          <div className="py-20 bg-slate-100 relative before:absolute before:h-full before:w-screen before:bg-sky-950 before:top-0 before:left-0">
            <div className="relative z-20 pl-12">
              <h2 className="text-[#f7d0b6] font-Overlock text-5xl leading-snug mb-10">
                Tell about your travel plans
              </h2>
              <p className="text-white text-sm">
                Share your travel plan and find fellow travelers to meet on your
                way to you destination. It always memories that keep the dream a
                live.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
