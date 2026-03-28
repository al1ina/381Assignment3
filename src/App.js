import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import FlavorsPage from "./FlavorsPage";
import LoginPage from "./LoginPage";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/flavors" element={<FlavorsPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;