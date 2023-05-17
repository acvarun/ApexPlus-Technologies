import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import AddScenario from './AddScenario/AddScenario';
import Vehicle from './Vehicle/Vehicle';
import AllScenarios from './AllScenarios/AllScenarios';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/scenarios" element={<AddScenario />} />
        <Route path="/vehicles" element={<Vehicle/>} />
        <Route path="/allscenarios" element={<AllScenarios/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
