import { BrowserRouter, Routes, Route } from "react-router-dom";

import Create from "./Components/Create";
import Claim from "./Components/Claim";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App text-center">
      <div className='m-5 fw-bold display-1'>金返して</div>

      <BrowserRouter>
        <Routes>
          <Route path="/create" element={<Create />} />
          <Route path="/" element={<Claim />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div >
  );
}

export default App;
