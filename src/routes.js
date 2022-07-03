import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import Posts from "./pages/Posts";

const routes = [
  { path: "/about-us", component: AboutUs },
  { path: "/blogs/:blogId", component: Blog },
  { path: "/blogs", component: Blogs },
  { path: "/posts/:id?([0-9]+)", component: Posts },
  { path: "/", exact: true, component: HomePage },
  { component: NotFound },
];
export default routes;

//([A-z,a-z]+)
