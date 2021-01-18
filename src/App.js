import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import MovieDetailPage from "./pages/MovieDetailPage";
import NowPlayingPage from "./pages/NowPlayingPage";
import PublicNavbar from "./components/PublicNavbar";

function App() {
  return (
    <div className="App">
      <PublicNavbar />
      <Switch>
        <Route path="/movie/:id" component={MovieDetailPage} />
        <Route path="/" component={NowPlayingPage} />
      </Switch>
    </div>
  );
}

export default App;
