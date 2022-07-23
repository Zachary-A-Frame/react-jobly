import React from "react";
import { useForm } from "react-hook-form";
import "./signup.css"
import { useNavigate } from "react-router-dom"
import JoblyApi from "../api"

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate()

    const onSubmit = data => {
        console.log(data);
        JoblyApi.signup(data)
        // Set token, then navigate to homepage

        navigate('/')
    }

    // const handleNav = e => {
    //     e.preventDefault()
    //     navigate("/")
    // }
    // There is a lot of reused code down below. I could absolutely make this shorter, in the interest of time and flexibility, I'm not going to worry about it. We could use state to configure this to be less reused code, but in our case it isn't particularly necessary, as we only have four form fields. We could also check which error type we have, etc, there's lots of things we can do to shorten this.

    return (
        <div className="signup">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="username">Username</label><br />
                <input autoComplete="section-username section"{...register("username", { required: true, minLength: 4, maxLength: 25 })} /><br />
                {errors.username?.type === 'required' && <p style={{ color: "red" }}>Enter a valid username!</p>}
                {errors.username?.type === 'minLength' && <p style={{ color: "red" }}>Must be at least 4 characters!</p>}
                {errors.username?.type === 'maxLength' && <p style={{ color: "red" }}>Must be less than 25 characters!</p>}

                <label htmlFor="password">Password</label><br />
                <input type="password" autoComplete="section-password section" {...register("password", { required: true, minLength: 4, maxLength: 25 })} /><br />
                {errors.password?.type === 'required' && <p style={{ color: "red" }}>Enter a valid password!</p>}
                {errors.password?.type === 'minLength' && <p style={{ color: "red" }}>Must be at least 4 characters!</p>}
                {errors.password?.type === 'maxLength' && <p style={{ color: "red" }}>Must be less than 25 characters!</p>}


                <label htmlFor="firstName">First Name</label><br />
                <input autoComplete="section-firstName section"{...register("firstName", { required: true, minLength: 2, maxLength: 50, pattern: /^[A-Za-z]+$/ })} /><br />
                {errors.firstName?.type === 'required' && <p style={{ color: "red" }}>Enter a valid first name!</p>}
                {errors.firstName?.type === 'minLength' && <p style={{ color: "red" }}>Must be at least 2 characters!</p>}
                {errors.firstName?.type === 'maxLength' && <p style={{ color: "red" }}>Must be less than 50 characters!</p>}

                <label htmlFor="lastName">Last Name</label><br />
                <input autoComplete="section-lastName section" {...register("lastName", { required: true, minLength: 2, maxLength: 50, pattern: /^[A-Za-z]+$/ })} /><br />
                {errors.lastName?.type === 'required' && <p style={{ color: "red" }}>Enter a valid last name!</p>}
                {errors.lastName?.type === 'minLength' && <p style={{ color: "red" }}>Must be at least 2 characters!</p>}
                {errors.lastName?.type === 'maxLength' && <p style={{ color: "red" }}>Must be less than 50 characters!</p>}

                <label htmlFor="email">email</label><br />
                <input autoComplete="section-email section"{...register("email", { required: true, minLength: 2, maxLength: 50 })} /><br />
                {errors.email?.type === 'required' && <p style={{ color: "red" }}>Enter a valid email!</p>}
                {errors.email?.type === 'minLength' && <p style={{ color: "red" }}>Must be at least 2 characters!</p>}
                {errors.email?.type === 'maxLength' && <p style={{ color: "red" }}>Must be less than 50 characters!</p>}

                <input type="submit" />
            </form>
        </div>
    );
}

export default Signup