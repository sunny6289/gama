import { Routes,Route } from 'react-router-dom';
import Home from './routes/home.component/home.component';
import Navigation from './routes/navigation.component/navigation.component';
import SignIn from './routes/SignIn/signin.component';
import Contact from './routes/Contact/contact.component';
import Cart from './routes/Cart/cart.component';


const Shop = ()=>{
  return(
    <h1>Hi I'm shop</h1>
  )
}

const App = () => {
  return(
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='sign-in' element={<SignIn/>}/>
        <Route path='cart' element={<Cart/>}/>
      </Route>
    </Routes>
  )
}

export default App;