import React, { useState } from 'react';
const RegisterForm = props => {
    const [ formState, setFormState ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        validFirstName: true,
        validLastName: true,
        validEmail: true,
        validPassword: true,
        validConfirmPassword: true,
    })
    const onChangeHandler = event => {
        event.preventDefault();
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        })
    }
    const onSubmitHandler = event => {
        event.preventDefault();
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        })
        console.log(formState)
    }

    if(formState.firstName.length < 2 && formState.firstName.length != 0){
        formState.validFirstName = false;
    }
    else{
        formState.validFirstName = true;
    }

    if(formState.lastName.length < 2 && formState.lastName.length != 0){
        formState.validLastName = false;
    }
    else{
        formState.validLastName = true;
    }

    if(formState.email.length < 2 && formState.email.length != 0){
        formState.validEmail = false;
    }
    else{
        formState.validEmail = true;
    }

    if(formState.password.length < 8 && formState.password.length != 0){
        formState.validPassword = false;
    }
    else{
        formState.validPassword = true;
    }
    if(formState.conformPassword !== formState.password && formState.confirmPassword.length != 0){
        formState.validConfirmPassword = false;
    }
    else{
        formState.validConfirmPassword = true;
    }
     console.log(formState);
    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>First Name</label>
                <input type="text" name="firstName" onChange={onChangeHandler}/>
                {formState.validFirstName ? "" : "GOD DAMN YOUR FIRST NAME IS SHORTER THAN 2"}
                <br/>        
                <label>Last Name</label>
                <input type="text" name="lastName" onChange={onChangeHandler}/>
                {formState.validLastName ? "" : "GOD DAMN YOUR LAST NAME IS SHORTER THAN 2"}
                <br/>        
                <label>Email</label>
                <input type="email" name="email" onChange={onChangeHandler}/>
                {formState.validEmail ? "" : "GOD DAMN YOUR EMAIL IS SHORTER THAN 2"}
                <br/>        
                <label>Password</label>
                <input type="password" name="password" onChange={onChangeHandler}/>
                <p>{formState.validPassword ? "" : "password is shorter than 8"}</p>
                <br/>        
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" onChange={onChangeHandler}/>
                <p>{formState.validConfirmPassword ? "" : "Password not the same"}</p>
                <br/>   
                <input type="submit" />     
            </form>
                {/* <ul>
                    <li>{formState.firstName}</li>
                    <li>{formState.lastName}</li>
                    <li>{formState.email}</li>
                    <li>{formState.password}</li>
                    <li>{formState.confirmPassword}</li>
                </ul> */}

        </div>
    );
}
export default RegisterForm;