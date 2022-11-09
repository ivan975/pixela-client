import React from 'react';
import { toast } from 'react-toastify';

const AddReview = () => {

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;

        const review = {
            name: form.name.value,
            image: form.image.value,
            description: form.description.value,
            ratings: form.ratings.value
        };
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success('Review Added Successfully')
                }
                else {
                    toast.error(`Sorry, couldn't added review`)
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
                        <label className="block text-gray-800 text-start">Name</label>
                        <input type="text" name="name" id="name" placeholder="john doe" className="w-full px-4 py-3 rounded-md text-black focus:dark:border-amber-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="text" className="block text-gray-800 text-start">Image</label>
                        <input type="text" name="image" id="image" placeholder="Image url" className="w-full px-4 py-3 rounded-md text-black focus:dark:border-amber-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="text" className="block text-gray-800 text-start">Description</label>
                        <input type="text" name="description" id="description" placeholder="description" className="w-full px-4 py-3 rounded-md text-black focus:dark:border-amber-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="text" className="block text-gray-800 text-start">Ratings</label>
                        <input type="text" name="ratings" id="ratings" placeholder="Ratings" className="w-full px-4 py-3 rounded-md text-black focus:dark:border-amber-400" />
                    </div>
                    <button className="mt-5 block w-full p-3 text-center rounded-sm text-gray-900 bg-yellow-400 font-semibold">Add product</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                </div>
            </div>
        </div >
    );
};

export default AddReview;