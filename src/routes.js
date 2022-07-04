import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import Profile from "./pages/Profile";

const routes = [
  { path: "/about-us", element: <AboutUs /> },
  { path: "/blogs/:blogId", element: <Blog /> },
  { path: "/blogs", element: <Blogs /> },
  { path: "/profile/*", element: <Profile /> },
  { path: "/", element: <HomePage /> },
  { path: "*", element: <NotFound /> },
];
export default routes;

//([A-z,a-z]+)
