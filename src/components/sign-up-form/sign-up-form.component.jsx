import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import {SignUpContainer, SignUpContainerHeading} from './sign-up-form.styles.jsx';
import { 
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth 
} from '../../Utils/Firebase/firebase.utils';
import Button from "../button/button.component";
const defaultFormFields = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}

const SignUpForm = ()=>{
    const [formField, setFormField] = useState(defaultFormFields);
    const {displayName,email,password,confirmPassword} = formField;
    const handleChange = (event) =>{
        const {name,value} = event.target;
        setFormField({...formField,[name]:value});
    }
    const resetFormField = ()=>{
        setFormField(defaultFormFields);
    }
    const handleSubmit = async(event)=>{
        event.preventDefault();

        if(password !== confirmPassword){
            alert("Password and Confirm Password must match")
            return;
        }
        try{
            const {user} = await createAuthUserWithEmailAndPassword(email,password);
            user.displayName = displayName;
            await createUserDocumentFromAuth(user);
            resetFormField();
            }catch(error){
                if(error.code === 'auth/email-already-in-use'){
                    alert("Email already in use")
                }
                console.log('Error while authentication',error.message);
            }
    }

    return(
        <SignUpContainer>
            <SignUpContainerHeading>Don't have an account?</SignUpContainerHeading>
            <span>Sign up with Email and Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label = "Display Name"
                    type="text" 
                    required 
                    onChange={handleChange} 
                    value={displayName} 
                    name="displayName"
                />
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
                <FormInput
                    label = "Confirm Password"
                    type="password" 
                    required 
                    onChange={handleChange} 
                    value={confirmPassword} 
                    name="confirmPassword"
                />
                <Button type="submit" children='Sign Up'/>
            </form>
        </SignUpContainer>
    )
}
export default SignUpForm;