import { Link } from "react-router-dom";
const blogsItems = [
  { name: "blog-1", to: "/blogs/1" },
  { name: "blog-2", to: "/blogs/2" },
  { name: "blog-3", to: "/blogs/3" },
];
const Blogs = (props) => {
  return (
    <div>
      <h2>Blogs list</h2>
      {blogsItems.map((blog) => {
        return (
          <li key={blog.to}>
            <Link to={blog.to}>{blog.name}</Link>
          </li>
        );
      })}
    </div>
  );
};

export default Blogs;
