import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import ButtonPage from "./pages/ButtonPage";
import DialogPage from "./pages/DialogPage";
import SelectPage from "./pages/SelectPage";
import DropdownMenuPage from "./pages/DropdownMenuPage";
import ToastPage from "./pages/ToastPage";
import TablePage from "./pages/TablePage";
import { loadSavedTheme } from "./utils/theme";
import "./App.css";

const App: React.FC = () => {
  React.useEffect(() => {
    loadSavedTheme();
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/button" element={<ButtonPage />} />
          <Route path="/dialog" element={<DialogPage />} />
          <Route path="/select" element={<SelectPage />} />
          <Route path="/dropdown-menu" element={<DropdownMenuPage />} />
          <Route path="/toast" element={<ToastPage />} />
          <Route path="/table" element={<TablePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
