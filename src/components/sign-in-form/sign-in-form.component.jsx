import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
// import Button, { B}
import { 
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    SignInAuthUserWithEmailAndPassword
} from '../../Utils/Firebase/firebase.utils';

import { SignInContainer,SignInContainerHeading, ButtonsContainer } from './sign-in-form.styles.jsx';

const defaultFormFields = {
    email:'',
    password:'',
}

const SignInForm = ()=>{
    const [formField, setFormField] = useState(defaultFormFields);
    const {email,password} = formField;
    // console.log(formField);
    const handleChange = (event) =>{
        const {name,value} = event.target;
        setFormField({...formField,[name]:value});
    }
    const resetFormField = ()=>{
        setFormField(defaultFormFields);
    }
    const signInWithGoogle = async () => {
        try{
            await signInWithGooglePopup();
        }catch(error){
            console.log('Error occured: ',error.message);
        }
      };
    const handleSubmit = async(event)=>{
        event.preventDefault();

        try{
            await SignInAuthUserWithEmailAndPassword(email,password);
            resetFormField();
            }catch(error){
                if(error.code === 'auth/invalid-credential'){
                    alert("Error: Invalid email or password");
                    resetFormField();
                }
                console.log('Error: ',error.message);
            }
    }

    return(
        <SignInContainer>
            <SignInContainerHeading>Already have an account?</SignInContainerHeading>
            <span>Sign in with Email and Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label = "Email"
                    type="email" 
                    required 
                    onChange={handleChange} 
                    value={email} 
                    name="email"
                />
                <FormInput
                    label = "Password"
                    type="password" 
                    required 
                    onChange={handleChange} 
                    value={password} 
                    name="password"
                />
                <ButtonsContainer>
                <Button type="submit" children='Sign In'/>
                <Button type='button' children='Google Sign In' onClick={signInWithGoogle} buttonType={BUTTON_TYPE_CLASSES.google}/>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
}
export default SignInForm;