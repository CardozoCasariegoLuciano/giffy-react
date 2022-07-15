import "./App.css";
import {Router, Route } from "wouter";
import Home from "./pages/Home/Home";
import GifDetails from "./pages/GifDetails/GifDetails";
import SearchGifs from "./components/SearchGifs/SearchGifs";
import { GifContextProvider } from "./context/GifContext";

function App() {
  return (
    <GifContextProvider>
      <div className="App">
 				<Router base="/giffy">
        	<Route path="/" component={Home} />
        	<Route path="/search/:keyword/:rating?" component={SearchGifs} />
       		<Route path="/gif/:id" component={GifDetails} />
        	<Route path="/404" component={() => <h1>Erorr 404</h1>} />
 				</Router>
      </div>
    </GifContextProvider>
  );
}

export default App;
