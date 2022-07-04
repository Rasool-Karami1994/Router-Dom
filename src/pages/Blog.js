import { Link } from "react-router-dom";
// import queryString from "query-string";
import { useSearchParams, useParams } from "react-router-dom";
const Blog = () => {
  //useParams hook insted of match.params
  const params = useParams();
  const blogId = params.blogId;

  const [searchParams] = useSearchParams();
  console.log(params);
  // const query = queryString.parse(location.search);
  console.log(searchParams.get("sort"));
  return (
    <>
      <h2>
        blog number <span>{blogId}</span>
      </h2>
      <div className="blog-switcher-links">
        <Link to={`/blogs/${parseInt(blogId) + 1}`}>Go to the next blog!!</Link>
        <Link to={"/blogs"}>Go to Blogs page!</Link>
      </div>
    </>
  );
};

export default Blog;
