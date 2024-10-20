import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div className="w-screen h-screen overflow-hidden relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:left-0 before:z-10 before:opacity-30">
        <img
          src="/images/hero.png"
          className="absolute top-0 left-0 min-h-full w-screen"
          alt=""
        />
        <div className="relative z-20 max-w-screen-lg mx-auto grid grid-cols-12 h-full items-center">
          <div className="col-span-6">
            <span className="uppercase text-white text-xs font-bold mb-2 block">
              WE ARE EXPERTS
            </span>
            <h1 className="text-white font-extrabold text-5xl mb-8">
              Memories we made along the way
            </h1>
            <p className="text-stone-100 text-base mb-10">
              Share your memories with all of fellow tearersyour friends and
              show case you travel to fellow tearers.
            </p>
            <Link
              to="/sign-up"
              className="mt-10 text-white uppercase py-4 text-base font-light px-10 border border-white hover:bg-white hover:bg-opacity-10"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>

      <div className="py-12 relative overflow-hidden bg-white">
        <div className="grid grid-cols-2 max-w-screen-lg mx-auto">
          <div className="w-full flex flex-col items-end pr-16">
            <h2 className="text-[#64618C] font-bold text-2xl max-w-xs text-right mb-12 mt-10">
              Travel tips
            </h2>
            <div className="h-full mt-auto overflow-hidden relative">
              <img
                src="/images/hot-air-balloon-7776800_1280.png"
                className="h-full w-full object-contain"
                alt=""
              />
            </div>
          </div>

          <div className="py-20 bg-slate-100 relative before:absolute before:h-full before:w-screen before:bg-sky-950 before:top-0 before:left-0">
            <div className="relative z-20 pl-12">
              <h2 className="text-[#f7d0b6] font-black text-5xl leading-snug mb-10">
                Share your <br />
                experiences
              </h2>
              <p className="text-white text-sm">
                Make copies of important documents. You never know when you
                might need a copy of your passport, driver's license or another
                form of identification.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 relative overflow-hidden bg-white">
        <div className="grid grid-cols-2 max-w-screen-lg mx-auto">
          <div className="py-20 bg-slate-100 relative before:absolute before:h-full before:w-screen before:bg-[#f7d0b6] before:top-0 before:right-0">
            <div className="relative z-20 pl-12">
              <h2 className="text-sky-950 font-black text-5xl leading-snug mb-10">
                Contact "Mike"
                <br />
                from Bali
              </h2>
              <p className="text-sky-950 text-sm">
                "Mike" is the man for the job. He help me when even I need help.
                From accommodation to transportation to locations to visit. He
                know every location and every one know him. <br />
                "You are in a good hand"
              </p>
              <button className="mt-8 text-sky-950 uppercase py-3 text-sm px-10 border border-sky-950 hover:bg-white hover:bg-opacity-10">
                Talk to him
              </button>
            </div>
          </div>
          <div className="w-full flex flex-col pl-16">
            <h2 className="text-[#64618C] font-bold text-2xl max-w-xs text-left mb-12 mt-10">
              Share your local contacts
            </h2>
            <div className="h-full mt-auto overflow-hidden relative">
              <img
                src="/images/girl-1459248_1280.png"
                className="h-full w-full object-contain"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 relative overflow-hidden bg-white">
        <div className="grid grid-cols-2 max-w-screen-lg mx-auto">
          <div className="w-full flex flex-col items-end pr-16">
            <h2 className="text-[#64618C] font-bold text-2xl max-w-xs text-right mb-12 mt-10">
              Next month I'm traveling to...
            </h2>
            <div className="h-full mt-auto overflow-hidden relative">
              <img
                src="/images/ai-generated-8131428_1280.png"
                className="h-full w-full object-contain"
                alt=""
              />
            </div>
          </div>

          <div className="py-20 bg-slate-100 relative before:absolute before:h-full before:w-screen before:bg-sky-950 before:top-0 before:left-0">
            <div className="relative z-20 pl-12">
              <h2 className="text-[#f7d0b6] font-black text-5xl leading-snug mb-10">
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
    </>
  );
}

export default HomePage;
