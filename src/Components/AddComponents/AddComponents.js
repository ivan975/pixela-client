import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddComponents = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const service = {
            name: form.name.value,
            price: parseInt(e.target.price.value),
            image: form.image.value,
            description: form.description.value
        };
        fetch('https://assignment-11-server-zeta.vercel.app/service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success('service Added Successfully');
                    form.reset();
                    navigate(from, { replace: true })
                }
                else {
                    toast.error(`Sorry, couldn't add review`)
                }
            })
            .catch(err => {
                toast.error(err.message);
            })
    }

    return (
        <div className="bg-gray-800 text-gray-100 h-screen">
            <div className="w-full max-w-md p-8 mx-auto rounded-xl bg-green-500 text-white">
                <h1 className="text-2xl font-bold text-center">Review</h1>
                <form onSubmit={handleSubmit} className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label className="block text-gray-800 text-start">Service Name</label>
                        <input type="text" name="name" id="name" placeholder="Floral Design" className="w-full px-4 py-3 rounded-md text-black focus:dark:border-amber-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="text" className="block text-gray-800 text-start">Description</label>
                        <input type="text" name="description" id="description" placeholder="description" className="w-full px-4 py-3 rounded-md text-black focus:dark:border-amber-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="text" className="block text-gray-800 text-start">Image</label>
                        <input type="text" name="image" id="image" placeholder="image url" className="w-full px-4 py-3 rounded-md text-black focus:dark:border-amber-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="text" className="block text-gray-800 text-start">Description</label>
                        <input type="text" name="price" id="price" placeholder="$50000" className="w-full px-4 py-3 rounded-md text-black focus:dark:border-amber-400" />
                    </div>
                    <button className="mt-5 block w-full p-3 text-center rounded-sm text-gray-900 bg-yellow-400 font-semibold">Add service</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                </div>
            </div>
        </div >
    );
};

export default AddComponents;