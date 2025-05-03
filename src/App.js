import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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

function App() {
  return (
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
        </Routes>
       
      </div>
    </Router>
  );
}

export default App;