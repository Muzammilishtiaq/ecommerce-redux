import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Home from '../Screen/Home';
import Cart from '../Screen/Cart';
import Product from '../Screen/Product';
import ProductDetail from '../Screen/ProductDetail';
import CheckOut from '../Screen/CheckOut';
import OrderPage from '../Screen/OrderPage';
import OrderDetailPage from '../Screen/OrderDetailPage';




export default function CustomerRouter() {
  return (
    <div>
        <div>
        <Navbar />
        </div>
      <Routes>
        <Route path='/*' Component={Home}/>
        <Route path='/cart' Component={Cart}/>
        <Route path='/:levelOne/:levelTwo/:levelThree' Component={Product}/>
        <Route path='/Product/:productid' Component={ProductDetail}/>
        <Route path='/checkout' Component={CheckOut}/>
        <Route path='/account/order' Component={OrderPage}/>
        <Route path='/account/order/:orderid' Component={OrderDetailPage}/>
      </Routes>
      <div>
        <Footer/>
      </div>
    </div>
  )
}
