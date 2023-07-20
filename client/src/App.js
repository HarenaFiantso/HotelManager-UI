import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* This is the route of the home page of the application */}
          <Route path="/" element={<Home />} />

          {/* This is the route of the hotel list page of the application */}
          <Route path="/hotels" element={<List />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
