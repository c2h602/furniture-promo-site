import "./App.css";
import { Layout } from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import MaterialsPage from "./pages/MaterialsPage";
import ReviewsPage from "./pages/ReviewsPage";
import OrderPage from "./pages/OrderPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<MainPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/materials' element={<MaterialsPage />} />
            <Route path='/reviews' element={<ReviewsPage />} />
            <Route path='/order' element={<OrderPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
