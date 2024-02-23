import { Routes, Route } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner/Banner";
import TodoPage from "./pages/TodoPage/TodoPage";
import PeoplePage from "./pages/PeoplePage";

function App() {
  return (
    <>
      <Banner />
      <Routes>
        <Route strict exact path="/" element={<TodoPage />} />
        <Route strict exact path="/peoples" element={<PeoplePage />} />
      </Routes>
    </>
  );
}

export default App;
