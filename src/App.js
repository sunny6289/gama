import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes,Route } from 'react-router-dom';
import { createUserDocumentFromAuth, onAuthStateChangedListener } from './Utils/Firebase/firebase.utils'
import { setCurrentUser } from './store/user/user.action';
import Home from './routes/Home/home.component';
import Navigation from './routes/navigation.component/navigation.component';
import Authentication from './routes/Authentication/authentication.component';
import Contact from './routes/Contact/contact.component';
import Shop from './routes/Shop/shop.component';
import Checkout from './routes/Checkout/checkout.component';

const App = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    const unsubscribe = onAuthStateChangedListener((user)=>{
      if(user){
          createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    })

    return unsubscribe;
  },[]);

  return(
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop/*' element={<Shop/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='auth' element={<Authentication/>}/>
        <Route path='checkout' element={<Checkout/>}/>
      </Route>
    </Routes>
  )
}

export default App;