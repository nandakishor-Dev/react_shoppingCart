// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Shopcart from './pages/Shopcart';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Products from './pages/Products';
// import Nav from './pages/Nav';
import Notebook from './pages/Notebook';
import Sanitizer from './pages/Sanitizer';
import Bag from './pages/Bag';


function App() {
  return (
    <div className="App">
      {/* <Nav></Nav> */}
      {/* <Shopcart/> */}
      {/* <Home /> */}
      {/* <Products></Products> */}
      {/* <Notebook></Notebook> */}
      {/* <Sanitizer></Sanitizer> */}

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route path="/shopcart" element={<Shopcart></Shopcart>}></Route>
          <Route path="/products" element={<Products></Products>}></Route>
          <Route path="/notebook" element={<Notebook/>}></Route>
          <Route path="/sanitizer" element={<Sanitizer></Sanitizer>}></Route>
          <Route path="/bag" element={<Bag></Bag>}></Route>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
