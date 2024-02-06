import { Routes, Route } from "react-router-dom";
import "./App.css";

// ----------
// Pages
// ----------
import MainLayout from "components/app/MainLayout";
import Home from "pages/Home";
import Employee from "pages/Employee";
import Manager from "pages/Manager";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" index element={<Home />} />
        <Route path="/employee" index element={<Employee />} />
        <Route path="/manager" index element={<Manager />} />
      </Route>
    </Routes>
  );
}

export default App;
