import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/UseContexts';
import { toast } from 'react-toastify';

const Register = () => {
    const { createUser } = useContext(AuthContext);
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
                        <p className='text-red-600'>{passwordError}</p>
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-white font-bold">Sign up</button>
                </form>
                <p className="text-xs text-center sm:px-6 text-gray-800 font-bold mt-2">Already have an account?
                    <Link to='/login' className="underline font-bold text-gray-100">Sign in</Link>
                </p>
            </div>
        </section>
    );
};

export default Register;