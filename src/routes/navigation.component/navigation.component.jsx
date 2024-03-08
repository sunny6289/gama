
import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context'
import { signOutUser } from '../../Utils/Firebase/firebase.utils'
import './navigation.styles.scss';

const Navigation = ()=>{
    const { currentUser,setCurrentUser } = useContext(UserContext);

    const signOutHandler = async()=>{
        try{
            await signOutUser();
            setCurrentUser(null);
        }catch(error){
            console.log("Error: ",error.message);
        }
    }
    return (
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to='/'>
                <CrwnLogo className="logo"/>
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to='/shop'>
                    SHOP
                </Link>
                <Link className="nav-link" to='/contact'>
                    CONTACT
                </Link>
                {
                    currentUser ? (
                        <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
                    ) : (
                        <Link className="nav-link" to='/auth'>SIGN IN</Link>
                    )
                }
                <Link className="nav-link" to='/cart'>
                    CART
                </Link>
            </div>
        </div>
            <Outlet/>
        
      </Fragment>
    )
  }

  export default Navigation;