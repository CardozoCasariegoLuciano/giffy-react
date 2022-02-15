import "./App.css";
import { Route } from "wouter";
import Home from "./pages/Home/Home";
import GifDetails from "./pages/GifDetails/GifDetails";
import SearchGifs from "./components/SearchGifs/SearchGifs";
import { GifContextProvider } from "./context/GifContext";

function App() {
  return (
    <GifContextProvider>
      <div className="App">
        <Route path="/" component={Home} />
        <Route path="/search/:keyword" component={SearchGifs} />
        <Route path="/gif/:id" component={GifDetails} />
        <Route path="/404" component={() => <h1>Erorr 404</h1>} />
      </div>
    </GifContextProvider>
  );
}

export default App;
