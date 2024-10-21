import { PostType } from "../utils/types";

function Post(post: PostType) {
  const { image, description, location } = post;
  console.log(post);
  return (
    <div className="container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300">
      <img src={image} alt="" className="rounded-t-lg w-full" />
      <div className="p-6">
        <h1 className="md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900 ">
          {location}
        </h1>
        <p className="text-gray-700 my-2 hover-text-900 ">{description}</p>
      </div>
    </div>
  );
}

export default Post;
