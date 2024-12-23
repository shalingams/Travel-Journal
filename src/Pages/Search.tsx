function Search() {
  const travelers = [
    {
      name: "John Doe",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
      location: "New York, USA",
      description:
        "I had the best time of my life. I loved every moment of it. I want to share my travel stories with you all.",
    },
    {
      name: "Jane Doe",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
      location: "New York, USA",
      description:
        "I had the best time of my life. I loved every moment of it. I want to share my travel stories with you all.",
    },
    {
      name: "John Doe",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
      location: "New York, USA",
      description:
        "I had the best time of my life. I loved every moment of it. I want to share my travel stories with you all.",
    },
    {
      name: "Jane Doe",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
      location: "New York, USA",
      description:
        "I had the best time of my life. I loved every moment of it. I want to share my travel stories with you all.",
    },
    {
      name: "John Doe",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
      location: "New York, USA",
      description:
        "I had the best time of my life. I loved every moment of it. I want to share my travel stories with you all.",
    },
    {
      name: "Jane Doe",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
      location: "New York, USA",
      description:
        "I had the best time of my life. I loved every moment of it. I want to share my travel stories with you all.",
    },
    {
      name: "John Doe",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
      location: "New York, USA",
      description:
        "I had the best time of my life. I loved every moment of it. I want to share my travel stories with you all.",
    },
    {
      name: "Jane Doe",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
      location: "New York, USA",
      description:
        "I had the best time of my life. I loved every moment of it. I want to share my travel stories with you all.",
    },
  ];
  return (
    <div className="flex justify-center items-center min-h-screen flex-wrap gap-5 w-3/4 mx-auto mt-5 mb-10">
      {travelers.map((traveler) => (
        <a href="/users/shalinga">
          <div className="max-w-[720px] mx-auto">
            <div className="relative grid h-[40rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
              <div className="absolute inset-0 m-0 h-full w-full overflow-hidden bg-transparent bg-[url('https://travel-journal-8jd.pages.dev/data/3.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/80 via-black/50 to-bg-black-10"></div>
              </div>
              <div className="relative p-6 px-6 py-14 md:px-12">
                <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                  {traveler.description}
                </h2>
                <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
                  {traveler.name}
                </h5>
                <img
                  alt="Tania Andrew"
                  src="/images/1715110978434.jpg"
                  className="relative inline-block h-[74px] w-[74px] rounded-full border-2 border-white object-cover object-center"
                />
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Search;
