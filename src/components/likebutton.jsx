import { useState } from "react";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      className={`px-4 py-2 rounded ${liked ? "bg-red-500 text-white" : "bg-gray-300"}`}
    >
      {liked ? "Liked" : "Like"}
    </button>
  );
};

export default LikeButton;