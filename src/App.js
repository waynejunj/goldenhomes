import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/Homepage/Homepage';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Makepayment from './components/makepayment';
import Addproducts from './components/addproducts';
import Getproducts from './components/getproducts';
import Navbar from './components/Navbar/Navbar';
import './components/Navbar/Navbar.css'

// import cart provider 
import { CartProvider } from './components/contexts/CartContext';
import Cart from './components/Cart';
import PaymentSuccess from './components/PaymentSuccess';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App m-3">        

        
          <Navbar/>
            
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/makepayment' element={<Makepayment />} />
            <Route path='/addproducts' element={<Addproducts />} />
            <Route path='/properties' element={<Getproducts/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path="/payment-success" element={<PaymentSuccess />} />
          </Routes>
        
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;