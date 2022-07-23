import React from "react";
import { useForm } from "react-hook-form";
import "./signup.css"
import { useNavigate } from "react-router-dom"
import JoblyApi from "../api"

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate()

    const onSubmit = data => {
        console.log(data);
        JoblyApi.signup(data)
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
                <input type="submit" />
            </form>
        </div>
    );
}

export default Login