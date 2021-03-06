import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import routes from "./routes";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {routes.map((route, index) => (
            <Route {...route} key={index} />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
