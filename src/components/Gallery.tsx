import { useEffect, useState } from "react";
import Post from "./Post";
import type { PostType } from "../utils/types";

function Gallery() {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((json) => {
        setPosts(json);
      });
  }, []);

  return (
    <>
      <div className="bg-gray-100 min-h-screen py-32 px-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 xl-grid-cols-4 gap-y-10 gap-x-6 ">
          {posts.map((post) => (
            // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
            <Post id={post.id} image={post.image} location={post.location} description={post.description} likes={ post.likes} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Gallery;
