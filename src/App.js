import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import LinksPage from "./components/LinksPage";
import PostsPage from "./components/PostsPage";
import DashboardPage from "./components/DashboardPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <NavBar />
      </>
      <Switch>
        <Route exact path="/" component={DashboardPage}></Route>
        <Route path="/links-page" component={LinksPage}></Route>
        <Route path="/posts-page" component={PostsPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
