import { Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import CodeSplitting from "./pages/CodeSplitting";

//code splitting
const TodoPage = lazy(() => import("./pages/TodoPage/TodoPage"));
const PeoplePage = lazy(() => import("./pages/PeoplePage"));

function App() {
  return (
    <>
      <Banner />
      <Suspense fallback={<div>Loading....</div>}>
        <Routes>
          <Route strict exact path="/" element={<TodoPage />} />
          <Route strict exact path="/peoples" element={<PeoplePage />} />
          <Route strict exact path="/test" element={<CodeSplitting />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
