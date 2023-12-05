import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import EditProduct from './pages/EditProduct';
import NewProduct from './pages/NewProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList></ProductList>}></Route>
        <Route path="/newproduct" element={<NewProduct></NewProduct>}></Route>
        <Route path="/products/:id" element={<EditProduct></EditProduct>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
