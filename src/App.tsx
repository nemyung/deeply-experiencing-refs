import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, CallbackRef } from "./pages";
import { Navigation, Layout } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="callback-ref" element={<CallbackRef />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
