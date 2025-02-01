import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import Lesson10 from "./lessons/lesson10/Lesson10";
import Layout from "./layout/Layout";
import Lesson05 from "./lessons/lesson05/Lesson05";
import Lesson10 from "./lessons/lesson10/Lesson10";
import NoPage from "./components/noPage/NoPage";
import HomePage from "./components/homePage/HomePage";
// import HomeWork08 from './homeWorks/homeWork08/HomeWork08'
// import Lesson08 from './lessons/lesson08/Lesson08'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="lesson-05" element={<Lesson05 />} />
          <Route path="lesson-10" element={<Lesson10 />} />
          <Route path="lesson-1" element={<Lesson10 />} />
          <Route path="lesson-2" element={<Lesson10 />} />
          <Route path="lesson-3" element={<Lesson10 />} />
          <Route path="lesson-4" element={<Lesson10 />} />
          <Route path="lesson-5" element={<Lesson10 />} />
          <Route path="lesson-6" element={<Lesson10 />} />
          <Route path="lesson-7" element={<Lesson10 />} />
          <Route path="lesson-8" element={<Lesson10 />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
