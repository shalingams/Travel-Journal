import Footer from "../components/Footer";

function Search() {
  const travelers = [
    {
      name: "Ella Thompson",
      image:
        "https://travel-journal-8jd.pages.dev/data/1.jpg",
      location: "Cape Town, South Africa",
      description:
        "Exploring new places fills my heart with joy. Every experience was unforgettable, and I can’t wait to share it with you!",
    },
    {
      name: "Liam Carter",
      image:
        "https://travel-journal-8jd.pages.dev/data/2.jpg",
      location: "Tokyo, Japan",
      description:
        "This trip was a dream come true. Every second felt magical, and I’d love to tell you all about it!",
    },
    {
      name: "Sophia Bennett",
      image:
        "https://travel-journal-8jd.pages.dev/data/3.jpg",
      location: "Barcelona, Spain",
      description:
        "Traveling opens up a world of wonder. I made memories to last a lifetime, and I’m excited to share them with you.",
    },
    {
      name: "Noah Mitchell",
      image:
        "https://travel-journal-8jd.pages.dev/data/4.jpg",
      location: "Sydney, Australia",
      description:
        "I’ve just returned from an incredible journey. Every moment was amazing, and I’m here to share my stories with you.",
    },
    {
      name: "Ava Collins",
      image:
        "https://travel-journal-8jd.pages.dev/data/5.jpg",
      location: "Reykjavik, Iceland",
      description:
        "Life is an adventure, and this trip was one for the books. I’m thrilled to share every detail with you all!",
    },
    {
      name: "Ethan Parker",
      image:
        "https://travel-journal-8jd.pages.dev/data/6.jpg",
      location: "Vancouver, Canada",
      description:
        "From breathtaking views to unforgettable experiences, this trip had it all. I can’t wait to tell you more!",
    },
    {
      name: "Mia Hudson",
      image:
        "https://travel-journal-8jd.pages.dev/data/7.jpg",
      location: "Santorini, Greece",
      description:
        "Traveling has never felt so magical. I cherished every moment and look forward to sharing my journey with you.",
    },
    {
      name: "Oliver Hayes",
      image:
        "https://travel-journal-8jd.pages.dev/data/8.jpg",
      location: "Buenos Aires, Argentina",
      description:
        "This was the adventure of a lifetime. The memories I made are priceless, and I’d love to share them with you!",
    },
  ];
  return (
    <>
    <div className="flex justify-center items-center min-h-screen flex-wrap gap-5 w-3/4 mx-auto mt-5 mb-10 pb-10">
      {travelers.map((traveler) => (
        // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
        <a href="/users/shalinga">
          <div className="max-w-[720px] mx-auto">
            <div className="relative grid h-[40rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
              <div className={`absolute inset-0 m-0 h-full w-full overflow-hidden bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none`} style={{ backgroundImage: `url(${traveler.image})` }}>
                {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/80 via-black/50 to-bg-black-10"></div>
              </div>
              <div className="relative p-6 px-6 py-14 md:px-12">
                <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                  {traveler.description}
                </h2>
                <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-pink-500">
                  {traveler.name}
                </h5>
                <p className="block mb-4 font-sans text-md antialiased font-semibold leading-snug tracking-normal text-purple-400">
                  {traveler.location}
                </p>
                <img
                  alt="Tania Andrew"
                  src="/images/1715110978434.jpg"
                  className="relative inline-block h-[74px] w-[74px] rounded-full border-2 border-pink-500 object-cover object-center"
                />
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
    <Footer />
    </>
  );
}

export default Search;
