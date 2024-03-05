import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles.scss';
import { 
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    SignInAuthUserWithEmailAndPassword
} from '../../Utils/Firebase/firebase.utils';
import Button from "../button/button.component";
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
            const { user } = await signInWithGooglePopup();
            const userDocRef = await createUserDocumentFromAuth(user);
        }catch(error){
            console.log('Error occured: ',error.message);
        }
      };
    const handleSubmit = async(event)=>{
        event.preventDefault();

        try{
            console.log("hi");
            const response = await SignInAuthUserWithEmailAndPassword(email,password);
            console.log(response);
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
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
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
                <div className="buttons-container">
                <Button type="submit" children='Sign In'/>
                <Button children='Google Sign In' onClick={signInWithGoogle} buttonType='google'/>
                </div>
            </form>
        </div>
    )
}
export default SignInForm;