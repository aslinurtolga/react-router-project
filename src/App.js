import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<div>home page</div>} /> */}
        {/* this is going to reflect whatevet we have in the URL
        so again, we install the package, we grab three components browser router, root and root browser or connect to the browser. Root is going to be a parent for all our routes and then for every page we'll set up a root component with two props a path and then what we to render, we pass into the element
        */}

        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />

        <Route
          path="testing"
          element={
            <div>
              <h2>Testing</h2>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
