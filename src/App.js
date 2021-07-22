import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./app.css"
import Home from "./pages/Home/Home";
import Project from "./pages/Project/Project";
import ViewAll from "./pages/ViewAll/ViewAll";
import NotFound from "./pages/404/NotFound"
function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/project/:projectName">
            <Project />
          </Route>
          <Route exact path="/projects">
            <ViewAll />
          </Route>
          <Route component={NotFound} />
      </Switch>
    </Router>
    
  );
}

export default App;
