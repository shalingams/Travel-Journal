import { Link, useParams } from "react-router-dom";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
function Profile() {
  let { username } = useParams();
  let publicProfile = true;

  if (!username) {
    username = window.localStorage.getItem("tj-username") || undefined;
    publicProfile = false;
  }
  const fullName = window.localStorage.getItem("tj-fileName");

  return (
    <>
      <div className="pb-8 bg-sky-950 bg-opacity-70">
        <div className="w-full h-64 bg-transparent bg-cover bg-clip-border bg-center">
          <img src="/images/banner.webp" alt="" className="w-full h-64 object-cover overflow-hidden" />
        </div>
        <div className="flex flex-col items-center -mt-20">
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            src="/images/1715110978434.jpg"
            className="w-40 border-4 border-pink-500 rounded-full"
            alt="profile"
            loading="lazy"
          />
          <div className="flex items-center space-x-2 mt-2">
            <p className="text-2xl uppercase text-purple-200 font-Overlock">{fullName}</p>
            <span className="bg-blue-500 rounded-full p-1" title="Verified">
              {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-100 h-2.5 w-2.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="4"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </span>
          </div>
          <p className="text-md text-purple-200 font-Overlock uppercase decoration-4">{username}</p>
        </div>
        <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
          {publicProfile ? (
            <div className="flex items-center space-x-4 mt-2">
              {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
              <button className="flex items-center uppercase bg-purple-400 bg-opacity-70 border border-white hover:bg-pink-400 hover:bg-opacity-70 text-black px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
                  <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                </svg>
                <span>Connect</span>
              </button>
              {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
              <button className="flex items-center uppercase bg-purple-400 bg-opacity-70 border border-white hover:bg-pink-400 hover:bg-opacity-70 text-black px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
                  <path
                    fill-rule="evenodd"
                    d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Message</span>
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-4 mt-2">
              
              <Link to={"/posts/new"} className="flex items-center uppercase bg-purple-400 bg-opacity-70 border border-white hover:bg-pink-400 hover:bg-opacity-70 text-black px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                <svg
                  className="w-6 h-6 text-black dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"
                  />
                  <path
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>

                <span>New Post</span>
              </Link>
              {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
              <button className="flex items-center uppercase bg-purple-400 bg-opacity-70 border border-white hover:bg-pink-400 hover:bg-opacity-70 text-black px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                <svg
                  className="w-6 h-6 text-black dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h1m4-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm7.441 1.559a1.907 1.907 0 0 1 0 2.698l-6.069 6.069L10 19l.674-3.372 6.07-6.07a1.907 1.907 0 0 1 2.697 0Z"
                  />
                </svg>

                <span>Edit Profile</span>
              </button>
            </div>
          )}
        </div>
      </div>
      <Gallery />
      <Footer />
    </>
  );
}

export default Profile;
