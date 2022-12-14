import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/UseContexts';
import { toast } from 'react-toastify';
import useTitle from '../../hooks/useTitle';

const Register = () => {
    useTitle('Sign Up')
    const { createUser, googleSignIn, } = useContext(AuthContext);
    const [passwordError, setPasswordError] = useState('');

    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    });

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    });

    const handleEmailChange = (e) => {
        const email = e.target.value;

        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setErrors({ ...errors, email: "Please provide a valid email" });
            setUserInfo({ ...userInfo, email: "" });
        } else {
            setErrors({ ...errors, email: "" });
            setUserInfo({ ...userInfo, email: e.target.value });
        }
    };

    const handlePasswordChange = (e) => {
        const password = e.target.value;
        const lengthError = password.length < 6;
        const noCapitalLetterError = !/[A-Z]{1,}/.test(password);
        const noSymbolError = !/[\!\@\#\$\%\^\&\*]{1,}/.test(password);

        if (lengthError) {
            setErrors({ ...errors, password: "Must be at least 6 characters" });
            setUserInfo({ ...userInfo, password: "" });
        }
        else if (noSymbolError) {
            setErrors({ ...errors, password: "Must have 1 special character" });
            setUserInfo({ ...userInfo, password: "" });
        }
        else if (noCapitalLetterError) {
            setErrors({ ...errors, password: "Must have 1 capital letter" });
            setUserInfo({ ...userInfo, password: "" });
        }
        else {
            setErrors({ ...errors, password: "" });
            setUserInfo({ ...userInfo, password: e.target.value });
        }
    };

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.username.value;
        const image = form.image.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(res => {
                toast.success('Sign up successful')
                const user = res.user;
                console.log(user);
                form.reset();
            })
            .catch(error => {
                console.error(error)
                setPasswordError(error.message)
            })
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                const user = res.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error)
                setPasswordError(error.message)
            })
    }

    return (
        <section className="bg-gray-800 text-gray-100 h-screen">
            <div className=" w-full max-w-md p-8 mx-auto rounded-xl bg-cyan-400 text-white">
                <h1 className="text-2xl font-bold text-center">Register</h1>
                <form onSubmit={handleRegister} className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-400 text-start">Name</label>
                        <input type="text" name="text" id="username" placeholder="John Doe" className="w-full px-4 py-3 rounded-md text-black focus:dark:border-amber-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-400 text-start">Image</label>
                        <input type="text" name="image" id="image" placeholder="image url" className="w-full px-4 py-3 rounded-md text-black focus:dark:border-amber-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-400 text-start">Email</label>
                        <input onChange={handleEmailChange} type="email" name="email" id="email" placeholder="john.doe@email.com" className="w-full px-4 py-3 rounded-md text-black focus:dark:border-amber-400" />
                        {errors.email && <p className="error-message text-red-600">{errors.email}</p>}
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="password" className="block dark:text-gray-400 text-start">Password</label>
                        <input onChange={handlePasswordChange} type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md text-black focus:dark:border-amber-400" />
                        {errors.password && <p className="error-message text-red-600">{errors.password}</p>}
                        <div className="flex justify-end text-xs dark:text-gray-400">
                            <Link to="/">Forgot Password?</Link>
                        </div>
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-white font-bold">Sign up</button>
                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                        <p className="px-3 text-sm text-gray-600">Login with social accounts</p>
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button onClick={handleGoogleSignIn} aria-label="Log in with Google" className="p-3 rounded-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                        </button>
                    </div>
                </form>
                <p className="text-xs text-center sm:px-6 text-gray-800 font-bold mt-2">Already have an account?
                    <Link to='/login' className="underline font-bold text-gray-100">Sign in</Link>
                </p>
            </div>
        </section>
    );
};

export default Register;