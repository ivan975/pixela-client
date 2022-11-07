import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/UseContexts';
import { toast } from 'react-toastify';

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.username.value;
        const password = form.password.value;

        console.log(email, password);

        createUser(email, password)
            .then(res => {
                toast.success('Sign up successful')
                const user = res.user;
                console.log(user);
                form.reset();
            })
            .catch(error => {
                console.error(error)
                // setPasswordError(error.message)
            })

    }

    return (
        <div className=" w-full max-w-md p-8 mx-auto mt-12 rounded-xl bg-cyan-400 text-white">
            <h1 className="text-2xl font-bold text-center">Register</h1>
            <form onSubmit={handleRegister} className="space-y-6 ng-untouched ng-pristine ng-valid">
                <div className="space-y-1 text-sm">
                    <label className="block dark:text-gray-400 text-start">Email</label>
                    <input type="text" name="email" id="username" placeholder="email" className="w-full px-4 py-3 rounded-md text-black focus:dark:border-amber-400" />
                </div>
                <div className="space-y-1 text-sm">
                    <label for="password" className="block dark:text-gray-400 text-start">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md text-black focus:dark:border-amber-400" />
                    <div className="flex justify-end text-xs dark:text-gray-400">
                        <Link to="/">Forgot Password?</Link>
                    </div>
                </div>
                <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-white">Sign in</button>
            </form>
            <p className="text-xs text-center sm:px-6 dark:text-gray-400">Already have an account?
                <Link to='/login' className="underline dark:text-gray-100">Sign in</Link>
            </p>
        </div>
    );
};

export default Register;