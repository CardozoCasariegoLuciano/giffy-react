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
      </div>
    </GifContextProvider>
  );
}

export default App;
