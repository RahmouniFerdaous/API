import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import About from "./Components/About";
import ListUsers from "./Components/ListUsers";
import ItemDetails from "./Components/ItemDetails";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        {" "}
        {/* have the first match without exact it will be rendering only Home Component */}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/listUsers" component={ListUsers} />
        <Route path="/listUsers/:id" component={ItemDetails} />
      </Switch>
    </div>
  );
}

export default App;
