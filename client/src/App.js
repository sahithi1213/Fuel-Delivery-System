import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Homepage from './screens/Homepage'
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Ordersscreen from './screens/Ordersscreen'
function App() {
  return (
    <div className="App">
      <Navbar />

      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Homepage/>} />
        <Route exact path="/cart" element={<Cartscreen/>}/>
        <Route exact path="/register" element={<Registerscreen/>}/>
        <Route exact path="/login" element={<Loginscreen/>}/>
        <Route exact path="/orders" element={<Ordersscreen/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
