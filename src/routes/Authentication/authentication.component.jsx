import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import './authentication.styles.scss';
    import SignUpForm from '../../components/sign-up-form/sign-up-form.component';    
  const Authentication = () => {   
    return (
      <div className='auth-forms'>
        <SignInForm/>
        <SignUpForm/>
      </div>
    );
  };
  
  export default Authentication;