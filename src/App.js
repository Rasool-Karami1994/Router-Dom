import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./layout/Layout";
import routes from "./routes";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {routes.map((route) => (
            <Route {...route} />
          ))}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
