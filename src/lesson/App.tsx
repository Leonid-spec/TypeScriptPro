import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homework08 from "./homeworks/homework08/Homework08";
import Layout from "./layout/Layout";
import Lesson05 from "./lessons/lesson05/Lesson05";
import FetchFox from "./components/fetchFox/FetchFox";
import Lesson08 from "./lessons/lesson08/Lesson08";
import NoPage from "./components/noPage/NoPage";
import HomePage from "./components/homePage/HomePage";
import Lesson04 from "./lessons/lesson04/Lesson04";
import Lesson09 from "./lessons/lesson09/Lesson09";
import Lesson10 from "./lessons/lesson10/Lesson10";
import Lesson11 from "./lessons/lesson11/FormGender";
import Lesson12 from "./lessons/lesson12/Lesson12";
import Lesson13 from "./lessons/lesson13/Lesson13";
import HomeWork13 from "./lessons/homeWork13/RegisterForm";
import RegisterForm from "./lessons/homeWork13/RegisterForm";

function App() {
  return (
    // оборачиваем все приложение в компонент HashRouter из библиотеки React Router
    <HashRouter>
      {/* импортируем компонент Routes (пути) вокруг всех компонентов приложения */}
      <Routes>
        {/* В обертке Route (один путь) - передаем пропсами: element - компонент назначаемый на путь, path - путь до компонента */}
        <Route path="/" element={<Layout />}>
          {/* компоненты ниже придут в Layout на место Outlet */}
          {/* path - это путь до компонента */}
          {/* это же значение 'path' мы используем в навигационных элементах Link в пропсе 'to', чтобы они работали, как ссылка на компонент */}
          <Route path="/" element={<HomePage />} />
          <Route path="fetch-fox" element={<FetchFox />} />
          <Route path="lesson-1" element={<h2>Lesson 1</h2>} />
          <Route path="lesson-2" element={<h2>Lesson 2</h2>} />
          <Route path="lesson-3" element={<h2>Lesson 3</h2>} />
          <Route path="lesson-4" element={<Lesson04 />} />
          <Route path="lesson-5" element={<Lesson05 />} />
          <Route path="lesson-6" element={<h2>Lesson 6</h2>} />
          <Route path="lesson-7" element={<h2>Lesson 7</h2>} />
          <Route path="lesson-8" element={<Lesson08 />} />
          <Route path="lesson-9" element={<Lesson09 />} />
          <Route
            path="lesson-10"
            element={<h2>Lesson 10. react practice ⚡️</h2>}
          />
          <Route path="lesson-11" element={<Lesson11 />} />
          <Route path="lesson-12" element={<Lesson12 />} />
          <Route path="lesson-13" element={<Lesson13 />} />
          <Route path="homeWork-13" element={<RegisterForm />} />
          {/* компонент по пути * будет отображаться по всем путям, которые явно не описаны в маршрутизации  */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
