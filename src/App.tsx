import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation, Layout } from "./components";
import { Home } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
