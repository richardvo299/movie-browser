import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieDetailPage from "./pages/MovieDetailPage";
import NowPlayingPage from "./pages/NowPlayingPage";
import PublicNavbar from "./components/PublicNavbar";

function App() {
  return (
    <div className="App">
      <Router>
        <PublicNavbar />
        <Switch>
          <Route exact path="/movie/:id" component={MovieDetailPage} />
          <Route exact path="/" component={NowPlayingPage} />
          <Route
            path="/movies/upcoming"
            render={(props) => <NowPlayingPage {...props} type="upcoming" />}
          />
          <Route
            path="/movies/top_rated"
            render={(props) => <NowPlayingPage {...props} type="top_rated" />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
