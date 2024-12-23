import type { PostType } from "../utils/types";

function Post(post: PostType) {
  const { id, image, description, location, likes } = post;

  const isNotLiked = () => {
    const postId = id?.match(/\d/)?.[0] || "0";
    return Number.parseInt(postId) % 2 === 0;
  };
  return (
    <div className="container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300">
      <img
        src={image}
        alt={location}
        className="rounded-t-lg w-full"
        loading="lazy"
      />
      <div className="p-6">
        <h1 className="md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900">
          {location}
        </h1>
        <p className="text-gray-700 my-2 hover:text-gray-900 ">{description}</p>
        <div className="flex gap-1">
          
        {isNotLiked()
        // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
        ? <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
        // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
        : <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="red"
        className="size-6"
      >
        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
      </svg>
      }


          
          
          <p className="uppercase">{likes}</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
