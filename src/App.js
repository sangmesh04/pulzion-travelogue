//import logo from './logo.svg';
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Trip from "./Trip";
import Tripdetails from "./Tripdetails";
import MapT from "./Map";
import Media from "./Media";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/trips" element={<Trip />} />
        <Route path="/tripdetail" element={<Tripdetails />} />
        <Route path="/map" element={<MapT />} />
        <Route path="/media" element={<Media />} />
      </Routes>
    </div>
  );
}

export default App;
