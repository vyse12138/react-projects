import "./style/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import ShoppingBuddy from "./pages/ShoppingBuddy";
import Clock from "./pages/Clock";
import TicTacToe from "./pages/TicTacToe";
import About from "./pages/About";
import Error from "./pages/Error";
import Cocktails from "./pages/Cocktails";
import Markdown from "./pages/Markdown";
import SingleCocktail from "./pages/SingleCocktail";

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/ShoppingBuddy" element={<ShoppingBuddy />} />

        <Route path="/Cocktails" element={<Cocktails />} />

        <Route path="/Cocktails/:id" element={<SingleCocktail />} />

        <Route path="/Clock" element={<Clock />} />

        <Route path="/TicTacToe" element={<TicTacToe />} />

        <Route path="/Markdown" element={<Markdown />} />

        <Route path="/About" element={<About />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
