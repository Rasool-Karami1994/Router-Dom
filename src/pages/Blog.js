import { Link } from "react-router-dom";
const Blog = (props) => {
  console.log(props);
  const blogId = props.match.params.blogId;
  return (
    <>
      <h2>blog number {blogId}</h2>
      <Link to="/blogs">Blogs</Link>
    </>
  );
};

export default Blog;