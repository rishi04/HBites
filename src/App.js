import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import {productData, productDatatwo} from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <GlobalStyle />
     <Hero/>
     <Products heading='Fresh Hot Pizza' data={productData}/>
     <Feature/>
     <Products heading='Fresh Cupcakes' data={productDatatwo}/>
     <Footer/>
    </Router>
  );
}

export default App;
