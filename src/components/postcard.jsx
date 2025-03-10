import PropTypes from "prop-types";
import LikeButton from "./likebutton";

const PostCard = ({ post }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md flex gap-4 items-center bg-white hover:shadow-lg transition-shadow duration-300">
      <img src={post.profilePic} alt="Profile" className="w-12 h-12 rounded-full border-2 border-gray-300" />
      <div>
        <h3 className="font-bold text-lg text-gray-800">{post.username}</h3>
        <p className="text-gray-600">{post.content}</p>
        <LikeButton />
      </div>
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    profilePic: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostCard;
