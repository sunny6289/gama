import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';    
import { AuthForms } from './authentication.styles.jsx';
  const Authentication = () => {   
    return (
      <AuthForms>
        <SignInForm/>
        <SignUpForm/>
      </AuthForms>
    );
  };
  
  export default Authentication;